export type DailyPayload = {
  dateISO: string;
  displayDate: string;
  energyLabel: string;
  mainEnergy: number;
  secondaryEnergy: number;
  meanings: string;
  script: {
    headerLine: string;
    introLine: string;
    themeTitle: string;
    themeLine: string;
    mainEnergyMeaning: string;
    secondaryEnergyMeaning: string;
    hook: string;
    body: string;
    practicalStep: string;
    cta: string;
    filmingTip: string;
  };
  generatedAt: string;
};
