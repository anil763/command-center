import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center px-4 py-8">
      <Suspense
        fallback={<div className="w-full max-w-md rounded-2xl border border-[#242424] bg-[#111111] p-6 text-sm text-gray-400">Loading login...</div>}
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
