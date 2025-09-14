import { Logo } from '@/components/layout/logo';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#loans', label: 'Loans' },
  { href: '#fees', label: 'Fees' },
  { href: '#rewards',label: 'Rewards' },
  { href: '#faq', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
    { href: '#', icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
    { href: '#', icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { href: '#', icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
    { href: '#', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border/40">
      <div className="container py-12">
        <div className="grid gap-10 row-gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
             <Logo />
            <p className="text-sm text-muted-foreground">
              Operated by LA Cooperation. Built for students, by students. Simple, transparent, and empowering financial support.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-headline">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-headline">Legal</h3>
            <ul className="space-y-2">
                 <li>
                    <Link href="#legal" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        Terms & Conditions
                    </Link>
                </li>
                 <li>
                    <Link href="#legal" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        Privacy Policy
                    </Link>
                </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-headline">Follow Us</h3>
             <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} aria-label={social.label} className="text-muted-foreground transition-colors hover:text-primary">
                  {social.icon}
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Stay connected with us on social media.</p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between pt-8 mt-10 border-t border-border/60 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground">
          Made with ❤️ by AgamiVerse Technologies  |  &copy; 2025 CASH.IN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
