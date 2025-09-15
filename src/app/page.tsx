import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import About from '@/components/sections/about';
import LoanDetails from '@/components/sections/loan-details';
import ProcessingFees from '@/components/sections/processing-fees';
import Rewards from '@/components/sections/rewards';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        {/* <LoanDetails /> */}
        {/* <ProcessingFees /> */}
        {/* <Rewards /> */}
      </main>
      <Footer />
    </div>
  );
}
