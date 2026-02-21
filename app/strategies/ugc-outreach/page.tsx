'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UGCOutreachPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link href="/strategies" className="text-blue-400 hover:underline">← Back to Strategies</Link>
        <h2 className="text-3xl font-bold mt-4 mb-2">🎬 UGC Outreach System</h2>
        <p className="text-gray-300">Systematic cold B2B machine that scales from $5K → $20K/mo without manual hustle.</p>
      </div>

      <div className="bg-blue-950 border border-blue-800 p-4 rounded-lg">
        <h3 className="font-bold mb-2 text-white">Core Metrics</h3>
        <div className="grid grid-cols-4 gap-4 text-sm text-gray-100">
          <div>
            <div className="font-bold text-blue-300">20-30</div>
            <div>Leads/week</div>
          </div>
          <div>
            <div className="font-bold text-blue-300">20%+</div>
            <div>Call booking rate</div>
          </div>
          <div>
            <div className="font-bold text-blue-300">40%+</div>
            <div>Close rate</div>
          </div>
          <div>
            <div className="font-bold text-blue-300">$3.5K-7K</div>
            <div>Avg deal size</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'system' ? null : 'system')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            System Architecture
            <span>{expandedSection === 'system' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'system' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900">
              <p className="text-sm mb-4 text-gray-100">Lead DB (Apollo) → Qualification (Score) → Email Sequence (Day 1-14) → Video Hook (Day 3) → Phone Call (Day 7) → Proposal (Day 10) → Close</p>
              <p className="text-sm font-bold mb-2 text-white">Key: Autonomous flow — leads move through sequence based on engagement. No manual intervention until phone call.</p>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'lead-gen' ? null : 'lead-gen')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            Lead Sources & Qualification
            <span>{expandedSection === 'lead-gen' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'lead-gen' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-4 text-sm">
              <div>
                <strong className="text-white">Primary: Apollo (50%)</strong>
                <p className="text-gray-300 mt-1">Founders/CMOs at SaaS ($1M-$50M ARR). Fintech, B2B, Crypto, Course creators. Weekly export: 50-100 leads.</p>
              </div>
              <div>
                <strong className="text-white">Secondary: LinkedIn (30%)</strong>
                <p className="text-gray-300 mt-1">Automated connection requests with personalized notes. Expected 5-10% acceptance + 20%+ book calls.</p>
              </div>
              <div>
                <strong className="text-white">Tertiary: Warm Referrals (20%)</strong>
                <p className="text-gray-300 mt-1">Partnerships with 2-3 freelance marketers/agencies. 10% commission per deal closed.</p>
              </div>
              <div className="p-3 bg-slate-800 rounded mt-4 border border-slate-700">
                <strong className="text-white">Qualification Score (3+ = outreach):</strong>
                <ul className="mt-2 space-y-1 text-xs text-gray-300">
                  <li>✓ Growing marketing team (1 pt)</li>
                  <li>✓ Has $2K+ budget (1 pt)</li>
                  <li>✓ Already uses UGC/video (1 pt)</li>
                  <li>✓ Growth-focused (1 pt)</li>
                  <li>✓ Accessible decision maker (1 pt)</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'sequence' ? null : 'sequence')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            14-Day Outreach Sequence
            <span>{expandedSection === 'sequence' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'sequence' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-4 text-sm">
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Day 1: Hook Email</strong>
                <p className="text-xs mt-1 text-gray-300">Subject: &quot;Quick idea for [Company]&quot;</p>
                <p className="text-xs text-gray-400 mt-1">Mention something specific about THEM. No fluff. Low commitment ask (10 min call).</p>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Day 3: Video Hook</strong>
                <p className="text-xs mt-1 text-gray-300">30-45 sec personalized Loom video</p>
                <p className="text-xs text-gray-400 mt-1">Show 2-3 examples. Explain approach. Tool: Loom or Vidyard auto-send.</p>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Day 5: Social Proof Email</strong>
                <p className="text-xs mt-1 text-gray-300">Mention competitor who&apos;s doing this + results</p>
                <p className="text-xs text-gray-400 mt-1">3.2x conversion lift. Social proof + objection handling.</p>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Day 7: Call Booking</strong>
                <p className="text-xs mt-1 text-gray-300">&quot;Last check-in from my end&quot;</p>
                <p className="text-xs text-gray-400 mt-1">Calendly link + clear ask: yes or defer 3 months.</p>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Day 10: Proposal Follow-up</strong>
                <p className="text-xs mt-1 text-gray-300">Only if call happened + proposal sent</p>
                <p className="text-xs text-gray-400 mt-1">&quot;Looking to close this month&quot; — urgency + follow-up.</p>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'automation' ? null : 'automation')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            Automation Stack
            <span>{expandedSection === 'automation' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'automation' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900">
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span><strong className="text-white">Apollo</strong> — Lead generation</span>
                  <span>$119/mo</span>
                </div>
                <div className="flex justify-between">
                  <span><strong className="text-white">GHL</strong> — Email sequences + CRM</span>
                  <span>$97/mo</span>
                </div>
                <div className="flex justify-between">
                  <span><strong className="text-white">Airtable</strong> — Lead scoring + tracking</span>
                  <span>$20/mo</span>
                </div>
                <div className="flex justify-between">
                  <span><strong className="text-white">Loom/Vidyard</strong> — Personalized videos</span>
                  <span>$5-30/mo</span>
                </div>
                <div className="flex justify-between">
                  <span><strong className="text-white">Zapier</strong> — Automation glue</span>
                  <span>$20/mo</span>
                </div>
                <div className="border-t border-slate-700 pt-3 flex justify-between font-bold text-white">
                  <span>Total Monthly</span>
                  <span>~$300/mo</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">Covered by 1 gig. Everything else is profit.</p>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'roadmap' ? null : 'roadmap')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            6-Month Scaling Roadmap
            <span>{expandedSection === 'roadmap' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'roadmap' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div>
                <strong className="text-white">Month 1 (Feb-Mar):</strong>
                <p className="text-gray-300">Setup Apollo + GHL. Test with 50 leads. Get 1 close ($3.5K).</p>
              </div>
              <div>
                <strong className="text-white">Month 2 (Apr):</strong>
                <p className="text-gray-300">Scale to 100 leads/week. Close 3-5 deals ($10K revenue).</p>
              </div>
              <div>
                <strong className="text-white">Month 3 (May):</strong>
                <p className="text-gray-300">Scale to 150 leads/week. Land 1 retainer ($5K/mo). Target: $15K total.</p>
              </div>
              <div>
                <strong className="text-white">Month 4-6 (Jun-Aug):</strong>
                <p className="text-gray-300">Scale to 200 leads/week. 3-5 retainers ($20K+/mo). Hire VA to manage pipeline.</p>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'delegation' ? null : 'delegation')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            Delegation Timeline
            <span>{expandedSection === 'delegation' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'delegation' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">You Do (5 hours/month):</strong>
                <ul className="mt-2 space-y-1 text-xs text-gray-300">
                  <li>• Review proposals before sending (5 min each)</li>
                  <li>• Hop on closed calls (3-5/month, 10 min each)</li>
                  <li>• Create 1 new video sample/month</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">VA/System Does (autonomous):</strong>
                <ul className="mt-2 space-y-1 text-xs text-gray-300">
                  <li>• Lead import + scoring (automated)</li>
                  <li>• Email sequences (GHL automated)</li>
                  <li>• Call scheduling (Calendly automated)</li>
                  <li>• Proposal generation (template auto-filled)</li>
                  <li>• Monthly metrics reporting</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-950 rounded text-xs text-gray-300">
                <strong className="text-white">VA Cost:</strong> $500-1,000/mo<br/>
                <strong className="text-white">ROI:</strong> $1 spent = $15-20 in revenue
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-green-950 border border-green-800 p-4 rounded-lg">
        <h3 className="font-bold mb-2 text-white">Success = Passive System</h3>
        <p className="text-sm text-gray-300">By Month 4, this runs on its own: Leads qualify → Emails send → Calls schedule → You close.</p>
        <p className="text-sm font-bold mt-2 text-white">Result: $5K-20K/mo from 5 hours/month of your time.</p>
      </div>

      <div className="text-center p-4 bg-slate-800 rounded-lg">
        <p className="text-sm font-bold text-gray-300">Full plan: See <code>/workspace/UGC_OUTREACH_SYSTEM.md</code></p>
      </div>
    </div>
  );
}
