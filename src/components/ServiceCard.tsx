import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  price: string;
  features: string[];
}

export const ServiceCard = ({ icon: Icon, title, price, features }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(15,23,42,0.12)] border-t-4 border-transparent hover:border-green-border">
      <div className="p-4">
        {/* Icon */}
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Title and Disclaimer */}
        <div className="mb-3 space-y-2">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <div className="space-y-2">
            <span className="block rounded-full border border-[#ef4444] bg-[#ef4444] px-3 py-1 text-[10px] font-semibold text-white uppercase tracking-wide">
              Price varies – final quote after inspection
            </span>
          </div>
        </div>

        {/* Features List - Show only first 4 features */}
        <ul className="mb-4 space-y-1.5">
          {features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="text-primary mt-0.5">✓</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          className="w-full h-12 bg-[#0066FF] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-[3px] hover:bg-[#0050cc] hover:shadow-[0_8px_20px_rgba(0,102,255,0.25)]"
          asChild
        >
          <a
            href="https://wa.me/919533819551?text=Hi%20I%20want%20to%20get%20a%20quote%20for%20bike%20service"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Quote on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};
