import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center font-headline font-bold text-2xl text-primary', className)}>
      CASH
      <span className="text-accent">.</span>
      IN
    </div>
  );
}
