import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="card rounded-xl p-6">
      <h2 className="text-xl font-semibold">404 — Page not found</h2>
      <p className="mt-2 text-sm text-muted">The route you requested does not exist.</p>
      <Link href="/" className="interactive mt-4 inline-block rounded-lg border border-border px-4 py-2 text-sm hover:border-revenue">
        Back to dashboard
      </Link>
    </div>
  );
}
