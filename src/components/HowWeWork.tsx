import { useEffect, useMemo, useRef, useState } from "react";

const SCROLL_SPEED = 1.0; // pixels per frame

export const HowWeWork = () => {
  const steps = [
    {
      icon: "🩺",
      title: "Diagnosis",
      description: "Our expert mechanics check your bike with smart tools for the best bike service in Hyderabad.",
    },
    {
      icon: "💰",
      title: "Estimate",
      description: "We give clear prices for your online bike service before starting work.",
    },
    {
      icon: "✅",
      title: "Approval",
      description: "Our online bike mechanic starts work only after your approval.",
    },
    {
      icon: "🛠️",
      title: "Quality Service",
      description: "Get expert bike service with genuine parts and skilled mechanics.",
    },
    {
      icon: "✅",
      title: "Final Check",
      description: "Every bike gets a full-ride check to ensure quality bike service in Hyderabad.",
    },
    {
      icon: "🚚",
      title: "Delivery",
      description: "We deliver your bike with a report and care tips after online service.",
    },
  ];

  const extendedSteps = useMemo(() => [...steps, ...steps], [steps]);

  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number>();
  const scrollPosition = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth / 2;

    const loop = () => {
      if (!isPaused) {
        scrollPosition.current += SCROLL_SPEED;
        if (scrollPosition.current >= maxScroll) {
          scrollPosition.current = 0;
        }
        track.scrollLeft = scrollPosition.current;
      }
      animationFrame.current = requestAnimationFrame(loop);
    };

    animationFrame.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [isPaused]);

  return (
    <section id="how-we-work" className="py-16 bg-gradient-to-b from-[#f3f8ff] via-[#f7faff] to-[#f3f8ff]">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">How We Work</h2>
          <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-orange-400"></div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            Book your online bike service in Hyderabad now with trusted online bike mechanics!
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f3f8ff] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f3f8ff] to-transparent"></div>

        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative flex w-full gap-6 overflow-x-hidden overflow-y-visible px-0 py-4"
        >
          {extendedSteps.map((step, index) => (
            <div
              key={`${step.title}-${index}`}
              data-step-card
              className="group relative flex w-auto min-w-fit flex-col items-center justify-between rounded-[28px] border border-transparent bg-white px-10 py-8 text-center shadow-[0_4px_12px_rgba(15,23,42,0.05)] ring-1 ring-[#e4ecff] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(59,130,246,0.15)] min-h-[230px]"
            >
              <div className="relative mb-5 flex items-center justify-center whitespace-nowrap">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#4f9cfe] to-[#1969ff] text-2xl shadow-[0_12px_25px_rgba(25,105,255,0.35)]">
                  <span className="text-2xl">{step.icon}</span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 whitespace-nowrap">{step.title}</h3>
              <p className="text-sm text-slate-500 whitespace-nowrap">{step.description}</p>

              <div className="pointer-events-none absolute inset-[-6px] -z-10 rounded-[32px] border-2 border-transparent transition duration-300 group-hover:border-[#3b82f6]/60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
