export function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  );
}

export function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.5 16.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 8L6.5 11.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServiceIcon({
  variant = "default",
  className = "h-8 w-8",
}: {
  variant?: "default" | "featured";
  className?: string;
}) {
  const stroke = variant === "featured" ? "#D9FF35" : "#0E1015";

  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="10" height="10" rx="2" stroke={stroke} strokeWidth="2" />
      <rect x="18" y="4" width="10" height="10" rx="2" stroke={stroke} strokeWidth="2" />
      <rect x="4" y="18" width="10" height="10" rx="2" stroke={stroke} strokeWidth="2" />
      <path
        d="M18 23H28M23 18V28"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
