import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-slate-50">
      <header className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
        <ShieldCheck className="h-4 w-4" />
        <span>Admin Area</span>
      </header>
      <main>{children}</main>
    </section>
  );
}
