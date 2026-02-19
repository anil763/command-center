"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <header className="sticky top-0 z-30 border-b border-[#222222] bg-[#0a0a0a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <h1 className="text-sm font-semibold sm:text-base">Second Brain — Anil&apos;s Command Center</h1>
          <button
            aria-label="Toggle navigation"
            className="interactive rounded-lg border border-border p-2 md:hidden hover:border-revenue"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      <div className="mx-auto flex max-w-7xl">
        <aside
          className={`fixed inset-y-0 left-0 z-20 w-72 border-r border-[#222222] bg-[#0a0a0a] p-4 pt-20 md:static md:block md:w-64 md:pt-4 ${open ? "block" : "hidden"}`}
        >
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`interactive flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${pathname === link.href ? "border-revenue bg-[#111111] text-revenue" : "border-[#222222] text-gray-300 hover:border-[#363636] hover:bg-[#111111] hover:text-gray-100"}`}
              >
                <span>{link.emoji}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 bg-[#0a0a0a] p-4 md:p-6">{children}</main>
      </div>
      <footer className="border-t border-[#222222] p-4 text-center text-xs text-gray-400">Updated by Claude & OpenClaw · v2.0</footer>
    </div>
  );
}
