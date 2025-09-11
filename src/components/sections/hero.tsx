import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-student');

  return (
    <section id="home" className="w-full pt-20 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start space-y-6">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            Financial Support for Students
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
            Small Loans, Big Dreams
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Welcome to CASH.IN! Get instant, hassle-free loans from ₹500 to ₹4,000. Designed for students, because we believe your education and ambitions should never be put on hold.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button asChild size="lg" className="rounded-full font-bold text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link href="#loans">Apply for a Loan</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full font-bold text-lg px-8 py-6 border-2">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
            {heroImage && (
                <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={800}
                height={600}
                className="rounded-3xl object-cover shadow-2xl"
                data-ai-hint={heroImage.imageHint}
                priority
                />
            )}
        </div>
      </div>
    </section>
  );
}
