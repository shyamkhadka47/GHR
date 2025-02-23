import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    id: "01",
    question: "How Do Roofing Work Plans?",
    answer:
      "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.",
  },
  {
    id: "02",
    question: "What Are The Main Types Of Roofing Systems?",
    answer:
      "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.",
  },
  {
    id: "03",
    question: "Taking Seamless Key Performance Indicators?",
    answer:
      "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.",
  },
  {
    id: "04",
    question: "Minming Construction Project Program",
    answer:
      "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState("01");

  return (
    <div className="flex gap-5 lg:gap-20 flex-col lg:flex-row justify-center px-[5%] md:px-[100px] py-16 lg:py-24">
        <div className="h-[600px] sm:min-w-[300px]">
            <Image src="/gb5.jpg" alt="Gokarna Hill Side Resort" width={1800} height={1200} className="w-auto h-full object-cover" priority />
        </div>
      <div className="">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 bg-[#82B440]" />
          <span className="text-[#82B440] text-sm font-medium tracking-wider">
            QUESTIONS FOR US
          </span>
        </div>

        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
          Some Asked Question?
        </h2>

        <p className="text-gray-600 mb-12">
          Proin efficitur, mauris vel condimentum pulvinar, velit orci
          consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio
          orci. Nunc id massa ante. Suspendisse sit amet neque euismod
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-50 rounded-sm overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? "" : faq.id)}
                className="flex items-center justify-between w-full p-5 text-left"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-primaryColor font-medium">{faq.id}.</span>
                  <span className="font-medium hover:text-secondaryColor transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#82B440] transition-transform duration-200 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openId === faq.id ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-5 pt-0 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
