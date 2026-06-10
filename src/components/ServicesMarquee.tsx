"use client";

import { MARQUEE_ITEMS } from "@/lib/constants";
import { StarIcon } from "@/components/ui/Icons";

function MarqueeContent() {
  return (
    <>
      {MARQUEE_ITEMS.map((item, index) => (
        <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-8">
          <span className="whitespace-nowrap text-lg font-bold tracking-tight text-text-dark md:text-xl">
            {item}
          </span>
          <StarIcon className="h-4 w-4 shrink-0 text-text-dark" />
        </span>
      ))}
    </>
  );
}

export default function ServicesMarquee() {
  return (
    <section
      aria-label="Services marquee"
      className="relative z-20 shrink-0 overflow-hidden bg-accent py-5 md:py-6"
    >
      <div className="flex w-max marquee-track">
        <div className="flex items-center gap-8 px-4">
          <MarqueeContent />
        </div>
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
}
