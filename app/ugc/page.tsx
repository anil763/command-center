import StatCard from '@/components/StatCard';

const dueDateLabel = 'February 22, 2026';
const daysRemaining = 3;

export default function UGCPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">UGC Execution</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Active Deals" value="1" subtitle="Primary focus: Maestro video" />
        <StatCard title="Priority" value="High" subtitle="Top deliverable this week" />
        <StatCard title="Due Window" value={`${daysRemaining} days`} subtitle={`Due ${dueDateLabel}`} />
      </div>

      <div className="card rounded-xl border-2 p-6" style={{ borderColor: 'var(--revenue)', background: 'linear-gradient(180deg, rgba(245,158,11,0.08), rgba(245,158,11,0.02))' }}>
        <p className="text-xs uppercase tracking-wide text-[#fbbf24]">Active Deliverable</p>
        <h3 className="mt-2 text-2xl font-bold">🎬 Maestro Video</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="text-xs text-muted">Status</p>
            <p className="font-semibold">In Progress</p>
          </div>
          <div>
            <p className="text-xs text-muted">Due</p>
            <p className="font-semibold">{dueDateLabel}</p>
          </div>
          <div>
            <p className="text-xs text-muted">Days Remaining</p>
            <p className="font-semibold text-[#fbbf24]">{daysRemaining}</p>
          </div>
          <div>
            <p className="text-xs text-muted">Priority</p>
            <p className="font-semibold">High</p>
          </div>
          <div>
            <p className="text-xs text-muted">Countdown</p>
            <p className="font-semibold">T-{daysRemaining}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card rounded-xl p-5">
          <h3 className="font-semibold">Portfolio Highlights</h3>
          <ul className="mt-2 space-y-2 text-sm text-muted">
            <li>• Keep strongest beauty/lifestyle examples ready for outreach</li>
            <li>• Maintain quick turnaround clips for brand trust</li>
            <li>• Track wins to convert into future retainer positioning</li>
          </ul>
        </div>
        <div className="card rounded-xl p-5">
          <h3 className="font-semibold">Submission Queue</h3>
          <ul className="mt-2 space-y-2 text-sm text-muted">
            <li>• Maestro video — in progress (priority)</li>
            <li>• Backstage brand requests — daily</li>
            <li>• Billo / Insense checks — ongoing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
