export const HowWeWork = () => {
  const steps = [
    {
      number: 1,
      title: "Diagnosis",
      description: "Our expert mechanics check your bike with smart tools for the best bike service in Hyderabad.",
    },
    {
      number: 2,
      title: "Estimate",
      description: "We give clear prices for your online bike service before starting work.",
    },
    {
      number: 3,
      title: "Approval",
      description: "Our online bike mechanic starts work only after your approval.",
    },
    {
      number: 4,
      title: "Quality Service",
      description: "Get expert bike service with genuine parts and skilled mechanics.",
    },
    {
      number: 5,
      title: "Final Check",
      description: "Every bike gets a full-ride check to ensure quality bike service in Hyderabad.",
    },
  ];

  return (
    <section id="how-we-work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Book your online bike service in Hyderabad now with trusted online bike mechanics!
          </p>
        </div>

        {/* Desktop: Horizontal */}
        <div className="hidden md:flex justify-between items-start gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center flex-1">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-full w-full h-1 bg-primary/30"></div>
                )}
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">{step.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical */}
        <div className="md:hidden space-y-6 max-w-md mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
