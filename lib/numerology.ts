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
  1: 'Initiation',
  2: 'Harmony',
  3: 'Expression',
  4: 'Foundation',
  5: 'Change',
  6: 'Nurturing',
  7: 'Reflection',
  8: 'Power',
  9: 'Completion',
  10: 'Manifestation',
  11: 'Intuition',
  22: 'Mastermind',
  33: 'Compassion',
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

export function getDailyNumerology(date = new Date()): DailyNumerology {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dateISO = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const allDigits = `${day}${month}${year}`;

  const mainEnergy = sumDigits(allDigits);
  const secondaryEnergy = reduceToDigit(day);

  const displayDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const mainMeaning = ENERGY_MEANINGS[mainEnergy] ?? 'Alignment';
  const secondaryMeaning = ENERGY_MEANINGS[secondaryEnergy] ?? 'Flow';

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
