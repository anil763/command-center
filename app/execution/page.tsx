'use client';

import { useState } from 'react';

export default function ExecutionPage() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h2 className="text-3xl font-bold text-white">⚡ Execution Playbook</h2>
        <p className="text-gray-300 mt-2">Week-by-week action items. Two strategies. One goal: $5K+ revenue by May 31.</p>
      </div>

      <div className="bg-blue-950 border border-blue-800 p-4 rounded-lg">
        <h3 className="font-bold text-white mb-2">🎯 Master Timeline</h3>
        <div className="text-sm text-gray-300 space-y-2">
          <div><strong className="text-white">Feb 24-28:</strong> UGC Setup Week (85 min) — Get Apollo + GHL running</div>
          <div><strong className="text-white">Mar 1-10:</strong> UGC Test Phase (2.5h/week) — Book 3+ calls, send 100 emails</div>
          <div><strong className="text-white">Mar 11-31:</strong> UGC Scale Phase (5h/month) — Close 1 deal, 300 leads in pipeline</div>
          <div><strong className="text-white">Mar 1-30:</strong> Spiritual Email Phase (8h) — Email list 100+ subscribers</div>
          <div><strong className="text-white">Mar 1+:</strong> Vault Launch (recurring calls/content)</div>
          <div className="pt-2 border-t border-blue-800"><strong className="text-white">May 31 Goal:</strong> <span className="text-blue-300">$5K+ combined revenue</span></div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedPhase(expandedPhase === 'first-actions' ? null : 'first-actions')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            🚀 FIRST ACTIONS (This Weekend)
            <span>{expandedPhase === 'first-actions' ? '−' : '+'}</span>
          </button>
          {expandedPhase === 'first-actions' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Saturday Morning:</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>☐ Sign up for Apollo ($119/mo)</li>
                  <li>☐ Sign up for GHL ($97/mo)</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Saturday Afternoon:</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>☐ Download first 50 leads from Apollo</li>
                  <li>☐ Review 3-5 leads (do they fit your ideal customer?)</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Saturday Evening:</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>☐ Send 3 personalized cold emails by hand</li>
                  <li>☐ Track responses</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Sunday:</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>☐ Finalize lead magnet PDF copy</li>
                  <li>☐ Set up ConvertKit account</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedPhase(expandedPhase === 'ugc' ? null : 'ugc')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            🎬 UGC Outreach System (3 Phases)
            <span>{expandedPhase === 'ugc' ? '−' : '+'}</span>
          </button>
          {expandedPhase === 'ugc' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Phase 1: Setup (Feb 24-28)</strong>
                <p className="text-xs text-gray-400 mt-1">Your Time: 85 minutes total</p>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Mon 2/24: Apollo signup (10 min)</li>
                  <li>Tue 2/25: GHL signup (10 min)</li>
                  <li>Wed 2/26: Confirm Airtable + Zapier (5 min)</li>
                  <li>Thu 2/27: Download 100 leads (30 min)</li>
                  <li>Fri 2/28: Send 3 personal emails (30 min)</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Phase 2: Test (Mar 1-10)</strong>
                <p className="text-xs text-gray-400 mt-1">Your Time: 2.5 hours/week</p>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Daily (15 min): Check booking calendar</li>
                  <li>Daily (30 min): Send 10 personalized emails</li>
                  <li>Tue 3/4: First phone call (recorded + objections noted)</li>
                  <li>Fri 3/7: Review metrics (calls booked, close rate)</li>
                </ul>
                <p className="text-xs text-green-400 font-bold mt-2">✓ Success Gate: 3+ calls booked by Mar 10</p>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Phase 3: Scale (Mar 11+)</strong>
                <p className="text-xs text-gray-400 mt-1">Your Time: 5 hours/month (+ VA takes over)</p>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Week 1: Review 10 proposals (10 min each)</li>
                  <li>Week 2: Hop on 1-2 calls (10 min each)</li>
                  <li>Week 3: Create 1 new video (30 min)</li>
                  <li>Week 4: Review metrics + adjust (30 min)</li>
                </ul>
                <p className="text-xs text-green-400 font-bold mt-2">✓ Hire VA Week 4 (Mar 24) → Cost $500-1K/mo, ROI $1→$20</p>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedPhase(expandedPhase === 'spiritual' ? null : 'spiritual')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            🔮 Spiritual Technologist Growth (3 Phases)
            <span>{expandedPhase === 'spiritual' ? '−' : '+'}</span>
          </button>
          {expandedPhase === 'spiritual' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Phase 1: Email Foundation (Mar 1-30)</strong>
                <p className="text-xs text-gray-400 mt-1">Your Time: ~8 hours</p>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Feb 26: Write lead magnet copy (2h)</li>
                  <li>Feb 27: Design PDF template (1h)</li>
                  <li>Feb 28: Set up ConvertKit (30 min)</li>
                  <li>Feb 28: Create 3 email sequences (1.5h)</li>
                  <li>Mar 1: Vault launch email (30 min)</li>
                  <li>Mar 1-31: Daily TikTok (2.5h/week)</li>
                </ul>
                <p className="text-xs text-green-400 font-bold mt-2">✓ Success Gate: 100+ email subscribers by Mar 31</p>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Phase 2: SEO + Content (Mar 1-May 31)</strong>
                <p className="text-xs text-gray-400 mt-1">Your Time: ~6 hours/week</p>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>1 article/week (Wed): Review + edit (2h)</li>
                  <li>Weekly: TikTok trend + email (10 min)</li>
                  <li>Monthly: Send email offer (15 min)</li>
                </ul>
                <p className="text-xs text-green-400 font-bold mt-2">✓ Success Gate: 8 articles live + 300+ monthly visitors by May 31</p>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Phase 3: Products + Partnerships (Jun-Aug)</strong>
                <p className="text-xs text-gray-400 mt-1">Your Time: 15-20 hours/week (mostly readings + calls)</p>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Record mini-course (4 videos, 2h total)</li>
                  <li>Reach out to 5 coaches (2.5h)</li>
                  <li>Schedule podcasts (2h)</li>
                  <li>Conduct readings (5-10/week)</li>
                  <li>Host Vault call (1/month)</li>
                </ul>
                <p className="text-xs text-green-400 font-bold mt-2">✓ Success Gate: $5K+ combined revenue by Aug 31</p>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedPhase(expandedPhase === 'weekly' ? null : 'weekly')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            📅 Weekly Rhythm (Your Calendar)
            <span>{expandedPhase === 'weekly' ? '−' : '+'}</span>
          </button>
          {expandedPhase === 'weekly' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Monday</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Import new leads (Apollo) — 10 min</li>
                  <li>Review email performance (GHL) — 10 min</li>
                  <li>Check Vault metrics — 5 min</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Tuesday</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Cold outreach: 10 emails — 30 min</li>
                  <li>Record TikTok — 5 min</li>
                  <li>(Phase 2+) SEO article approval — 1-2h</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Wednesday</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Phone call (if booked) — 30 min</li>
                  <li>Proposal review (if ready) — 15 min</li>
                  <li>(Phase 2+) TikTok + email — 15 min</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Thursday</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Pipeline review — 30 min</li>
                  <li>Partnership outreach (Phase 3+) — 30 min</li>
                  <li>Podcast follow-ups (Phase 3+) — 15 min</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Friday</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>Weekly metrics check — 30 min</li>
                  <li>Adjust strategy if needed — 30 min</li>
                  <li>Vault content prep — 30 min</li>
                </ul>
              </div>
              <p className="text-xs text-gray-400 mt-3"><strong className="text-white">Weekly Total:</strong> 8-10 hours</p>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedPhase(expandedPhase === 'gates' ? null : 'gates')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            ✅ Success Gates (Automatic Pivots)
            <span>{expandedPhase === 'gates' ? '−' : '+'}</span>
          </button>
          {expandedPhase === 'gates' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Gate 1: Mar 10 (UGC Calls Booked)</strong>
                <p className="text-xs text-gray-300 mt-1"><strong>Target:</strong> 3+ phone calls booked from 100 emails</p>
                <p className="text-xs text-green-400 mt-2">✅ YES → Continue to Phase 3 (Scale)</p>
                <p className="text-xs text-yellow-400">❌ NO → Change email hook or add LinkedIn outreach</p>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Gate 2: Mar 31 (UGC Deal Closed)</strong>
                <p className="text-xs text-gray-300 mt-1"><strong>Target:</strong> 1 closed deal ($3.5K+) or proposal sent</p>
                <p className="text-xs text-green-400 mt-2">✅ YES → Ready for VA handoff (Apr 1)</p>
                <p className="text-xs text-yellow-400">❌ NO → Extend test to April, tweak messaging</p>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Gate 3: May 31 (Spiritual Revenue)</strong>
                <p className="text-xs text-gray-300 mt-1"><strong>Target:</strong> $5K+ combined monthly revenue from 5 channels</p>
                <p className="text-xs text-green-400 mt-2">✅ YES → Scale aggressively Sep-Dec</p>
                <p className="text-xs text-yellow-400">❌ NO → Double-down on highest-performing channel</p>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedPhase(expandedPhase === 'hiring' ? null : 'hiring')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            👥 VA Hiring Timeline
            <span>{expandedPhase === 'hiring' ? '−' : '+'}</span>
          </button>
          {expandedPhase === 'hiring' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">UGC VA (Hire Week 4 = Mar 24)</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li><strong className="text-white">Cost:</strong> $500-1,000/mo</li>
                  <li><strong className="text-white">Start:</strong> Apr 1</li>
                  <li><strong className="text-white">Tasks:</strong> Apollo import, email sends, scheduling, proposals</li>
                  <li><strong className="text-white">Expected ROI:</strong> $1 → $20</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Spiritual VA (Hire Week 8 = Apr 21)</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li><strong className="text-white">Cost:</strong> $300-500/mo</li>
                  <li><strong className="text-white">Start:</strong> May 1</li>
                  <li><strong className="text-white">Tasks:</strong> SEO publishing, podcast scheduling, email management</li>
                  <li><strong className="text-white">Expected ROI:</strong> $1 → $10</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-green-950 border border-green-800 p-4 rounded-lg">
        <h3 className="font-bold text-white mb-2">✅ What NOT to Do</h3>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>❌ Start both strategies at once (too much friction)</li>
          <li>❌ Wait until everything is perfect (ship Phase 1)</li>
          <li>❌ Manually do VA work (hire by Week 4)</li>
          <li>❌ Skip success gates (measure or die)</li>
          <li>❌ Change playbook mid-phase (commit 4 weeks minimum)</li>
        </ul>
      </div>

      <div className="text-center p-4 bg-slate-800 rounded-lg">
        <p className="text-sm text-gray-300">Full playbook: See <code>/workspace/EXECUTION_PLAYBOOK.md</code></p>
        <p className="text-xs text-gray-400 mt-2">Last updated: Feb 21, 2026 | Next review: Mar 1, 2026 (Vault launch)</p>
      </div>
    </div>
  );
}
