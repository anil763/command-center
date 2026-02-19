"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Crown,
  Rocket,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

type ChecklistItem = {
  id: string;
  label: string;
  week: "Week 1" | "Week 2" | "Week 3";
};

const LAUNCH_DATE = new Date("2026-03-01T00:00:00-05:00");
const START_DATE = new Date("2026-02-19T00:00:00-05:00");
const STORAGE_KEY = "vault-launch-checklist-v1";

const members = 0;
const monthlyRevenue = members * 44;
const revenueTarget = 660;

const checklistItems: ChecklistItem[] = [
  { id: "w1-1", week: "Week 1", label: "Finalize mission statement + founding offer" },
  { id: "w1-2", week: "Week 1", label: "Set up Skool community structure" },
  { id: "w1-3", week: "Week 1", label: "Create onboarding/welcome post" },
  { id: "w1-4", week: "Week 1", label: "Outline 4-5 foundational video topics" },
  { id: "w1-5", week: "Week 1", label: "Draft DM invite list (first 15 men)" },

  { id: "w2-1", week: "Week 2", label: "Record Video 1: Welcome + Vision" },
  { id: "w2-2", week: "Week 2", label: "Record Video 2: Framework" },
  { id: "w2-3", week: "Week 2", label: "Record Video 3: Execution" },
  { id: "w2-4", week: "Week 2", label: "Post TikTok teasers (batch content)" },
  { id: "w2-5", week: "Week 2", label: "Post first LinkedIn thought-leadership piece" },

  { id: "w3-1", week: "Week 3", label: "Record Video 4: Brotherhood + accountability" },
  { id: "w3-2", week: "Week 3", label: "Finalize vault sales copy + positioning" },
  { id: "w3-3", week: "Week 3", label: "Send first 5 personal invites via DM" },
  { id: "w3-4", week: "Week 3", label: "Send remaining 10 personal invites" },
  { id: "w3-5", week: "Week 3", label: "Announce launch across TikTok + LinkedIn" },
  { id: "w3-6", week: "Week 3", label: "Host first live call kickoff" },
];

const contentCalendar = [
  { date: "Feb 19", item: "Video 1: Welcome", channel: "Recording", due: "Due today" },
  { date: "Feb 20", item: "Video 2: Framework", channel: "Recording", due: "Due" },
  { date: "Feb 22", item: "Video 3: Execution", channel: "Recording", due: "Due" },
  { date: "Feb 24", item: "Video 4: Brotherhood", channel: "Recording", due: "Due" },
  { date: "Feb 26", item: "Video 5: Launch Prompt", channel: "Recording", due: "Due" },
  { date: "Feb 19-29", item: "TikTok posting cadence", channel: "TikTok", due: "Daily / every other day" },
  { date: "Feb 20, 23, 26, Mar 1", item: "LinkedIn launch narrative", channel: "LinkedIn", due: "4 anchor posts" },
  { date: "Mar 1 · 8:00 PM EST", item: "First live founding member call", channel: "Live", due: "Launch day" },
];

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

