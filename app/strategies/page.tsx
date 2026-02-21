import Link from 'next/link';

export default function StrategiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Strategic Execution Plans</h2>
        <p className="text-muted">Two autonomous systems for revenue acceleration and brand growth.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/strategies/ugc-outreach">
          <div className="p-6 border rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <h3 className="text-xl font-bold mb-2">🎬 UGC Outreach System</h3>
            <p className="text-sm text-muted mb-4">Systematic cold B2B machine that scales from $5K → $20K/mo</p>
            <div className="space-y-2 text-sm">
              <div><strong>Goal:</strong> $20K/mo by Month 6</div>
              <div><strong>Timeline:</strong> Implement Now, VA takes over Month 2</div>
              <div><strong>Your Time:</strong> 5 hours/month (calls + closes only)</div>
              <div className="pt-3 text-blue-600">View full plan →</div>
            </div>
          </div>
        </Link>

        <Link href="/strategies/spiritual-growth">
          <div className="p-6 border rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <h3 className="text-xl font-bold mb-2">🔮 Spiritual Technologist Growth</h3>
            <p className="text-sm text-muted mb-4">5 independent revenue streams (not dependent on TikTok)</p>
            <div className="space-y-2 text-sm">
              <div><strong>Goal:</strong> $10K+/mo by Month 18</div>
              <div><strong>Timeline:</strong> Start Feb 26 (after Vault launch)</div>
              <div><strong>Your Time:</strong> 10 hours/week (readings, videos, approvals)</div>
              <div className="pt-3 text-blue-600">View full plan →</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="p-6 bg-slate-100 rounded-lg">
        <h3 className="font-bold mb-2">Execution Timeline</h3>
        <div className="space-y-3 text-sm">
          <div><strong>NOW (Feb 21):</strong> Add both plans to dashboard + UGC outreach setup begins</div>
          <div><strong>Feb 26 (Tue):</strong> Spiritual Technologist growth execution starts (SEO + email)</div>
          <div><strong>Mar 1 (Sun):</strong> Vault launches + both systems support growth</div>
          <div><strong>Month 2+:</strong> Delegate execution to VAs + automation</div>
        </div>
      </div>
    </div>
  );
}
