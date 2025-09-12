import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/cashinnobg.jpg"
      alt="CASH.IN Logo"
      width={162}
      height={50}
      className={cn("h-auto", className)}
      priority
    />
  );
}
