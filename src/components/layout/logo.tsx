import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="130"
      height="40"
      viewBox="0 0 130 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-primary', className)}
    >
      <path
        d="M20 6C11.1634 6 4 13.1634 4 22C4 30.8366 11.1634 38 20 38C28.8366 38 36 30.8366 36 22"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M20 2C28.8366 2 36 9.16344 36 18"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <text
        x="45"
        y="28"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
      >
        CASH
        <tspan fill="hsl(var(--accent))">.</tspan>
        <tspan>IN</tspan>
      </text>
    </svg>
  );
}
