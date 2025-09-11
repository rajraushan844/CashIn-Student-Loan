'use server';

/**
 * @fileOverview A loan eligibility check AI agent.
 *
 * - loanEligibilityCheck - A function that handles the loan eligibility check process.
 * - LoanEligibilityCheckInput - The input type for the loanEligibilityCheck function.
 * - LoanEligibilityCheckOutput - The return type for the loanEligibilityCheck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LoanEligibilityCheckInputSchema = z.object({
  studentStatus: z
    .string()
    .describe('The current academic status of the student (e.g., enrolled, on leave).'),
  age: z.number().describe('The age of the student.'),
  aadhaarCard: z.boolean().describe('Whether the student has an Aadhaar card.'),
  panCard: z.boolean().describe('Whether the student has a PAN card.'),
  studentId: z.boolean().describe('Whether the student has a student ID.'),
});
export type LoanEligibilityCheckInput = z.infer<
  typeof LoanEligibilityCheckInputSchema
>;

const LoanEligibilityCheckOutputSchema = z.object({
  eligible: z.boolean().describe('Whether the student is eligible for a loan.'),
  loanAmount: z
    .string()
    .describe(
      'The loan amount the student is eligible for, based on their provided information.'
    ),
  terms: z.string().describe('The loan terms available to the student.'),
});
export type LoanEligibilityCheckOutput = z.infer<
  typeof LoanEligibilityCheckOutputSchema
>;

export async function loanEligibilityCheck(
  input: LoanEligibilityCheckInput
): Promise<LoanEligibilityCheckOutput> {
  return loanEligibilityCheckFlow(input);
}

const prompt = ai.definePrompt({
  name: 'loanEligibilityCheckPrompt',
  input: {schema: LoanEligibilityCheckInputSchema},
  output: {schema: LoanEligibilityCheckOutputSchema},
  prompt: `You are a loan eligibility expert at CASH.IN, determining whether students are eligible for loans and under what terms.

  Based on the following information, determine if the student is eligible for a loan. If they are, also determine the loan amount and terms available to them.

  Student Status: {{{studentStatus}}}
  Age: {{{age}}}
  Aadhaar Card: {{{aadhaarCard}}}
  PAN Card: {{{panCard}}}
  Student ID: {{{studentId}}}

  Consider these factors when determining eligibility, loan amount, and terms:
  - Students must be at least 18 years old to be eligible.
  - Valid identification (Aadhaar, PAN, and Student ID) is required.
  - Loan amounts range from ₹500 to ₹4,000.
  - Annual interest will be charged at 8% to 10%, depending on the loan terms.
  - EMI payment options are available and follow a decreasing EMI structure.
`,
});

const loanEligibilityCheckFlow = ai.defineFlow(
  {
    name: 'loanEligibilityCheckFlow',
    inputSchema: LoanEligibilityCheckInputSchema,
    outputSchema: LoanEligibilityCheckOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
