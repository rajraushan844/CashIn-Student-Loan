import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

export const metadata: Metadata = {
  title: 'CASH.IN Student Loans',
  description: 'Simple, transparent, and empowering financial support for students.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Replace with your actual WhatsApp number
  const whatsappNumber = '918340388510';
  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
        <Link
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 p-3 bg-white rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-8 h-8" />
        </Link>
      </body>
    </html>
  );
}
