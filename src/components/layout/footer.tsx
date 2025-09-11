import { Logo } from '@/components/layout/logo';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Operated by LA Cooperation. Built for students, by students.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CASH.IN. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
