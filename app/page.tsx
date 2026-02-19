import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Compass,
  DollarSign,
  HeartPulse,
  LayoutGrid,
  Network,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

const dashboardStats = {
  totalRevenue: 848,
  targetRevenue: 9500,
  completePercent: 8.9,
  daysToGoal: 130,
};

const revenueStreams = [
  {
    emoji: '🔮',
    title: 'Numerology',
    current: 500,
    target: 2000,
    percent: 25,
    metricLabel: 'Leads',
    metricValue: '18 warm leads',
    accent: 'var(--spiritual)',
  },
  {
    emoji: '🎬',
    title: 'UGC',
    current: 348,
    target: 5000,
    percent: 7,
    metricLabel: 'Submissions',
    metricValue: '12 active pitches',
    accent: 'var(--ugc)',
  },
  {
    emoji: '💎',
    title: 'Vault',
    current: 0,
    target: 2500,
    percent: 0,
    metricLabel: 'Members',
    metricValue: 'Pre-launch',
    accent: 'var(--revenue)',
  },
];

const priorities = [
  {
    time: '7:30 AM',
    task: 'Generate numerology script',
    domain: 'Spiritual',
    color: 'var(--spiritual)',
  },
  {
    time: '8:00 AM',
    task: 'Create UGC video',
    domain: 'UGC',
    color: 'var(--ugc)',
  },
  {
    time: '8:30 AM',
    task: 'Send 20 cold emails',
    domain: 'UGC',
    color: 'var(--ugc)',
  },
  {
    time: '9:00 AM',
    task: 'Check gig platforms',
    domain: 'UGC',
    color: 'var(--ugc)',
  },
];

const secondBrainHighlights = [
  {
    type: 'Latest Journal Entry',
    title: 'Momentum > Motivation',
    date: 'Feb 19, 2026',
    excerpt: 'Locked in morning execution and protected deep work windows. The key insight: consistency compounds faster than intensity.',
    tags: ['Journal', 'Execution'],
  },
  {
    type: 'Most Recent Concept Doc',
    title: 'Command Center v2 Architecture',
    date: 'Feb 18, 2026',
    excerpt: 'Unified dashboards reduce decision fatigue by centralizing signal over noise across revenue, delivery, and personal health.',
    tags: ['Concept', 'Systems'],
  },
  {
    type: 'Most Recent Decision Log',
    title: 'Prioritize UGC Pipeline Through Q1',
    date: 'Feb 17, 2026',
    excerpt: 'UGC selected as near-term cash-flow engine while numerology content remains the long-term brand moat.',
    tags: ['Decision', 'Revenue'],
  },
];

const quickNav = [
  { emoji: '💰', label: 'Revenue Deep Dive', href: '/10k', color: 'var(--revenue)' },
  { emoji: '📋', label: 'Daily Actions', href: '/actions', color: '#facc15' },
  { emoji: '🎬', label: 'UGC Pipeline', href: '/ugc', color: 'var(--ugc)' },
  { emoji: '🧠', label: 'Second Brain', href: '/brain', color: '#818cf8' },
  { emoji: '🤖', label: 'Agents System', href: '/agents', color: '#eab308' },
  { emoji: '❤️', label: 'Health Tracking', href: '/health', color: 'var(--presidio)' },
];

