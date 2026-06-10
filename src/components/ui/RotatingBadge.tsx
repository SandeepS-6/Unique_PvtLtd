"use client";

interface RotatingBadgeProps {
  size?: number;
  className?: string;
  textColor?: string;
}

export default function RotatingBadge({
  size = 140,
  className = "",
  textColor = "currentColor",
}: RotatingBadgeProps) {
  const id = `badge-circle-${size}`;

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rotate-badge-text">
        <svg viewBox="0 0 120 120" className="h-full w-full">
          <defs>
            <path
              id={id}
              d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
            />
          </defs>
          <text
            fill={textColor}
            fontSize="7.5"
            fontWeight="600"
            letterSpacing="3"
            className="uppercase"
          >
            <textPath href={`#${id}`} startOffset="0%">
              Since 2007 • Unique Technology Partner • Since 2007 • Unique Technology Partner •
            </textPath>
          </text>
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-[46%] w-[46%] items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/20">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-text-dark"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
