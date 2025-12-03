import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  price: string;
  features: string[];
  description?: string;
}

export const ServiceCard = ({ icon: Icon, title, price, features, description }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-2 hover:shadow-xl border-t-4 border-green-border">
      <div className="p-6">
        {/* Icon */}
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <Icon className="h-7 w-7 text-primary" />
        </div>

        {/* Title and Price Badge */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <span className="inline-block rounded-full bg-red-500 px-4 py-1 text-sm font-bold text-white">
            {price}
          </span>
          {description && (
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {/* Features List */}
        <ul className="mb-6 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg" asChild>
          <a href="#contact">BOOK NOW</a>
        </Button>
      </div>
    </div>
  );
};
