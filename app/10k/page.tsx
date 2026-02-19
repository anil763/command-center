import StatCard from '@/components/StatCard';

export default function TenKPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">$9.5K Mission Breakdown</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Numerology" value="$2,000" subtitle="$500 confirmed · 25% complete" />
        <StatCard title="UGC" value="$5,000" subtitle="$348 confirmed · 7% complete" />
        <StatCard title="Vault" value="$2,500" subtitle="$0 confirmed · 0% complete" />
      </div>
      <div className="card rounded-xl p-5">
        <h3 className="text-lg font-semibold">Execution Roadmap</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>• Week 1: lock morning execution rhythm and daily distribution</li>
          <li>• Week 2: outbound sprint (20/day) with UGC-focused follow-up</li>
          <li>• Week 3: convert active UGC pipeline and tighten Maestro case proof</li>
          <li>• Week 4: launch Gentleman&apos;s Vault pre-sale + waitlist nurture</li>
        </ul>
      </div>
    </div>
  );
}
