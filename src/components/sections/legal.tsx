import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const lateFineData = [
  { days: '1 – 5 (Grace Period)', fine: '0' },
  { days: '6 – 7', fine: '10' },
  { days: '8 – 9', fine: '20' },
  { days: '10 – 11', fine: '30' },
  { days: '12 – 13', fine: '40' },
  { days: '14 – 15', fine: '50' },
  { days: '16 – 17', fine: '60' },
  { days: '18 – 19', fine: '70' },
  { days: '20 – 21', fine: '80' },
  { days: '22 – 23', fine: '90' },
  { days: '24+', fine: '100 (and increasing)' },
];

const terms = [
    { title: "Introduction", content: "Welcome to CASH.IN, a financial service operated by LA Cooperation. By using our services, you agree to be bound by these Terms and Conditions. If you do not accept these Terms, you must not use our services." },
    { title: "Eligibility", content: "You must be a student residing in India, be at least 18 years old, and provide valid identification (Aadhaar, PAN, and Student ID). By applying, you confirm all information is accurate." },
    { title: "Loan Agreement", content: "Loan amounts range from ₹500 to ₹4,000 with annual interest of 8% to 10%. You are responsible for repaying the loan, interest, penalties, and GST (19%). Failure to pay may result in legal action." },
    { title: "Repayment & Default", content: "Payments must follow the schedule. In case of default, CASH.IN may recover dues through legal means. Late payment penalties apply and repeated defaults may lead to blacklisting." },
    { title: "No Third-Party Involvement", content: "Agreements are strictly between CASH.IN and the borrower. You cannot transfer your obligations to another person." },
    { title: "Documentation & Verification", content: "You agree to provide accurate information. Fraudulent documents will result in blacklisting and legal prosecution. We may verify your status anytime." },
    { title: "Security & Privacy", content: "Your personal information is securely stored and used only for loan processing, verification, and collection, following strict data protection protocols." },
    { title: "Liability & Indemnification", content: "CASH.IN is not responsible for losses from misuse of funds. You agree to indemnify CASH.IN from claims arising due to non-repayment or misuse." },
    { title: "Amendments & Termination", content: "CASH.IN may modify these Terms at any time. Continued use implies acceptance. We may terminate your agreement for fraud or breach of terms." },
    { title: "Legal Jurisdiction", content: "All disputes fall under the jurisdiction of the Courts of Kohima, Nagaland. Legal recovery may be initiated in any competent court if required." },
];

export default function Legal() {
  return (
    <section id="legal" className="w-full bg-card">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">The Fine Print</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                Transparency is key. Please read our terms, conditions, and policies carefully.
            </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
            <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="terms" className="border rounded-lg bg-background">
                    <AccordionTrigger className="p-6 text-xl font-medium hover:no-underline">
                        Terms &amp; Conditions
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                        <div className="space-y-6 text-muted-foreground">
                            {terms.map((term, index) => (
                                <div key={index}>
                                    <h4 className="font-semibold text-foreground">{index + 1}. {term.title}</h4>
                                    <p>{term.content}</p>
                                </div>
                            ))}
                             <Alert>
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Acknowledgement</AlertTitle>
                                <AlertDescription>
                                By using CASH.IN, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. Non-compliance may result in legal consequences.
                                </AlertDescription>
                            </Alert>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="late-fine" className="border rounded-lg bg-background">
                    <AccordionTrigger className="p-6 text-xl font-medium hover:no-underline">
                        Late Payment Fine Policy
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 space-y-6">
                       <p className="text-muted-foreground">
                        At CASH.IN, we value financial discipline. A 5-day grace period is provided from the due date with no fines. After the grace period, fines will be charged as follows:
                       </p>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead className="font-headline">Days After Due Date</TableHead>
                                <TableHead className="text-right font-headline">Late Fine (₹)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {lateFineData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{row.days}</TableCell>
                                    <TableCell className="text-right">{row.fine}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                         <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Consequences of Non-Payment</AlertTitle>
                            <AlertDescription>
                                Non-payment can lead to account suspension, legal proceedings, credit score impact, and added recovery expenses. Pay on time to avoid these consequences.
                            </AlertDescription>
                        </Alert>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </div>
    </section>
  );
}
