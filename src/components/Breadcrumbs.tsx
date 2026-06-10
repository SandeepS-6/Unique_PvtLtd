"use client";

import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icons";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link href="/" className="text-text-secondary transition-colors hover:text-accent">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className="h-3 w-3 text-text-secondary/50" />
            {item.href ? (
              <Link href={item.href} className="text-text-secondary transition-colors hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span className="text-accent">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
