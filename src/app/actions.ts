'use server';

import {
  loanEligibilityCheck,
  type LoanEligibilityCheckInput,
  type LoanEligibilityCheckOutput,
} from '@/ai/flows/loan-eligibility-check';
import {
  getPersonalizedFinancialTips,
  type PersonalizedFinancialTipsInput,
  type PersonalizedFinancialTipsOutput,
} from '@/ai/flows/personalized-financial-tips';
import { z } from 'zod';

const LoanEligibilityCheckSchema = z.object({
  studentStatus: z.string().min(1, 'Student status is required.'),
  age: z.coerce.number().min(18, 'You must be at least 18 years old.'),
  aadhaarCard: z.boolean(),
  panCard: z.boolean(),
  studentId: z.boolean(),
});

export async function checkEligibilityAction(
  data: LoanEligibilityCheckInput
): Promise<{ success: boolean; data: LoanEligibilityCheckOutput | null; error: any }> {
  const parsed = LoanEligibilityCheckSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, data: null, error: parsed.error.format() };
  }

  try {
    const result = await loanEligibilityCheck(parsed.data);
    return { success: true, data: result, error: null };
  } catch (error) {
    console.error(error);
    return { success: false, data: null, error: 'An unexpected error occurred.' };
  }
}

const FinancialTipsSchema = z.object({
  loanAmount: z.coerce.number().min(500, 'Loan amount must be at least ₹500.'),
  repaymentHistory: z.string().min(1, 'Repayment history is required.'),
  loanPurpose: z.string().min(1, 'Loan purpose is required.'),
});

export async function getFinancialTipsAction(
  data: PersonalizedFinancialTipsInput
): Promise<{ success: boolean; data: PersonalizedFinancialTipsOutput | null; error: any }> {
  const parsed = FinancialTipsSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, data: null, error: parsed.error.format() };
  }

  try {
    const result = await getPersonalizedFinancialTips(parsed.data);
    return { success: true, data: result, error: null };
  } catch (error) {
    console.error(error);
    return { success: false, data: null, error: 'An unexpected error occurred.' };
  }
}
