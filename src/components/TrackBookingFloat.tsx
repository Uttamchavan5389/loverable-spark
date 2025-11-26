import { MapPin } from "lucide-react";

export const TrackBookingFloat = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-28 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-track-blue text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl md:bottom-24"
      aria-label="Track Booking"
    >
      <div className="flex flex-col items-center">
        <MapPin className="h-6 w-6" />
        <span className="text-[10px] font-medium">Track</span>
      </div>
    </a>
  );
};
