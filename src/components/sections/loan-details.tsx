import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import LoanEligibilityForm from '@/components/loan-eligibility-form';

const loanOptions = [
  {
    title: '₹500 – ₹1,000',
    subtitle: 'For small & urgent needs',
    icon: <GraduationCap className="w-10 h-10 text-accent" />,
    features: ['Daily expenses (hostel/food/travel)', 'Study materials (books, notes)', 'Quick fixes (recharge, exam forms)'],
    popular: false,
  },
  {
    title: '₹2,000 – ₹3,000',
    subtitle: 'For academic & personal growth',
    icon: <BookOpen className="w-10 h-10 text-accent" />,
    features: ['Project works & assignments', 'Workshops & short courses', 'Gadgets/accessories (earphones)'],
    popular: true,
  },
  {
    title: '₹4,000',
    subtitle: 'For bigger requirements',
    icon: <Briefcase className="w-10 h-10 text-accent" />,
    features: ['Semester/tuition fee payments', 'Upgrading educational gadgets', 'Small personal or family events'],
    popular: false,
  },
];

export default function LoanDetails() {
  return (
    <section id="loans" className="w-full">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Flexible Loans For Every Student Need
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            From daily essentials to bigger academic goals, we have a loan that fits your life.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loanOptions.map((option, index) => (
            <Card
              key={index}
              className={`flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                option.popular ? 'border-2 border-primary shadow-xl' : 'shadow-lg'
              }`}
            >
              {option.popular && (
                <div className="py-1 px-4 bg-primary text-primary-foreground text-sm font-bold text-center rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-2">{option.icon}</div>
                <CardTitle className="text-4xl font-headline">{option.title}</CardTitle>
                <CardDescription className="font-semibold text-lg">{option.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-3 text-muted-foreground flex-1">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-1 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-24">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl sm:text-3xl font-headline">Check Your Loan Eligibility</CardTitle>
                    <CardDescription>Fill out the form below to see if you qualify for a CASH.IN loan.</CardDescription>
                </CardHeader>
                <CardContent>
                    <LoanEligibilityForm />
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}
