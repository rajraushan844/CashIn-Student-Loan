import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Calendar, Gift, Star } from 'lucide-react';
import FinancialTipsForm from '@/components/financial-tips-form';

export default function Rewards() {
  return (
    <section id="rewards" className="w-full">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Earn As You Borrow
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            We celebrate financial discipline. Pay on time and get rewarded with real cashback, exclusive benefits, and a chance to win big.
          </p>
        </div>

        <Tabs defaultValue="cashback" className="mt-12 max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cashback" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Star className="mr-2 h-4 w-4" /> Cashback
            </TabsTrigger>
            <TabsTrigger value="year-end" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Award className="mr-2 h-4 w-4" /> Year-End Reward
            </TabsTrigger>
            <TabsTrigger value="new-year" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Gift className="mr-2 h-4 w-4" /> New Year Reward
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cashback">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Good Payment History Cashback</CardTitle>
                <CardDescription>Get rewarded for your discipline in both EMI and one-time repayments.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">2 On-Time EMIs</p>
                        <p className="text-2xl font-bold font-headline">₹10</p>
                    </div>
                     <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">4 On-Time EMIs</p>
                        <p className="text-2xl font-bold font-headline">₹30</p>
                    </div>
                     <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">6 On-Time EMIs</p>
                        <p className="text-2xl font-bold font-headline">₹50</p>
                    </div>
                     <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                        <p className="text-sm opacity-80">Full Repayment Bonus</p>
                        <p className="text-2xl font-bold font-headline">₹100</p>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2">Cashback is granted if all EMIs are paid within the grace period. Any missed payment resets milestone eligibility.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="year-end">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Year-End Best Student Reward</CardTitle>
                <CardDescription>A grand reward for our most responsible borrower of the year.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                 <p className="text-6xl font-bold font-headline text-primary">₹1,500</p>
                 <p className="text-muted-foreground">Awarded to one student with a perfect repayment record throughout the year.</p>
                 <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4"/>
                    <span>Winner announced on December 25th</span>
                 </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-year">
             <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>New Year Reward</CardTitle>
                <CardDescription>Celebrate the new year with a special surprise from CASH.IN.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                 <p className="text-6xl font-bold font-headline text-accent">₹1,000</p>
                 <p className="text-muted-foreground">One lucky student with at least 3 completed loans and a clean record is chosen randomly.</p>
                 <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Gift className="w-4 h-4"/>
                    <span>Winner announced at the start of the New Year</span>
                 </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-24">
            <Card className="max-w-4xl mx-auto shadow-lg bg-card">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl sm:text-3xl font-headline">Get Personalized Financial Tips</CardTitle>
                    <CardDescription>Provide some details to receive AI-powered tips for managing your finances better.</CardDescription>
                </CardHeader>
                <CardContent>
                    <FinancialTipsForm />
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}
