"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Invalid password. Please try again.");
        return;
      }

      router.replace(next);
      router.refresh();
    } catch {
      setError("Unable to sign in right now. Please try again.");
    } finally {
      setLoading(false);
      setPassword("");
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-[#242424] bg-[#111111] p-6 shadow-2xl">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Command Center Access</p>
      <h1 className="mt-2 text-2xl font-semibold text-white">Enter Password</h1>
      <p className="mt-2 text-sm text-gray-400">This dashboard is private. Sign in to continue.</p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div>
          <label htmlFor="password" className="mb-2 block text-sm text-gray-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoFocus
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-[#333333] bg-[#0d0d0d] px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-[#5b5b5b]"
            placeholder="Enter password"
            required
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg border border-[#3a3a3a] bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white transition hover:border-[#555555] hover:bg-[#202020] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
