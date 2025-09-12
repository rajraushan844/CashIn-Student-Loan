import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="110"
      height="40"
      viewBox="0 0 110 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-primary', className)}
    >
      <path
        d="M38 2C48.4934 2 57 10.5066 57 21C57 31.4934 48.4934 40 38 40"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M27 2C37.4934 2 46 10.5066 46 21C46 31.4934 37.4934 40 27 40"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <rect x="62" y="1" width="11" height="15" rx="2" fill="currentColor" />
      <rect x="62" y="24" width="11" height="15" rx="2" fill="currentColor" />
      <text
        x="33"
        y="25"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
      >
        CASH
        <tspan fill="hsl(var(--accent))">.</tspan>
        <tspan fill="currentColor">IN</tspan>
      </text>
    </svg>
  );
}
