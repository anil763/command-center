import { NextRequest, NextResponse } from 'next/server';
import { buildTree, getAllDocuments, getDocumentById, searchDocuments } from '@/lib/documents';
import { getVersion, startWatcher } from '@/lib/watcher';

export const dynamic = 'force-dynamic';

startWatcher();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const query = searchParams.get('q');

    if (id) {
      const document = getDocumentById(id);
      if (!document) {
        return NextResponse.json({ error: `Document not found: ${id}` }, { status: 404 });
      }
      return NextResponse.json(document);
    }

    const documents = query ? searchDocuments(query) : getAllDocuments();

    return NextResponse.json({
      version: getVersion(),
      documents,
      tree: buildTree(documents),
    });
  } catch (error) {
    console.error('[api/documents] Unexpected error', error);
    return NextResponse.json(
      {
        error: 'Failed to load documents',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
