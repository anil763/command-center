"use client";

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[app/error]', error);
  }, [error]);

  return (
    <div className="card rounded-xl p-6">
      <h2 className="text-xl font-semibold text-red-400">Page failed to load</h2>
      <p className="mt-2 text-sm text-muted">A runtime error occurred. Try again, or navigate to another section.</p>
      <button
        onClick={reset}
        className="mt-4 rounded-lg border border-border px-4 py-2 text-sm text-gray-100 hover:border-revenue hover:bg-[#111111]"
      >
        Retry
      </button>
    </div>
  );
}
