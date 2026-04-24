'use client';
import { useState, useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function FAQs() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.1);
  const [activeTab, setActiveTab] = useState('About the Course');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const courseQuestions = [
    { q: 'What types of corporate training does Accredian offer?', a: 'We offer a wide range of corporate training programs across various domains, customized to meet the specific needs of your organization.' },
    { q: 'What domain specializations are available?', a: 'We specialize in Product Management, Data Science, AI, Leadership, and Operations.' },
    { q: 'How long are typical programs?', a: 'Program durations vary depending on the depth and scope of the training, ranging from a few days to several months.' },
    { q: 'Can programs be customized?', a: 'Yes, all our programs can be fully customized to align with your business objectives and team requirements.' },
  ];

  const deliveryQuestions = [
    { q: 'What is the CAT Framework?', a: 'The CAT framework stands for Concept, Application, and Tools, ensuring a comprehensive and practical learning experience.' },
    { q: 'How do I enrol my team?', a: 'You can get started by filling out the enquiry form, and our team will get in touch with you to discuss your requirements.' },
  ];

  const questions = activeTab === 'About the Course' ? courseQuestions : deliveryQuestions;

  return (
    <section id="faqs" className="section faqs" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`}>Frequently Asked Questions</h2>
        
        <div className={`faq-layout animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '100ms'}}>
          <div className="faq-tabs">
            <button 
              className={`faq-tab ${activeTab === 'About the Course' ? 'active' : ''}`}
              onClick={() => { setActiveTab('About the Course'); setOpenIndex(null); }}
            >
              About the Course
            </button>
            <button 
              className={`faq-tab ${activeTab === 'About the Delivery' ? 'active' : ''}`}
              onClick={() => { setActiveTab('About the Delivery'); setOpenIndex(null); }}
            >
              About the Delivery
            </button>
          </div>
          
          <div className="faq-accordion">
            {questions.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question" 
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.q}
                  <span>{openIndex === index ? '−' : '+'}</span>
                </div>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
