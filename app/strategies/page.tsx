import Link from 'next/link';

export default function StrategiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Strategic Execution Plans</h2>
        <p className="text-gray-300">Two autonomous systems for revenue acceleration and brand growth.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/strategies/ugc-outreach">
          <div className="p-6 border border-slate-700 rounded-lg hover:bg-slate-800 cursor-pointer transition bg-slate-900">
            <h3 className="text-xl font-bold mb-2 text-white">🎬 UGC Outreach System</h3>
            <p className="text-sm text-gray-300 mb-4">Systematic cold B2B machine that scales from $5K → $20K/mo</p>
            <div className="space-y-2 text-sm text-gray-300">
              <div><strong className="text-white">Goal:</strong> $20K/mo by Month 6</div>
              <div><strong className="text-white">Timeline:</strong> Implement Now, VA takes over Month 2</div>
              <div><strong className="text-white">Your Time:</strong> 5 hours/month (calls + closes only)</div>
              <div className="pt-3 text-blue-400">View full plan →</div>
            </div>
          </div>
        </Link>

        <Link href="/strategies/spiritual-growth">
          <div className="p-6 border border-slate-700 rounded-lg hover:bg-slate-800 cursor-pointer transition bg-slate-900">
            <h3 className="text-xl font-bold mb-2 text-white">🔮 Spiritual Technologist Growth</h3>
            <p className="text-sm text-gray-300 mb-4">5 independent revenue streams (not dependent on TikTok)</p>
            <div className="space-y-2 text-sm text-gray-300">
              <div><strong className="text-white">Goal:</strong> $10K+/mo by Month 18</div>
              <div><strong className="text-white">Timeline:</strong> Start Feb 26 (after Vault launch)</div>
              <div><strong className="text-white">Your Time:</strong> 10 hours/week (readings, videos, approvals)</div>
              <div className="pt-3 text-blue-400">View full plan →</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="p-6 bg-slate-900 border border-slate-700 rounded-lg">
        <h3 className="font-bold mb-2 text-white">Execution Timeline</h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div><strong className="text-white">NOW (Feb 21):</strong> Add both plans to dashboard + UGC outreach setup begins</div>
          <div><strong className="text-white">Feb 26 (Tue):</strong> Spiritual Technologist growth execution starts (SEO + email)</div>
          <div><strong className="text-white">Mar 1 (Sun):</strong> Vault launches + both systems support growth</div>
          <div><strong className="text-white">Month 2+:</strong> Delegate execution to VAs + automation</div>
        </div>
      </div>
    </div>
  );
}
