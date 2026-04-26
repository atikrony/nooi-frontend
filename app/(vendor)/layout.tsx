import type { ReactNode } from "react";
import { Store } from "lucide-react";

export default function VendorLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-emerald-50/40">
      <header className="flex items-center gap-2 border-b border-emerald-200 bg-white px-4 py-3 text-sm font-medium text-emerald-800">
        <Store className="h-4 w-4" />
        <span>Vendor Area</span>
      </header>
      <main>{children}</main>
    </section>
  );
}
