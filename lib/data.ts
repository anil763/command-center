export const navLinks = [
  { href: '/', label: 'Revenue Dashboard', emoji: '🎯' },
  { href: '/mission', label: 'Mission Control', emoji: '🧭' },
  { href: '/strategies', label: 'Strategic Plans', emoji: '🗺️' },
  { href: '/10k', label: '$10K Mission', emoji: '💰' },
  { href: '/actions', label: 'Daily Actions', emoji: '✅' },
  { href: '/daily', label: 'Daily Numerology Script', emoji: '🔮' },
  { href: '/ugc', label: 'UGC Execution', emoji: '🎬' },
  { href: '/vault', label: "Gentlemen's Vault", emoji: '💎' },
  { href: '/health', label: 'Health', emoji: '💪' },
  { href: '/memory', label: 'Memory Bank', emoji: '🧠' },
  { href: '/docs', label: 'Browse Documents', emoji: '📚' },
  { href: '/brain', label: 'Second Brain', emoji: '🗂️' },
  { href: '/agents', label: 'OpenClaw Agents', emoji: '🤖' },
];

export const revenueStreams = [
  {
    name: '🔮 Numerology Readings',
    current: 500,
    target: 2000,
    metrics: ['1 paid reading this cycle', 'Daily spiritual content running', 'Focus: consistency + follow-up'],
    actions: ['Generate daily numerology script', 'Post across all 4 social platforms', 'Send spiritual list daily email'],
    color: 'var(--spiritual)',
  },
  {
    name: '🎬 UGC Content',
    current: 348,
    target: 5000,
    metrics: ['Maestro deliverable in progress', 'Outbound cadence active', 'High-priority near-term close'],
    actions: ['Create daily UGC video', 'Send 20 cold emails via GoHighLevel', 'Submit requests on Backstage + apps'],
    color: 'var(--ugc)',
  },
  {
    name: "💎 Gentleman's Vault",
    current: 0,
    target: 2500,
    metrics: ['Pre-revenue stage', 'Offer foundation in progress', 'Audience nurturing phase'],
    actions: ['Refine offer positioning', 'Build simple landing + waitlist', 'Define launch cadence'],
    color: 'var(--revenue)',
  },
];
