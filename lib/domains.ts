import { Domain } from './types';

const aliases: Record<Domain, string[]> = {
  revenue: ['revenue', 'business', 'sales', 'monetization', 'funnel'],
  spiritual: ['spiritual', 'numerology', 'meditation', 'healing', 'inner work'],
  ugc: ['ugc', 'studio', 'content production', 'creator'],
  presidio: ['presidio', 'msp', 'managed services', 'cloud ops', 'it services'],
  ashram: ['ashram', 'guruji', 'temple', 'seva'],
};

export function normalizeDomain(value: unknown): Domain | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().toLowerCase();

  const direct: Record<string, Domain> = {
    revenue: 'revenue',
    'ugc-business': 'revenue',
    spiritual: 'spiritual',
    numerology: 'spiritual',
    ugc: 'ugc',
    studio: 'ugc',
    'ugc-studio': 'ugc',
    presidio: 'presidio',
    msp: 'presidio',
    ashram: 'ashram',
    guruji: 'ashram',
  };

  return direct[normalized] || null;
}

export function inferDomain(input: { title: string; tags: string[]; relativePath: string }): Domain {
  const searchable = `${input.title} ${input.tags.join(' ')} ${input.relativePath}`.toLowerCase();

  for (const [domain, words] of Object.entries(aliases) as Array<[Domain, string[]]>) {
    if (words.some((w) => searchable.includes(w))) return domain;
  }

  return 'revenue';
}
