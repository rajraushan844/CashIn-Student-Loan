import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="130"
      height="40"
      viewBox="0 0 130 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <text
        x="0"
        y="28"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="24"
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
