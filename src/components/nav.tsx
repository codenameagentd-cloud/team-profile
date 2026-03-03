"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { team } from "@/data/team";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 md:px-12 z-[100]"
      style={{ mixBlendMode: "difference" }}
    >
      <Link
        href="/"
        className="text-white text-base font-semibold tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      >
        The team behind the team.
      </Link>
      <div className="flex gap-8">
        {team.map((m) => (
          <Link
            key={m.slug}
            href={`/${m.slug}`}
            className={`text-[13px] font-medium text-white transition-opacity duration-300 ${
              pathname === `/${m.slug}` ? "opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            {m.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
