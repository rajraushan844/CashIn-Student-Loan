import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="CASH.IN Logo"
      width={130}
      height={40}
      className={cn(className)}
      priority
    />
  );
}
