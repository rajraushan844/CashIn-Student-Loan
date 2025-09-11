import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Award, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Instant Student Loans",
    description: "Get quick access to funds from ₹500 to ₹4,000 for your immediate needs.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Transparent & Fair",
    description: "No hidden charges. Enjoy clear terms, low processing fees, and fair policies.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Rewarding Responsibility",
    description: "Earn cashback and rewards for timely repayments and build a positive financial history.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Student-First Approach",
    description: "Designed by students, for students. We provide support with trust, care, and understanding.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-card">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Why Choose CASH.IN?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                We're more than just a loan app. We're your financial partner, committed to your growth and success.
            </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-transparent hover:border-primary/20 shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
