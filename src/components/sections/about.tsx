import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-team');

  return (
    <section id="about" className="w-full">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Your Future Deserves the Right Support Today.
              </h2>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At CASH.IN, we believe that financial support should be simple, transparent, and empowering. Operated by LA
              Cooperation, a community of young entrepreneurs from Nagaland, we are committed to helping students overcome
              financial barriers with trust and care.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              What makes us different is our student-first approach. We don’t just provide loans — we build confidence,
              responsibility, and opportunity. With strict privacy protection, clear terms, and no hidden charges,
              CASH.IN ensures that you can borrow with confidence, knowing you’re in safe hands.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="overflow-hidden rounded-2xl shadow-2xl transition-all hover:scale-105 hover:shadow-primary/20">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