export default function Home() {
  const totalProgress = (dashboardStats.totalRevenue / dashboardStats.targetRevenue) * 100;
  const lastUpdated = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="space-y-6 pb-10">
      <section className="card rounded-2xl p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white md:text-4xl">🎯 Enterprise Dashboard — Anil&apos;s Command Center</h1>
            <p className="mt-2 text-sm text-muted md:text-base">Real-time business overview</p>
            <p className="mt-1 inline-flex items-center gap-2 text-xs text-muted md:text-sm">
              <Clock3 className="h-4 w-4" />
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Revenue', value: '$848', icon: <DollarSign className="h-4 w-4" /> },
            { label: 'Target', value: '$9,500', icon: <Target className="h-4 w-4" /> },
            { label: '% Complete', value: '8.9%', icon: <TrendingUp className="h-4 w-4" /> },
            { label: 'Days to Goal', value: '130 days', icon: <CalendarDays className="h-4 w-4" /> },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-[#262626] bg-[#101010] p-4">
              <div className="flex items-center gap-2 text-xs text-muted">
                {stat.icon}
                {stat.label}
              </div>
              <p className="mt-2 text-xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card rounded-2xl p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[color:var(--revenue)]" />
          <h2 className="text-xl font-semibold text-white">Revenue at a Glance</h2>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {revenueStreams.map((stream) => (
            <article key={stream.title} className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {stream.emoji} {stream.title}
                </h3>
                <span
                  className="rounded-full px-2 py-1 text-xs font-semibold"
                  style={{ backgroundColor: `${stream.accent}22`, color: stream.accent }}
                >
                  {stream.percent}%
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">
                ${stream.current.toLocaleString()} / ${stream.target.toLocaleString()}
              </p>
              <div className="mt-3 h-2 rounded-full bg-[#1f1f1f]">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${stream.percent}%`, backgroundColor: stream.accent }}
                />
              </div>
              <p className="mt-3 text-xs text-muted">
                {stream.metricLabel}: <span className="text-[#d4d4d8]">{stream.metricValue}</span>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
          <div className="flex items-center justify-between text-sm text-muted">
            <span>Total Progress</span>
            <span>
              ${dashboardStats.totalRevenue.toLocaleString()} / ${dashboardStats.targetRevenue.toLocaleString()}
            </span>
          </div>
          <div className="mt-2 h-3 rounded-full bg-[#1f1f1f]">
            <div className="h-3 rounded-full bg-[color:var(--revenue)]" style={{ width: `${totalProgress}%` }} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="card rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[color:var(--ugc)]" />
            <h2 className="text-xl font-semibold text-white">Today&apos;s Priorities</h2>
          </div>
          <p className="mt-1 text-sm text-muted">Morning Block Summary</p>

          <div className="mt-4 space-y-3">
            {priorities.map((item) => (
              <div key={item.task} className="flex items-center gap-3 rounded-lg border border-[#262626] bg-[#101010] px-3 py-3">
                <div className="h-4 w-4 rounded border border-[#555]" aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">{item.task}</p>
                  <p className="text-xs text-muted">{item.time}</p>
                </div>
                <span className="rounded-full px-2 py-1 text-xs" style={{ backgroundColor: `${item.color}22`, color: item.color }}>
                  {item.domain}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="card rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-[color:var(--presidio)]" />
            <h2 className="text-xl font-semibold text-white">Health Snapshot</h2>
          </div>
          <p className="mt-3 text-sm text-muted">Current: 171 lbs | Goal: 160 lbs</p>

          <div className="mt-3 h-3 rounded-full bg-[#1f1f1f]">
            <div className="h-3 rounded-full bg-[color:var(--presidio)]" style={{ width: '0%' }} />
          </div>
          <p className="mt-2 text-xs text-muted">0% toward goal</p>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              Nutrition <span className="text-green-400">🟢</span>
            </p>
            <p>
              Exercise <span className="text-yellow-300">🟡</span>
            </p>
            <p>
              Sleep <span className="text-red-400">🔴</span>
            </p>
          </div>

          <Link href="/health" className="interactive mt-5 inline-flex items-center gap-2 text-sm text-[color:var(--presidio)] hover:translate-x-1">
            View full health page <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-[color:var(--ugc)]" />
            <h2 className="text-xl font-semibold text-white">Active Projects</h2>
          </div>

          <div className="mt-4 rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">Maestro Video</h3>
              <span className="rounded-full bg-[color:var(--ugc)]/20 px-2 py-1 text-xs text-[color:var(--ugc)]">IN PROGRESS</span>
            </div>
            <p className="mt-2 text-sm text-muted">🎬 UGC · Due Feb 22 (3 days)</p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-[#d4d4d8]">
              <Clock3 className="h-4 w-4" /> Countdown: 3 days remaining
            </p>
          </div>
        </article>

        <article className="card rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-[#eab308]" />
            <h2 className="text-xl font-semibold text-white">OpenClaw Agent System</h2>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p className="rounded-lg border border-[#3a320f] bg-[#1a1608] px-3 py-2 text-[#facc15]">1) Master Router (gold badge)</p>
            <p className="rounded-lg border border-[#263044] bg-[#0e141f] px-3 py-2">2) 🎬 Anil Creates LLC (5 agents)</p>
            <p className="rounded-lg border border-[#32204a] bg-[#161024] px-3 py-2">3) 🔮 Spiritual Technologist (6 agents)</p>
            <p className="rounded-lg border border-[#1d3a32] bg-[#0d1916] px-3 py-2">4) 💼 Presidio (4 agents)</p>
            <p className="rounded-lg border border-[#4a2b17] bg-[#22140b] px-3 py-2">5) 🙏 Guruji Ka Ashram (3 agents)</p>
            <p className="rounded-lg border border-[#2a2a2a] bg-[#101010] px-3 py-2">6) QC Agent (final gate)</p>
          </div>
          <Link href="/agents" className="interactive mt-4 inline-flex items-center gap-2 text-sm text-[#facc15] hover:translate-x-1">
            View full /agents <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </section>

      <section className="card rounded-2xl p-6">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-[#818cf8]" />
          <h2 className="text-xl font-semibold text-white">Second Brain Highlights</h2>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {secondBrainHighlights.map((doc) => (
            <article key={doc.title} className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
              <p className="text-xs uppercase tracking-wide text-muted">{doc.type}</p>
              <h3 className="mt-1 text-base font-semibold text-white">{doc.title}</h3>
              <p className="mt-1 text-xs text-muted">{doc.date}</p>
              <p className="mt-3 text-sm text-[#d4d4d8]">{doc.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {doc.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#1d1d1d] px-2 py-1 text-xs text-muted">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <Link href="/brain" className="interactive mt-4 inline-flex items-center gap-2 text-sm text-[#818cf8] hover:translate-x-1">
          Open /brain <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="card rounded-2xl p-6">
        <div className="flex items-center gap-2">
          <LayoutGrid className="h-5 w-5 text-white" />
          <h2 className="text-xl font-semibold text-white">Quick Navigation</h2>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="interactive rounded-xl border border-[#2a2a2a] bg-[#101010] p-4 hover:-translate-y-1 hover:border-[#3a3a3a]"
            >
              <p className="text-sm" style={{ color: item.color }}>
                {item.emoji}
              </p>
              <p className="mt-2 font-medium text-white">{item.label}</p>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                Open <Compass className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="pb-2 pt-1 text-center text-xs text-muted">Updated by Claude & OpenClaw · v2.0</footer>
    </div>
  );
}
