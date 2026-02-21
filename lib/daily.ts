export type DailyPayload = {
  dateISO: string;
  displayDate: string;
  energyLabel: string;
  mainEnergy: number;
  secondaryEnergy: number;
  meanings: string;
  script: {
    date: string;
    energyLabel: string;
    title: string;
    hook: string;
    body: string;
    practicalValue: string;
    cta: string;
  };
  generatedAt: string;
};
