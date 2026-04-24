import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import AccredianEdge from '@/components/AccredianEdge';
import CAT from '@/components/CAT';
import HowItWorks from '@/components/HowItWorks';
import FAQs from '@/components/FAQs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <CAT />
      <HowItWorks />
      <FAQs />
      <Testimonials />
      <Footer />
      <FloatingButton />
    </main>
  );
}