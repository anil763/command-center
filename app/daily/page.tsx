import { Sparkles } from 'lucide-react';
import { headers } from 'next/headers';
import CopyScriptButton from '@/app/daily/CopyScriptButton';
import type { DailyPayload } from '@/lib/daily';

export const dynamic = 'force-dynamic';

async function getDailyScript(): Promise<DailyPayload> {
  const headerList = headers();
  const host = headerList.get('host') ?? 'localhost:3000';
  const proto = headerList.get('x-forwarded-proto') ?? 'http';
  const response = await fetch(`${proto}://${host}/api/daily`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Unable to load daily script');
  }
  return response.json();
}

export default async function DailyPage() {
  const payload = await getDailyScript();

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-10">
      <section className="card rounded-2xl p-6 md:p-8">
        <p className="text-sm font-medium text-[color:var(--spiritual)]">{payload.script.headerLine}</p>
        <h1 className="mt-2 text-2xl font-bold text-white md:text-4xl">{payload.script.introLine}</h1>
        <p className="mt-4 text-base text-muted md:text-lg">{payload.script.themeTitle}</p>
        <p className="text-base font-semibold text-[color:var(--spiritual)] md:text-lg">{payload.script.themeLine}</p>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <article className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[color:var(--spiritual)]">Main Energy Meaning</h3>
            <p className="mt-2 text-sm leading-6 text-gray-200">{payload.script.mainEnergyMeaning}</p>
          </article>
          <article className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[color:var(--spiritual)]">Secondary Energy Meaning</h3>
            <p className="mt-2 text-sm leading-6 text-gray-200">{payload.script.secondaryEnergyMeaning}</p>
          </article>
        </div>

        <div className="mt-4">
          <CopyScriptButton payload={payload} />
        </div>
      </section>

      <section className="card rounded-2xl p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[color:var(--spiritual)]" />
          <h2 className="text-xl font-semibold text-white">Detailed Daily Script</h2>
        </div>

        <div className="mt-4 space-y-4">
          {[
            { title: 'Hook (3-5 sec)', content: payload.script.hook },
            { title: 'Body (60-90 sec)', content: payload.script.body },
            { title: 'Practical Step (15 sec)', content: payload.script.practicalStep },
            { title: 'Call to Action (5-7 sec)', content: payload.script.cta },
            { title: 'Pro Filming Tip', content: payload.script.filmingTip },
          ].map((section) => (
            <article key={section.title} className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-4 md:p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--spiritual)]">{section.title}</h3>
              <p className="mt-2 whitespace-pre-wrap text-base leading-7 text-gray-200">{section.content}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