export default function VaultPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setChecked(JSON.parse(raw));
      } catch {
        setChecked({});
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const now = new Date();
  const msRemaining = LAUNCH_DATE.getTime() - now.getTime();
  const daysRemaining = Math.max(0, Math.ceil(msRemaining / (1000 * 60 * 60 * 24)));
  const totalWindowMs = LAUNCH_DATE.getTime() - START_DATE.getTime();
  const percentRemaining = clamp((msRemaining / totalWindowMs) * 100, 0, 100);
  const launchStatus = daysRemaining === 0 ? "LAUNCHING TODAY" : "Pre-Launch";

  const completedCount = useMemo(() => checklistItems.filter((item) => checked[item.id]).length, [checked]);
  const checklistPercent = Math.round((completedCount / checklistItems.length) * 100);

  const checklistState = checklistPercent === 0 ? "Not started" : checklistPercent === 100 ? "Complete" : "In progress";
  const checklistColor = checklistPercent === 0 ? "#6b7280" : checklistPercent === 100 ? "#22c55e" : "#facc15";

  const grouped = {
    "Week 1": checklistItems.filter((item) => item.week === "Week 1"),
    "Week 2": checklistItems.filter((item) => item.week === "Week 2"),
    "Week 3": checklistItems.filter((item) => item.week === "Week 3"),
  };

  return (
    <div className="space-y-6 pb-10">
      <section className="card rounded-2xl p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white md:text-4xl">💎 Gentlemen&apos;s Vault — Launch Command Center</h1>
            <p className="mt-2 text-sm text-muted md:text-base">Track execution from now to March 1, 2026 launch.</p>
          </div>
          <span className="rounded-full border border-[#3b2a53] bg-[#1a1126] px-3 py-1 text-xs font-semibold text-[color:var(--spiritual)]">
            anilsbrain.com/vault
          </span>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="card rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-[color:var(--spiritual)]" />
            <h2 className="text-xl font-semibold text-white">Launch Countdown</h2>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
              <p className="text-xs text-muted">Days until March 1</p>
              <p className="mt-2 text-2xl font-bold text-white">{daysRemaining}</p>
            </div>
            <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
              <p className="text-xs text-muted">Time remaining</p>
              <p className="mt-2 text-2xl font-bold text-white">{percentRemaining.toFixed(1)}%</p>
            </div>
            <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
              <p className="text-xs text-muted">Status</p>
              <p className="mt-2 text-lg font-bold" style={{ color: daysRemaining === 0 ? "#22c55e" : "var(--spiritual)" }}>
                {launchStatus}
              </p>
            </div>
          </div>
          <div className="mt-4 h-3 rounded-full bg-[#1f1f1f]">
            <div className="h-3 rounded-full bg-[color:var(--spiritual)]" style={{ width: `${percentRemaining}%` }} />
          </div>
        </article>

        <article className="card rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-[color:var(--spiritual)]" />
            <h2 className="text-xl font-semibold text-white">Mission Statement</h2>
          </div>
          <p className="mt-3 text-sm text-[#d1d5db]">
            Build a private brotherhood for disciplined men seeking spiritual alignment, focused execution, and meaningful growth.
            Deliver weekly insight drops, monthly live calls, and a community operating system that drives real transformation.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p>
              Founding price: <span className="font-semibold text-white">$44/month</span>
            </p>
            <p>
              Launch target: <span className="font-semibold text-white">10-15 founding members</span>
            </p>
          </div>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <CircleDollarSign className="h-5 w-5 text-[color:var(--spiritual)]" />
            <h2 className="text-xl font-semibold text-white">Revenue Tracker</h2>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
              <p className="text-xs text-muted">Current members</p>
              <p className="mt-2 text-2xl font-bold text-white">{members}</p>
            </div>
            <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
              <p className="text-xs text-muted">Monthly revenue</p>
              <p className="mt-2 text-2xl font-bold text-white">${monthlyRevenue}</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
            <div className="flex items-center justify-between text-sm text-muted">
              <span>Progress to target</span>
              <span>${monthlyRevenue} / ${revenueTarget}</span>
            </div>
            <div className="mt-2 h-3 rounded-full bg-[#1f1f1f]">
              <div className="h-3 rounded-full bg-[color:var(--spiritual)]" style={{ width: `${(monthlyRevenue / revenueTarget) * 100}%` }} />
            </div>
            <p className="mt-2 text-xs text-[#d1d5db]">Milestone: 10 members = $440/month</p>
          </div>
        </article>

        <article className="card rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[color:var(--spiritual)]" />
            <h2 className="text-xl font-semibold text-white">Key Metrics Dashboard</h2>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ["Members", "0/15 target"],
              ["Revenue", "$0/$660 target"],
              ["Content recorded", "0/4 videos"],
              ["TikTok posts", "0/10 posts"],
              ["LinkedIn posts", "0/4 posts"],
              ["DMs sent", "0/15 invites"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-3">
                <p className="text-xs text-muted">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="card rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[color:var(--spiritual)]" />
            <h2 className="text-xl font-semibold text-white">Launch Checklist (Interactive)</h2>
          </div>
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${checklistColor}22`, color: checklistColor }}>
            {checklistState}
          </span>
        </div>

        <div className="mt-4 rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
          <div className="flex items-center justify-between text-sm text-muted">
            <span>Execution progress</span>
            <span>
              {completedCount}/{checklistItems.length} complete ({checklistPercent}%)
            </span>
          </div>
          <div className="mt-2 h-3 rounded-full bg-[#1f1f1f]">
            <div className="h-3 rounded-full" style={{ width: `${checklistPercent}%`, backgroundColor: checklistColor }} />
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {Object.entries(grouped).map(([week, items]) => (
            <article key={week} className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
              <h3 className="font-semibold text-white">{week}</h3>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <label className="flex cursor-pointer items-start gap-2 text-sm text-[#d1d5db]">
                      <input
                        type="checkbox"
                        checked={!!checked[item.id]}
                        onChange={(e) => setChecked((prev) => ({ ...prev, [item.id]: e.target.checked }))}
                        className="mt-0.5 h-4 w-4 rounded border-[#4b5563] bg-[#0a0a0a] text-[color:var(--spiritual)]"
                      />
                      <span>{item.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="card rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-[color:var(--spiritual)]" />
            <h2 className="text-xl font-semibold text-white">Content Calendar</h2>
          </div>
          <div className="mt-4 space-y-2">
            {contentCalendar.map((entry) => (
              <div key={`${entry.date}-${entry.item}`} className="rounded-lg border border-[#2a2a2a] bg-[#101010] p-3">
                <p className="text-xs text-muted">{entry.date}</p>
                <p className="text-sm font-medium text-white">{entry.item}</p>
                <p className="text-xs text-[#c4b5fd]">{entry.channel} · {entry.due}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="space-y-4">
          <div className="card rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-[color:var(--spiritual)]" />
              <h2 className="text-xl font-semibold text-white">Vault Details</h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#d1d5db]">
              <li>Platform: <span className="text-white">Skool</span></li>
              <li>Pricing: <span className="text-white">$44/month</span></li>
              <li>Time commitment: <span className="text-white">1-2 hours/week</span></li>
              <li>What&apos;s inside: <span className="text-white">Weekly drop + monthly call + community threads</span></li>
              <li>Starter content: <span className="text-white">4-5 foundational videos</span></li>
            </ul>
          </div>

          <div className="card rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <Clock3 className="h-5 w-5 text-[color:var(--spiritual)]" />
              <h2 className="text-xl font-semibold text-white">Timeline at a Glance</h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#d1d5db]">
              <li>Week 1 (Feb 12-18): Foundation</li>
              <li>Week 2 (Feb 19-25): Content + Buzz</li>
              <li>Week 3 (Feb 26-Mar 1): Launch</li>
              <li>Month 1 (March): 10-15 members</li>
              <li>Month 2 (April): 20-25 members</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="card rounded-2xl p-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-[color:var(--spiritual)]" />
          <h2 className="text-xl font-semibold text-white">Next Steps (Actionable)</h2>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-[#d1d5db]">
          {["Set up Skool community", "Record Video 1: Welcome", "Post TikTok teaser #1", "DM first 5 men with invite"].map((step) => (
            <li key={step} className="rounded-lg border border-[#2a2a2a] bg-[#101010] px-3 py-2">
              ☐ {step}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
