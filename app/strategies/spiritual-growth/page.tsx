'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SpiritualGrowthPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link href="/strategies" className="text-blue-400 hover:underline">← Back to Strategies</Link>
        <h2 className="text-3xl font-bold mt-4 mb-2">🔮 Spiritual Technologist Growth</h2>
        <p className="text-gray-300">5 independent revenue streams NOT dependent on TikTok followers. Scales from $2K → $10K+/mo by Month 18.</p>
      </div>

      <div className="bg-purple-950 border border-purple-800 p-4 rounded-lg">
        <h3 className="font-bold mb-3 text-white">Revenue Forecast</h3>
        <div className="text-sm space-y-2 font-mono text-gray-100">
          <div className="flex justify-between">
            <span><strong>Month 3:</strong></span>
            <span>Readings $2K + Vault $1.3K + Courses $0.5K + Partnerships $1K = <strong>$4.8K</strong></span>
          </div>
          <div className="flex justify-between">
            <span><strong>Month 6:</strong></span>
            <span>Readings $3K + Vault $2.2K + Products $2K + Workshops $5K + Partnerships $4K = <strong>$16.2K</strong></span>
          </div>
          <div className="flex justify-between">
            <span><strong>Month 12:</strong></span>
            <span>Readings $5K + Vault $5.3K + Products $4K + Workshops $10K + Partnerships $8K = <strong>$32.3K</strong></span>
          </div>
          <div className="flex justify-between">
            <span><strong>Month 18:</strong></span>
            <span>Readings $7K + Vault $7K + Products $5K + Workshops $15K + Partnerships $10K = <strong>$44K+</strong></span>
          </div>
        </div>
      </div>

      <div className="bg-yellow-950 border border-yellow-800 p-4 rounded-lg">
        <h3 className="font-bold mb-2 text-white">⚠️ The Problem This Solves</h3>
        <p className="text-sm text-gray-300"><strong>TikTok followers are unreliable:</strong> Algorithm changes, viral stops, platform can vanish.</p>
        <p className="text-sm mt-2 text-gray-300"><strong>Solution:</strong> Build 5 channels that compound independently + feed into each other.</p>
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
              <p className="text-sm mb-3 text-gray-100">Email List (10K+) → Courses ($197-497) → Workshops ($997) → VIP Readings ($297-497) + Vault ($44/mo) + Partnerships + Affiliate</p>
              <p className="text-sm font-bold text-white">Key: Build email list that generates revenue independent of TikTok. Everything else is leverage OFF that list.</p>
              <p className="text-sm text-gray-400 mt-3">If TikTok algorithm breaks tomorrow, your email list keeps generating revenue. That&apos;s the power.</p>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'channel1' ? null : 'channel1')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            Channel 1: SEO + Organic Search (Build Once, Works Forever)
            <span>{expandedSection === 'channel1' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'channel1' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Target Keywords:</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• numerology for men (200/mo)</li>
                  <li>• life path numbers (150/mo)</li>
                  <li>• numerology reading cost (100/mo)</li>
                  <li>• numerology and relationships (300/mo)</li>
                  <li>• master number meaning (180/mo)</li>
                </ul>
                <p className="mt-2 font-bold text-white">Combined monthly opportunity: 1,400+ visitors</p>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Content Roadmap (60 days):</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• Week 1-2: 3 pillar articles (3000 words each)</li>
                  <li>• Week 3-4: 5 long-tail articles</li>
                  <li>• Week 5-6: Interactive tools + lead magnet PDF</li>
                  <li>• Week 7-8: Optimize + backlink strategy</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Expected Results (6 months):</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• 500-800 monthly organic visitors</li>
                  <li>• 5-10% email captures = 25-80 new subscribers/mo</li>
                  <li>• 2-3% convert to $97-297 readings = <strong className="text-white">$97-891/mo</strong></li>
                </ul>
              </div>
              <div className="p-3 bg-blue-950 rounded text-xs text-gray-300">
                <strong className="text-white">Tools:</strong> WordPress + Yoast SEO ($120/yr) + Semrush ($100-200/mo)<br/>
                <strong className="text-white">Cost:</strong> $200-300/mo
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'channel2' ? null : 'channel2')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            Channel 2: Email List Monetization (The Engine)
            <span>{expandedSection === 'channel2' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'channel2' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div>
                <strong className="text-white">Goal:</strong> <span className="text-gray-300">10,000 email subscribers who trust you enough to buy</span>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Lead Magnets (FREE → EMAIL):</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• Magnet 1: &quot;Life Path Number Guide&quot; (PDF) — 2-3% convert to reading</li>
                  <li>• Magnet 2: &quot;Your Numbers Explained&quot; (3-email sequence) — 3-5% convert</li>
                  <li>• Magnet 3: &quot;Manifestation Through Numbers&quot; (Video + PDF) — 5-7% convert</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Distribution Channels:</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• TikTok bio link</li>
                  <li>• Email signature</li>
                  <li>• YouTube channel (when you post)</li>
                  <li>• Reddit (r/numerology)</li>
                  <li>• Pinterest pins</li>
                  <li>• Guest blog posts</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Monetization Strategy:</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• Segment 1 (New, 0-30 days): 3-5% convert to readings = 15-50/mo</li>
                  <li>• Segment 2 (Warm, 30-90 days): Weekly tips + monthly offer = 10-20/mo</li>
                  <li>• Segment 3 (Cold, 90+ days): Win-back emails = 5-10/mo</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-950 rounded text-xs text-gray-300">
                <strong className="text-white">Expected Results (6 months):</strong> 500-1,000 new subscribers/mo = 3K-6K total list<br/>
                <strong className="text-white">Revenue:</strong> <strong>$1,970-4,455/mo from email alone</strong>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'channel3' ? null : 'channel3')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            Channel 3: Digital Products (Low Effort, High Margin)
            <span>{expandedSection === 'channel3' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'channel3' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Product 1: Numerology Mini-Course ($197)</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• 4-5 videos (4 hours to record)</li>
                  <li>• Life Path basics, destiny, cycles, daily use</li>
                  <li>• Expected sales: 10-20/mo = <strong className="text-white">$1,970-3,940/mo</strong></li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Product 2: 4-Week Workshop ($997)</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• 4 weekly live Zoom calls (1 hour each)</li>
                  <li>• Group size: 10-15 people</li>
                  <li>• Launch quarterly = <strong className="text-white">$9,970-14,955/launch</strong></li>
                  <li>• Annual: <strong className="text-white">$40K-60K</strong></li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Product 3: Numerology for Entrepreneurs ($397)</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• Business-focused course</li>
                  <li>• Life path in business, brand naming, pricing, cycles</li>
                  <li>• Expected sales: 5-10/mo = <strong className="text-white">$1,985-3,970/mo</strong></li>
                </ul>
              </div>
              <div className="p-3 bg-blue-950 rounded text-xs text-gray-300">
                <strong className="text-white">Total Products Revenue (6 months):</strong> $4K-9K/mo
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'channel4' ? null : 'channel4')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            Channel 4: Partnerships & Collaborations
            <span>{expandedSection === 'channel4' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'channel4' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Partnership 1: Business Coach Referrals</strong>
                <p className="text-xs mt-2 text-gray-300">Target 5-10 coaches. Offer: &quot;I do readings for your clients ($297 each). You get 20% commission.&quot;</p>
                <p className="text-xs mt-1 text-gray-300"><strong className="text-white">Expected:</strong> 10-15 referrals/mo = <strong className="text-white">$2,970-4,455/mo</strong></p>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Partnership 2: TikTok Creator Collabs</strong>
                <p className="text-xs mt-2 text-gray-300">Duets, stitches, joint lives with creators in complementary niches.</p>
                <p className="text-xs mt-1 text-gray-300"><strong className="text-white">Expected:</strong> 2-3% email capture from 50K-100K audience = 1,000-3,000 subscribers/mo → <strong className="text-white">$2,000/mo</strong></p>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Partnership 3: Podcasts & Guest Appearances</strong>
                <p className="text-xs mt-2 text-gray-300">Target 20-30 podcasts. Do 1-2 appearances/month.</p>
                <p className="text-xs mt-1 text-gray-300"><strong className="text-white">Expected:</strong> 3-5 readings per podcast × 4-5 appearances/mo = <strong className="text-white">$4K-7K/mo</strong></p>
              </div>
              <div className="p-3 bg-blue-950 rounded text-xs text-gray-300">
                <strong className="text-white">Total Partnership Revenue (6 months):</strong> $9K+/mo
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'channel5' ? null : 'channel5')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            Channel 5: Gentlemen&apos;s Vault (Recurring Revenue)
            <span>{expandedSection === 'channel5' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'channel5' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Goal:</strong> <span className="text-gray-300">100 members × $44/mo = <strong className="text-white">$4,400/mo by Month 9</strong></span>
              </div>
              <div className="p-3 bg-slate-800 rounded border border-slate-700">
                <strong className="text-white">Growth Strategy:</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• Months 1-2: 10-15 founding members (TikTok + DM)</li>
                  <li>• Months 3-4: 25-35 members (podcast mentions + email list)</li>
                  <li>• Months 5-6: 50-75 members (partnerships + testimonials)</li>
                  <li>• Months 7-9: 100+ members (organic + affiliates)</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-950 rounded text-xs text-gray-300">
                <strong className="text-white">Unit Economics:</strong> Platform cost $9/mo → Margin $35/member → $3,500/mo at 100 members
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'roadmap' ? null : 'roadmap')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            90-Day Sprint (Months 1-3)
            <span>{expandedSection === 'roadmap' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'roadmap' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Month 1 (Now - Feb):</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>✓ Vault live (Mar 1)</li>
                  <li>✓ 3 SEO articles published</li>
                  <li>✓ Lead magnet PDF live</li>
                  <li>✓ Email list launched (target: 100 subscribers)</li>
                  <li>✓ Podcast outreach begins</li>
                </ul>
                <p className="text-xs font-bold mt-2 text-white">Revenue target: $1-2K</p>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Month 2 (Mar):</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>✓ Email list: 300-500 subscribers</li>
                  <li>✓ Mini-course launched ($197)</li>
                  <li>✓ 5 more SEO articles</li>
                  <li>✓ 2 podcast appearances done</li>
                  <li>✓ Coach partnership outreach</li>
                </ul>
                <p className="text-xs font-bold mt-2 text-white">Revenue target: $3-5K</p>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Month 3 (Apr):</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>✓ Email list: 800-1,200 subscribers</li>
                  <li>✓ Vault at 20-25 paying members</li>
                  <li>✓ Entrepreneur course launched ($397)</li>
                  <li>✓ Workshop scheduled (May launch)</li>
                  <li>✓ 4 podcasts booked</li>
                  <li>✓ 3-5 coach partnerships signed</li>
                </ul>
                <p className="text-xs font-bold mt-2 text-white">Revenue target: $5-8K</p>
              </div>
            </div>
          )}
        </div>

        <div className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setExpandedSection(expandedSection === 'autonomy' ? null : 'autonomy')}
            className="w-full p-4 text-left font-bold hover:bg-slate-800 flex justify-between items-center text-white"
          >
            Autonomy & Delegation
            <span>{expandedSection === 'autonomy' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'autonomy' && (
            <div className="p-4 border-t border-slate-700 bg-slate-900 space-y-3 text-sm">
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">You Do (10 hours/week):</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• Record course videos (1-2/week, 30 min each)</li>
                  <li>• Conduct readings (5-10/week, 1 hour each)</li>
                  <li>• Host Vault calls (1/month, 1 hour)</li>
                  <li>• Review partnerships (2 hours/week)</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-800 rounded">
                <strong className="text-white">Automation/VA Does:</strong>
                <ul className="mt-2 text-xs space-y-1 text-gray-300">
                  <li>• Email sequences (fully automated)</li>
                  <li>• SEO article publishing (template-based)</li>
                  <li>• Lead magnet delivery (auto)</li>
                  <li>• Podcast scheduling</li>
                  <li>• Course platform management</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-green-950 border border-green-800 p-4 rounded-lg">
        <h3 className="font-bold mb-2 text-white">The Trap to Avoid</h3>
        <p className="text-sm text-gray-300"><strong>❌ Don&apos;t:</strong> Just get more TikTok followers and hope for sales</p>
        <p className="text-sm mt-2 text-gray-300"><strong>✅ Do:</strong> Build systems that compound (email, SEO, partnerships, products)</p>
        <p className="text-sm mt-2 text-gray-300">One viral video = temporary spike. One SEO article = permanent traffic stream (for years). One email subscriber = repeated revenue opportunity.</p>
      </div>

      <div className="text-center p-4 bg-slate-800 rounded-lg">
        <p className="text-sm font-bold text-gray-300">Full plan: See <code>/workspace/SPIRITUAL_TECHNOLOGIST_GROWTH.md</code></p>
      </div>
    </div>
  );
}
