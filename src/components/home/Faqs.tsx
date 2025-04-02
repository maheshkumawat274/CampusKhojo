import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is CampusKhojo?",
      answer: "CampusKhojo is a platform that provides students with real college experiences, campus tours, and admission assistance.",
    },
    {
      question: "Which colleges do you cover?",
      answer: "We cover top universities and colleges across India. You can check the complete list on our website.",
    },
    {
      question: "How does CampusKhojo help in the admission process?",
      answer: "We guide students with the best college options, assist in document verification, and simplify the direct admission process.",
    },
    {
      question: "What can I see in the college videos?",
      answer: "Our videos showcase classrooms, hostels, canteens, libraries, sports facilities, and overall campus life.",
    },
    {
      question: "Are the videos authentic?",
      answer: "Yes, our videos are based on real student experiences and verified sources.",
    },
    {
      question: "Is CampusKhojo a paid service?",
      answer: "No, college videos and basic information are free. However, premium guidance and admission consultancy are paid services.",
    },
    {
      question: "Do you assist with scholarships and fee waivers?",
      answer: "Yes, we provide guidance on scholarships and financial aid options available for students.",
    },
    {
      question: "Can I share my review or feedback?",
      answer: "Absolutely! You can share your experience on our website or social media platforms.",
    },
    {
      question: "How can I contact you for more details?",
      answer: "You can visit our contact page or reach out to our support team directly.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index :any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">📢 Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
            <button
              className="w-full text-left font-semibold text-xl flex justify-between items-center transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-2xl">{activeIndex === index ? "➖" : "➕"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
