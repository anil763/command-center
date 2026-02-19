export type DailyNumerology = {
  dateISO: string;
  displayDate: string;
  mainEnergy: number;
  secondaryEnergy: number;
  mainMeaning: string;
  secondaryMeaning: string;
  label: string;
};

const ENERGY_MEANINGS: Record<number, string> = {
  1: 'Leadership & new beginnings',
  2: 'Partnership & intuitive balance',
  3: 'Creative expression & communication',
  4: 'Structure, discipline, and foundation',
  5: 'Change, freedom, and adaptability',
  6: 'Care, responsibility, and harmony',
  7: 'Introspection, wisdom, and spiritual depth',
  8: 'Power, abundance, and karmic accountability',
  9: 'Completion, compassion, and release',
  11: 'Intuition, inspiration, and spiritual insight',
  22: 'Master builder vision, strategy, and legacy',
  33: 'Master teacher healing, service, and guidance',
};

function sumDigits(value: string): number {
  return value
    .split('')
    .filter((char) => /\d/.test(char))
    .reduce((sum, digit) => sum + Number(digit), 0);
}

export function reduceToDigit(value: number): number {
  let current = value;
  while (current > 9) {
    current = String(current)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return current;
}

function reduceWithMasterNumbers(value: number): number {
  if (value === 11 || value === 22 || value === 33) return value;
  return reduceToDigit(value);
}

export function getDailyNumerology(date = new Date()): DailyNumerology {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dateISO = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const allDigits = `${day}${month}${year}`;

  const mainRaw = sumDigits(allDigits);
  const mainEnergy = reduceWithMasterNumbers(mainRaw);
  const secondaryEnergy = reduceWithMasterNumbers(reduceToDigit(day));

  const displayDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const mainMeaning = ENERGY_MEANINGS[mainEnergy] ?? ENERGY_MEANINGS[reduceToDigit(mainEnergy)] ?? 'Alignment';
  const secondaryMeaning = ENERGY_MEANINGS[secondaryEnergy] ?? ENERGY_MEANINGS[reduceToDigit(secondaryEnergy)] ?? 'Flow';

  return {
    dateISO,
    displayDate,
    mainEnergy,
    secondaryEnergy,
    mainMeaning,
    secondaryMeaning,
    label: `${mainEnergy} & ${secondaryEnergy} Energy`,
  };
}
