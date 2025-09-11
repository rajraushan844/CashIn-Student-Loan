'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized financial tips to students based on their loan usage and repayment behavior.
 *
 * - getPersonalizedFinancialTips - A function that takes loan usage and repayment behavior as input and returns personalized financial tips.
 * - PersonalizedFinancialTipsInput - The input type for the getPersonalizedFinancialTips function.
 * - PersonalizedFinancialTipsOutput - The return type for the getPersonalizedFinancialTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedFinancialTipsInputSchema = z.object({
  loanAmount: z.number().describe('The amount of the loan taken by the student.'),
  repaymentHistory: z
    .string()
    .describe(
      'A summary of the student’s loan repayment history, including on-time payments, late payments, and any defaults.'
    ),
  loanPurpose: z.string().describe('The stated purpose of the loan.'),
});
export type PersonalizedFinancialTipsInput = z.infer<typeof PersonalizedFinancialTipsInputSchema>;

const PersonalizedFinancialTipsOutputSchema = z.object({
  financialTips: z
    .array(z.string())
    .describe('A list of personalized financial tips for the student.'),
});
export type PersonalizedFinancialTipsOutput = z.infer<typeof PersonalizedFinancialTipsOutputSchema>;

export async function getPersonalizedFinancialTips(
  input: PersonalizedFinancialTipsInput
): Promise<PersonalizedFinancialTipsOutput> {
  return personalizedFinancialTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedFinancialTipsPrompt',
  input: {schema: PersonalizedFinancialTipsInputSchema},
  output: {schema: PersonalizedFinancialTipsOutputSchema},
  prompt: `You are a financial advisor providing personalized financial tips to students.

  Based on the student's loan usage and repayment behavior, provide a list of financial tips.

  Loan Amount: {{{loanAmount}}}
  Repayment History: {{{repaymentHistory}}}
  Loan Purpose: {{{loanPurpose}}}

  Provide tips that are specific to the student's situation and encourage responsible borrowing habits.
  The tips should be concise and actionable.
  Return the tips as a numbered list.`,
});

const personalizedFinancialTipsFlow = ai.defineFlow(
  {
    name: 'personalizedFinancialTipsFlow',
    inputSchema: PersonalizedFinancialTipsInputSchema,
    outputSchema: PersonalizedFinancialTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
