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

  const miscQuestions = [
    { q: 'What is the ideal team size for corporate training?', a: 'The ideal team size is typically between 15-30 participants to ensure high engagement, though we can accommodate both smaller and larger groups depending on the program format.' },
    { q: 'How do we get started with Accredian?', a: 'You can get started by submitting an enquiry through our Contact Us form. Our advisors will schedule a consultation to understand your needs and propose a tailored training solution.' }
  ];

  const getQuestions = () => {
    if (activeTab === 'About the Course') return courseQuestions;
    if (activeTab === 'About the Delivery') return deliveryQuestions;
    return miscQuestions;
  };

  const questions = getQuestions();

  return (
    <section id="faqs" className="section faqs" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`}>Frequently Asked <span style={{color:'#2563EB'}}>Questions</span></h2>
        
        <div className={`faq-layout animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '100ms'}}>
          <div className="faq-tabs">
            <button 
              className={`faq-tab-new ${activeTab === 'About the Course' ? 'active' : ''}`}
              onClick={() => { setActiveTab('About the Course'); setOpenIndex(null); }}
            >
              About the Course
            </button>
            <button 
              className={`faq-tab-new ${activeTab === 'About the Delivery' ? 'active' : ''}`}
              onClick={() => { setActiveTab('About the Delivery'); setOpenIndex(null); }}
            >
              About the Delivery
            </button>
            <button 
              className={`faq-tab-new ${activeTab === 'Miscellaneous' ? 'active' : ''}`}
              onClick={() => { setActiveTab('Miscellaneous'); setOpenIndex(null); }}
            >
              Miscellaneous
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
      <style jsx>{`
        .faq-tab-new {
          padding: 15px 20px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
          color: var(--text-muted);
        }
        .faq-tab-new.active {
          color: #2563EB;
          border-left: 4px solid #2563EB;
          background: var(--card-bg);
        }
      `}</style>
    </section>
  );
}
