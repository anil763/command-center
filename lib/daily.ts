export type DailyPayload = {
  dateISO: string;
  displayDate: string;
  energyLabel: string;
  mainEnergy: number;
  secondaryEnergy: number;
  meanings: string;
  script: {
    hook: string;
    body: string;
    practicalStep: string;
    cta: string;
    filmingTip: string;
  };
  generatedAt: string;
};
