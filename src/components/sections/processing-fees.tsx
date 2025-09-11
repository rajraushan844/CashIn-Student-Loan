import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const feeData = [
  { amount: '₹500', fee: '1.6%', annual: '< 2%' },
  { amount: '₹1,000', fee: '1.0%', annual: '< 2%' },
  { amount: '₹2,000', fee: '1.0%', annual: '< 2%' },
  { amount: '₹3,000', fee: '0.83%', annual: '< 2%' },
  { amount: '₹4,000', fee: '0.75%', annual: '< 2%' },
];

export default function ProcessingFees() {
  return (
    <section id="fees" className="w-full bg-card">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Processing Fees</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Transparent & Affordable Fees
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              At CASH.IN, transparency is core to our services. A nominal one-time processing fee is charged on every
              loan, calculated as a small percentage of the loan amount. We strictly avoid hidden charges to keep
              financial support affordable and student-friendly.
            </p>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Fee Structure</CardTitle>
                <CardDescription>One-time fee collected at the time of loan approval.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-headline">Loan Amount</TableHead>
                    <TableHead className="font-headline">Processing Fee</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feeData.map((row) => (
                    <TableRow key={row.amount}>
                      <TableCell className="font-medium">{row.amount}</TableCell>
                      <TableCell>{row.fee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
