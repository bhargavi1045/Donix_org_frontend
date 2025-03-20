import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "Who can become an organ donor?", answer: "Anyone who meets the medical criteria can become an organ donor." },
  { question: "Is there a cost for organ donation?", answer: "No, organ donation is completely free for donors and their families." },
  { question: "How does living organ donation work?", answer: "Living organ donation allows a living person to donate an organ to someone in need." },
  { question: "What kind of legal documents are required?", answer: "Typically, a signed consent form and identification documents are required." },
  { question: "What organs can be donated and is it safe?", answer: "Organs like kidneys, liver, and lungs can be donated safely with medical supervision." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white px-4 sm:px-6 py-8 sm:py-12 space-y-6 sm:space-y-0 sm:space-x-8">
      
      <div className="w-full sm:w-1/3 flex justify-center">
        <img 
          src="../../../faqIcon.svg" 
          alt="FAQ Icon" 
          className="w-32 sm:w-48 md:w-64 lg:w-72 object-contain"
        />
      </div>

      <div className="w-full sm:w-2/3 max-w-2xl p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-xl min-h-[400px] flex flex-col">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b pb-4 p-3 sm:p-4 rounded-lg shadow-sm bg-gray-50 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-amber-50"
            >
        
              <button
                className="w-full flex justify-between items-center py-2 text-left text-sm sm:text-lg md:text-xl break-words"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>

            
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-red-400 text-white">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

        
              {openIndex === index && (
                <p className="mt-3 text-gray-800 text-sm sm:text-base md:text-lg transition-all duration-300 break-words">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
