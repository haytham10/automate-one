"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Script from "next/script";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does an automation cost?",
  answer: "Pricing starts at $199 for simple automations (limited founder rate for first 3 agencies). Most projects range from $299-$799 depending on complexity. You'll get transparent pricing upfront with no hidden fees, and all source code is included."
    },
    {
      question: "What's included in the scope?",
      answer: "Every automation includes: custom Python code built for your specific needs, complete source code ownership, detailed setup documentation, video walkthrough, 30 days of free support and adjustments, and deployment assistance."
    },
    {
      question: "What's your guarantee?",
      answer: "100% money-back guarantee if the automation doesn't work as promised. I'll also provide 30 days of free adjustments and support to ensure everything runs smoothly in your environment."
    },
    {
      question: "How long does development take?",
      answer: "Most automations are delivered within 3-10 days depending on complexity. Simple Excel dashboards take 3-5 days, while complex web scraping or multi-step workflows may take 7-10 days. You'll get regular updates throughout."
    },
    {
      question: "What kind of support do you provide?",
      answer: "You get 30 days of free support including: bug fixes, minor adjustments, setup assistance, and troubleshooting. After that, ongoing support is available at $99/month or on a per-request basis."
    },
    {
      question: "Do I own the code?",
  answer: "Yes, absolutely! You receive the complete source code with full ownership rights. No licensing fees, no recurring charges. The automation is yours to modify, expand, or use however you'd like."
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    <Section 
      className="py-20 md:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="faq-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Everything you need to know about working with AutoMate.One
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openItem === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItem === index && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <a 
              href="mailto:info@auto-mate.one?subject=Question about AutoMate.One services"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </Section>
    </>
  );
};

export default FAQ;