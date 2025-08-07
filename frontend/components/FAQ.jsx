"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What amenities are included in the beachfront villas?",
      answer:
        "Our beachfront villas offer private pools, ocean views, personal butler service, and luxurious interiors with direct beach access.",
    },
    {
      question: "Is the resort family-friendly?",
      answer:
        "Absolutely! We offer family villas, a kid’s club, children's pool, and a wide range of activities for guests of all ages.",
    },
    {
      question: "What dining options are available at the resort?",
      answer:
        "The resort features multiple dining experiences including an ocean view restaurant, beachfront grill, pool bar, and private in-villa dining.",
    },
    {
      question: "Can I host my wedding or event at the resort?",
      answer:
        "Yes, we have a dedicated wedding pavilion and event planning team to help you create unforgettable celebrations by the sea.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="px-[5%] md:px-[10%]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden shadow-nexava-md">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
            </div>
            <div className="overflow-hidden shadow-nexava-md mt-8">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary-light/20 rounded-lg"></div>
            </div>
          </div>

          {/* FAQ Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">N</span>
              </div>
              <span className="text-primary font-medium tracking-wider uppercase">
                Questions For Us
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked
              <span className="text-primary"> Questions</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              {` Have questions about our resort experience? We've compiled answers
              to the most common queries from our guests.`}
            </p>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                  >
                    <span className="font-bold text-foreground">
                      {String(index + 1).padStart(2, "0")}. {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
