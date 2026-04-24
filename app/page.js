'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import AccredianEdge from '@/components/AccredianEdge';
import CAT from '@/components/CAT';
import HowItWorks from '@/components/HowItWorks';
import FAQs from '@/components/FAQs';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import EnquireModal from '@/components/EnquireModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <main>
      <Navbar />
      <Hero openModal={openModal} />
      <Stats />
      <Clients />
      <AccredianEdge />
      <CAT />
      <HowItWorks />
      <FAQs />
      <Testimonials />
      <CTABanner openModal={openModal} />
      <Footer openModal={openModal} />
      <FloatingButton />
      
      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}