import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/favicon.svg"
      alt="CASH.IN Logo"
      width={130}
      height={40}
      className={cn("h-auto", className)}
      priority
    />
  );
}
