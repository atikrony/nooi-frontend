import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <section className="min-h-screen bg-white">{children}</section>;
}
