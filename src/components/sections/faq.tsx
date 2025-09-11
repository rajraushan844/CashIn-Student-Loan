import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: "Who can apply for a loan with CASH.IN?",
    answer: "Only students residing in India are eligible. You must be 18 years or older and provide valid identification (Aadhaar, PAN, and Student ID)."
  },
  {
    question: "What is the loan amount I can borrow?",
    answer: "CASH.IN currently offers small student loans ranging from ₹500 to ₹4,000."
  },
  {
    question: "What documents are required to apply?",
    answer: "You will need to provide your Aadhaar Card, PAN Card, and a valid Student ID."
  },
  {
    question: "What is the interest rate on loans?",
    answer: "Loans are charged an annual interest of 8% to 10%, depending on the loan term selected. EMI payments follow a decreasing EMI structure."
  },
  {
    question: "How do I repay my loan?",
    answer: "Repayments must be made as per your repayment schedule. Payment options include QR code/UPI transfers provided by CASH.IN."
  },
  {
    question: "What happens if I miss my repayment date?",
    answer: "A 5-day grace period is given with no fines. After that, a penalty of ₹10 is added every 2 days until dues are cleared. Continuous non-payment may lead to account suspension, legal action, and a negative impact on your credit score."
  },
  {
    question: "Does CASH.IN offer any rewards or benefits?",
    answer: "Yes! Students can enjoy cashback programs for timely repayments and referral rewards for inviting friends. A good repayment history may also unlock higher loan amounts in the future."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="w-full">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                Have questions? We have answers. Here are some of the most common queries from our student community.
            </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg text-left font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
