"use client";

type TabNavigationProps = {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
};

export default function TabNavigation({ tabs, activeTab, onChange }: TabNavigationProps) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`rounded-lg border px-4 py-2 text-sm ${activeTab === tab ? "border-revenue text-revenue" : "border-border text-muted hover:text-white"}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
