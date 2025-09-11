'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Sparkles, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { checkEligibilityAction } from '@/app/actions';
import type { LoanEligibilityCheckOutput } from '@/ai/flows/loan-eligibility-check';

const formSchema = z.object({
  studentStatus: z.string().min(1, { message: 'Please enter your student status.' }),
  age: z.coerce.number().min(18, { message: 'You must be at least 18 years old.' }),
  aadhaarCard: z.boolean().refine((val) => val === true, { message: 'Aadhaar card is required.' }),
  panCard: z.boolean().refine((val) => val === true, { message: 'PAN card is required.' }),
  studentId: z.boolean().refine((val) => val === true, { message: 'Student ID is required.' }),
});

export default function LoanEligibilityForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<LoanEligibilityCheckOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentStatus: 'Enrolled',
      age: 18,
      aadhaarCard: false,
      panCard: false,
      studentId: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    setError(null);
    startTransition(async () => {
      const { success, data, error } = await checkEligibilityAction(values);
      if (success && data) {
        setResult(data);
      } else {
        setError(error || 'Failed to check eligibility.');
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
              name="studentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Status</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Enrolled, On Leave" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="18" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <FormLabel>Required Documents</FormLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 border rounded-lg">
            <FormField
              control={form.control}
              name="aadhaarCard"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="font-normal">Aadhaar Card</FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="panCard"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="font-normal">PAN Card</FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="studentId"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="font-normal">Student ID</FormLabel>
                </FormItem>
              )}
            />
            </div>
             <FormMessage>{form.formState.errors.aadhaarCard?.message || form.formState.errors.panCard?.message || form.formState.errors.studentId?.message}</FormMessage>
          </div>
          <Button type="submit" className="w-full rounded-full font-bold" disabled={isPending}>
            {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Check Eligibility
          </Button>
        </form>
      </Form>
      {result && (
        <Card className={`mt-6 ${result.eligible ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-2 ${result.eligible ? 'text-green-800' : 'text-red-800'}`}>
              {result.eligible ? <ThumbsUp /> : <ThumbsDown />}
              Eligibility Result
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.eligible ? (
                <>
                <Alert variant="default" className="bg-green-100 border-green-300">
                    <AlertTitle className="font-bold text-green-900">Congratulations! You are eligible.</AlertTitle>
                    <AlertDescription className="text-green-800">
                        Based on the information provided, you qualify for a loan.
                    </AlertDescription>
                </Alert>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Eligible Loan Amount</p>
                        <p className="text-lg font-bold">{result.loanAmount}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Available Terms</p>
                        <p className="text-lg font-bold">{result.terms}</p>
                    </div>
                </div>
                </>
            ) : (
                <Alert variant="destructive">
                    <AlertTitle className="font-bold">Not Eligible for a Loan</AlertTitle>
                    <AlertDescription>
                    Unfortunately, based on the information provided, you are not eligible for a loan at this time. Please ensure you are over 18 and have all required documents.
                    </AlertDescription>
                </Alert>
            )}
          </CardContent>
        </Card>
      )}
      {error && <Alert variant="destructive" className="mt-6">{error}</Alert>}
    </div>
  );
}
