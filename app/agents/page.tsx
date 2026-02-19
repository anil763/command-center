"use client";

import ArchitectureFlow from "@/components/ArchitectureFlow";
import InteractiveRoutingTest from "@/components/InteractiveRoutingTest";
import TabNavigation from "@/components/TabNavigation";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import { useState } from "react";

const tabs = ["ARCHITECTURE", "CHAINS", "ROUTING"];

export default function AgentsPage() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">OpenClaw Agents</h2>
      <p className="text-sm text-muted">Routing architecture, workflow chains, and live request testing.</p>
      <TabNavigation tabs={tabs} activeTab={tab} onChange={setTab} />
      {tab === "ARCHITECTURE" && <ArchitectureFlow />}
      {tab === "CHAINS" && <WorkflowVisualization />}
      {tab === "ROUTING" && <InteractiveRoutingTest />}
    </div>
  );
}
