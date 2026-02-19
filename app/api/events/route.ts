import { NextResponse } from 'next/server';
import { getVersion, startWatcher, subscribe } from '@/lib/watcher';

export const dynamic = 'force-dynamic';

startWatcher();

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      let isClosed = false;
      let ping: NodeJS.Timeout | null = null;
      let unsubscribe: () => void = () => {};

      const close = () => {
        if (isClosed) return;
        isClosed = true;
        if (ping) clearInterval(ping);
        unsubscribe();
        try {
          controller.close();
        } catch {
          // Ignore close errors on already-closed streams.
        }
      };

      const safeEnqueue = (payload: string) => {
        if (isClosed) return;
        try {
          controller.enqueue(encoder.encode(payload));
        } catch {
          close();
        }
      };

      safeEnqueue(`data: ${JSON.stringify({ type: 'ready', version: getVersion() })}\n\n`);

      unsubscribe = subscribe((version) => {
        safeEnqueue(`data: ${JSON.stringify({ type: 'documents_changed', version })}\n\n`);
      });

      ping = setInterval(() => {
        safeEnqueue(`event: ping\ndata: ${Date.now()}\n\n`);
      }, 25000);
    },
    cancel() {
      // noop: cleanup handled by enqueue failures / controller close lifecycle
    },
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
