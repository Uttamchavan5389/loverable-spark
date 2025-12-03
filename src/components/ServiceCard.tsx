import { LucideIcon, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  price: string;
  features: string[];
  image?: string;
}

export const ServiceCard = ({ icon: Icon, title, price, features, image }: ServiceCardProps) => {
  return (
    <div 
      className="w-full md:w-[330px] flex-shrink-0 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-2xl bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_35px_rgba(15,23,42,0.12)] border-t-4 border-transparent hover:border-green-border"
    >
      {image && (
        <div className="h-48 overflow-hidden rounded-t-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-4">
        {/* Icon */}
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Title and Price Badge */}
        <div className="mb-3 space-y-2">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <div className="space-y-2">
            <span className="block rounded-full border border-[#ef4444] bg-[#ef4444] px-3 py-1 text-[10px] font-semibold text-white uppercase tracking-wide">
              PRICE VARIES - FINAL QUOTE AFTER INSPECTION
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

        {/* Learn More Link - Centered */}
        <div className="flex justify-center pb-[15px]">
          <Link 
            to="/services"
            className="text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-all"
          >
            Learn More 
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
