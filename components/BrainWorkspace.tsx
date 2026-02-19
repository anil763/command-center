"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { injectWikiLinks } from '@/lib/markdown';
import type { Document, DocumentsResponse } from '@/lib/types';

type Mode = 'brain' | 'docs' | 'memory';

const domainColor: Record<string, string> = {
  revenue: 'text-revenue',
  spiritual: 'text-spiritual',
  ugc: 'text-ugc',
  presidio: 'text-presidio',
  ashram: 'text-ashram',
};

export default function BrainWorkspace({ mode = 'brain' }: { mode?: Mode }) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const selected = useMemo(() => documents.find((d) => d.id === selectedId) ?? documents[0], [documents, selectedId]);

  const load = useCallback(async (q = '') => {
    try {
      const res = await fetch(`/api/documents${q ? `?q=${encodeURIComponent(q)}` : ''}`);

      if (!res.ok) {
        const message = `Failed to load documents (${res.status})`;
        setError(message);
        setDocuments([]);
        setLoading(false);
        return;
      }

      const data = (await res.json()) as DocumentsResponse;
      const docs = Array.isArray(data.documents) ? data.documents : [];
      setDocuments(docs);
      setSelectedId((prev) => (prev && docs.some((d) => d.id === prev) ? prev : docs[0]?.id || ''));
      setError(null);
    } catch (err) {
      console.error('[BrainWorkspace] load failed', err);
      setError('Could not fetch documents. Please retry.');
      setDocuments([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();

    const es = new EventSource('/api/events');
    es.onmessage = () => load();
    es.onerror = () => setError((prev) => prev ?? 'Realtime updates disconnected. Manual refresh still works.');

    return () => es.close();
  }, [load]);

  useEffect(() => {
    const timer = setTimeout(() => load(query), 250);
    return () => clearTimeout(timer);
  }, [load, query]);

  if (loading) return <div className="card rounded-xl p-6">Loading documents...</div>;

  return (
    <div className="grid gap-4 md:grid-cols-[320px,1fr]">
      <aside className="card rounded-xl p-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documents..."
          className="mb-3 w-full rounded-lg border border-[#222222] bg-[#111111] px-3 py-2 text-sm outline-none focus:border-revenue"
        />
        {error ? <p className="mb-3 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-300">{error}</p> : null}
        <div className="max-h-[70vh] space-y-1 overflow-auto">
          {documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelectedId(doc.id)}
              className={`w-full rounded-lg border p-2 text-left transition-all ${selected?.id === doc.id ? 'border-revenue bg-[#111111]' : 'border-[#222222] hover:border-[#3a3a3a] hover:bg-[#111111]'}`}
            >
              <p className="text-sm font-medium">{doc.title}</p>
              <p className={`text-xs ${domainColor[doc.domain] ?? 'text-muted'}`}>{doc.domain}</p>
            </button>
          ))}
          {!documents.length && !error ? <p className="rounded-lg border border-border p-3 text-sm text-muted">No documents matched your search.</p> : null}
        </div>
      </aside>

      <section className="card rounded-xl p-5">
        {selected ? (
          <>
            <h2 className="mb-1 text-2xl font-bold">{selected.title}</h2>
            <p className="mb-4 text-xs text-muted">{selected.relativePath}</p>
            {mode !== 'docs' && (
              <div className="mb-4 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-2 py-1 text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <article className="prose prose-invert max-w-none prose-pre:bg-[#0b0b0b]">
              <ReactMarkdown
                components={{
                  code(props) {
                    const { className, children, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                      <SyntaxHighlighter
                        PreTag="div"
                        language={match[1]}
                        style={vscDarkPlus}
                        customStyle={{ background: '#0b0b0b', border: '1px solid #222222', borderRadius: '10px' }}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    );
                  },
                  a(props) {
                    const href = props.href || '';
                    if (href.startsWith('brain://')) {
                      const title = decodeURIComponent(href.replace('brain://', '')).toLowerCase();
                      return (
                        <button
                          className="text-spiritual underline"
                          onClick={() => {
                            const found = documents.find((d) => d.title.toLowerCase() === title || d.id.toLowerCase().includes(title));
                            if (found) setSelectedId(found.id);
                          }}
                        >
                          {props.children}
                        </button>
                      );
                    }
                    return (
                      <a href={href} className="text-ugc underline" target="_blank" rel="noreferrer">
                        {props.children}
                      </a>
                    );
                  },
                }}
              >
                {injectWikiLinks(selected.content || '')}
              </ReactMarkdown>
            </article>
          </>
        ) : (
          <p className="text-muted">No documents found. Add markdown files in /workspace/brain to begin.</p>
        )}
      </section>
    </div>
  );
}
