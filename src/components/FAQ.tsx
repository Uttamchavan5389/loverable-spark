import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide comprehensive bike services including bike general services and repairs, electrical repairs, body work, and engine services. Our skilled technicians handle everything from oil changes to complete engine overhauls.",
  },
  {
    question: "Can I get only a specific repair instead of full service?",
    answer:
      "Yes, you can get individual repairs like oil change, brake repair, clutch work, chain service, tyre fitting, or suspension repair without taking a full service package.",
  },
  {
    question: "Do you use genuine parts?",
    answer:
      "Yes, we use only genuine and high-quality parts for all repairs and services. We source parts directly from authorized dealers to ensure reliability and performance.",
  },
  {
    question: "Do you offer pickup & drop service?",
    answer:
      "Yes, we provide pickup and drop within 5 km, and a small extra charge applies beyond that. Just call or WhatsApp us to schedule your preferred time",
  },
  {
    question: "How long does a typical service take?",
    answer:
      "Service duration depends on the type of service required. A general service typically takes 2-3 hours, while major repairs may take 1-2 days. We always provide time estimates before starting work.",
  },
  {
    question: "Do you service all bikes & scooters?",
    answer:
      "Yes, we service all major brands including Hero, Honda, TVS, Bajaj, Yamaha, RE, KTM, and EV bikes, along with all gearless scooters.",
  },
  {
    question: "Can you restore old or new bikes?",
    answer:
      "Yes, we restore very old bikes as well as new model bikes, backed by over 40+ years of mechanical experience. Share your bike details and we'll give you a proper restoration or repair estimate.",
  },
  {
    question: "What payment methods do you accept? Are there any hidden charges?",
    answer:
      "We accept Cash, UPI (PhonePe, Google Pay, Paytm), and Bank Transfer. All pricing is 100% transparent, and you will always receive a detailed invoice with no hidden charges at all.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          {/* Orange accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border-0 px-6 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-[#1e40af] hover:no-underline py-4 text-base sm:text-lg [&>svg]:text-[#1e40af]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed pb-4 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

