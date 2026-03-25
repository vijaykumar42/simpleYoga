"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is Aadhyantha Academy?",
    answer:
      "Aadhyantha Yoga Academy is a professional yoga training academy focused on developing discipline, confidence, and competitive skills through structured coaching programs.",
  },
  {
    question: "What types of yoga training programs do you offer?",
    answer:
      "We offer a range of programs including beginner courses, advanced training, and specialized workshops designed to enhance physical fitness, mental focus, and overall well-being.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "You can enroll in our courses by visiting our website and selecting the program that best suits your needs. We also offer personalized guidance to help you choose the right course.",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, we provide online classes that allow you to learn and practice yoga from the comfort of your home. Our online platform includes live sessions, recorded videos, and interactive support.",
  },
];

export default function FaqSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* 🔥 Heading */}
        <p className="text-primary uppercase tracking-widest text-base font-semibold mb-3">
          FAQs
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to contact us.
        </p>

        {/* 🔥 Accordion */}
        <Accordion type="single" collapsible className="text-left">
          {FAQS.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base md:text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
