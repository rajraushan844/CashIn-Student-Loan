'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Loader2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { getFinancialTipsAction } from '@/app/actions';
import type { PersonalizedFinancialTipsOutput } from '@/ai/flows/personalized-financial-tips';

const formSchema = z.object({
  loanAmount: z.coerce.number().min(500, 'Loan amount must be at least ₹500.'),
  repaymentHistory: z.string().min(10, 'Please provide more details on your repayment history.'),
  loanPurpose: z.string().min(3, 'Please specify the purpose of the loan.'),
});

export default function FinancialTipsForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<PersonalizedFinancialTipsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanAmount: 1000,
      repaymentHistory: 'Paid all EMIs on time.',
      loanPurpose: 'Buying books',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    setError(null);
    startTransition(async () => {
      const { success, data, error } = await getFinancialTipsAction(values);
      if (success && data) {
        setResult(data);
      } else {
        setError(error || 'Failed to get financial tips.');
      }
    });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="loanAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Amount (₹)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="2000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="loanPurpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Purpose</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Exam fees, new tablet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="repaymentHistory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repayment History</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Paid all EMIs on time, missed one payment by 2 days"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full rounded-full font-bold" disabled={isPending}>
            {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Get My Tips
          </Button>
        </form>
      </Form>
      {result && result.financialTips.length > 0 && (
        <Card className="mt-6 bg-secondary border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-2 rounded-full">
                    <Lightbulb className="w-6 h-6 text-accent"/>
                </div>
                <h3 className="text-xl font-bold font-headline text-accent-foreground/80">Your Personalized Financial Tips</h3>
            </div>
            <ul className="space-y-2">
              {result.financialTips.map((tip, index) => (
                <li key={index} className="flex items-start text-secondary-foreground">
                  <span className="font-bold mr-2">{index + 1}.</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {error && <Alert variant="destructive" className="mt-6">{error}</Alert>}
    </div>
  );
}
