import { useRef, useState } from "react";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Sowmya Reddy",
    time: "1 month ago",
    text: "Long story short, my scooty’s battery died in the middle of the road. I googled nearby mechanic shops and called Sree Ram Bike Mechanic. They quickly reached the location, charged the battery and got me moving again. Super happy with the service.",
  },
  {
    name: "Papu Bhattacharya",
    time: "6 months ago",
    text: "I recently visited Sree Ram Bike Mechanic and couldn’t be more impressed. Sree Ram is highly skilled and knowledgeable, quickly diagnosing and fixing issues even others couldn’t identify. Pricing is very reasonable and the work quality is excellent. He’s honest, reliable and makes sure your bike runs smoothly without overcharging. Highly recommended.",
  },
  {
    name: "Sohag Roy",
    time: "6 months ago",
    text: "Great service and very experienced mechanics. They diagnosed my bike issues quickly and fixed them at a reasonable price. The work was clean and professional. Highly recommend for anyone looking for a trusted mechanic with superb knowledge.",
  },
  {
    name: "Srihari Gaddam",
    time: "1 month ago",
    text: "Good mechanic, expert in the work. My bike feels much better after service.",
  },
  {
    name: "Ali Mohd",
    time: "1 year ago",
    text: "Fantastic service and fixed a problem other mechanics couldn’t resolve. He gives first priority to customers, works quickly and is very friendly and helpful. I asked many people but no one like him in professionalism. Highly recommended.",
  },
  {
    name: "Arshewar Tarun",
    time: "4 months ago",
    text: "Great service. Very passionate about the work and takes real care of the bike.",
  },
  {
    name: "Altaf Baig",
    time: "9 months ago",
    text: "Fast service, good work and strong knowledge about bike problems with affordable pricing. 👍",
  },
  {
    name: "Pankaj Yadav",
    time: "6 months ago",
    text: "Fast service and good work. Very good knowledge about solving bike problems.",
  },
  {
    name: "Rakesh Singh",
    time: "2 years ago",
    text: "Very good mechanic in our area. I gave my Shine with many issues and now it runs very smooth. Highly satisfied.",
  },
  {
    name: "Koshika Murali",
    time: "2 years ago",
    text: "Work is unbelievable – he’s an awesome mechanic. Really impressed with the quality of work.",
  },
  {
    name: "J4meel1365",
    time: "3 years ago",
    text: "This mechanic has lots of experience in the work. I gave my bike in very bad condition but he made huge improvements and now it feels like a new bike. Unbelievably good mechanic – I always go to him now.",
  },
  {
    name: "Shirse Swathi",
    time: "3 years ago",
    text: "Very good mechanic in our area. This mechanic does excellent work.",
  },
  {
    name: "Shaik Arif",
    time: "6 months ago",
    text: "Best mechanic. Very satisfied with the service.",
  },
  {
    name: "Chadergat Renuka",
    time: "1 year ago",
    text: "Good excellent mechanic. My bike runs very smoothly after the service.",
  },
  {
    name: "Sarvagya Patmase",
    time: "2 years ago",
    text: "Response is very good from the mechanic. Always helpful and quick.",
  },
  {
    name: "Kishore Kovil",
    time: "2 weeks ago",
    text: "Excellent work. Very recent service and I am happy with the result.",
  },
  {
    name: "Lakhan Raj",
    time: "4 months ago",
    text: "Great mechanic and great service. I strongly recommend him.",
  },
  {
    name: "Nagesh Tirumal",
    time: "4 months ago",
    text: "Excellent service. Very professional and also shared helpful photos of the work.",
  },
  {
    name: "Rithik Yadav",
    time: "4 months ago",
    text: "Very good mechanic. Service quality is excellent and I am fully satisfied.",
  },
];

type Review = {
  name: string;
  time: string;
  text: string;
};

const ReviewCard = ({ review }: { review: Review }) => {
  const [expanded, setExpanded] = useState(false);
  // Lower threshold to catch more long reviews - approximately 4 lines of text
  const isLong = review.text.length > 150;

  return (
    <div className={`group relative rounded-2xl border border-transparent bg-white p-4 sm:p-6 flex flex-col shadow-[0_6px_20px_rgba(15,23,42,0.05)] ring-1 ring-[#e4ecff] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] ${
      isLong ? (expanded ? "h-auto" : "h-[260px]") : "h-[260px]"
    }`}>
      <div className="flex items-center gap-3 mb-3">
        {/* Avatar with gradient background */}
        {/* Avatar kept perfectly circular on all devices */}
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#9333EA] flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base shadow-sm border-2 border-white ring-2 ring-[#e5e7eb]">
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div>
          {/* Name - larger and bolder for better hierarchy */}
          <div className="text-base sm:text-lg font-semibold text-foreground">
            {review.name}
          </div>
          {/* Time - smaller and lighter */}
          <div className="text-[0.75rem] sm:text-xs text-[#9ca3af]">
            {review.time}
          </div>
        </div>
      </div>

      {/* Stars with richer gold and subtle shadow */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFC107] fill-[#FFC107] drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
          />
        ))}
      </div>

      {/* Review text with improved line spacing and color */}
      <div className="flex-1 overflow-hidden">
        <p
          className={`text-sm sm:text-base text-[#4b5563] leading-relaxed ${
            isLong && !expanded ? "line-clamp-4" : ""
          }`}
        >
          {review.text}
        </p>
      </div>

      {/* Read more / less toggle for long reviews */}
      {isLong && (
        <button
          type="button"
          className="mt-4 text-xs font-semibold text-primary hover:underline self-center"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      {/* Hover border outline kept fully inside card so it isn't clipped by the carousel viewport */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl border-2 border-transparent transition duration-300 group-hover:border-[#3b82f6]/60"></div>
    </div>
  );
};

export const Testimonials = () => {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  );

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-[#f3f8ff] via-[#f7faff] to-[#f3f8ff]"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          {/* Orange accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Read what our satisfied customers have to say about their experience{" "}
            <span className="font-semibold">Sree Ram Bike Mechanic.</span>
          </p>
        </div>

        {/* Rating summary */}
        <div className="max-w-4xl mx-auto mb-8 rounded-2xl border border-gray-200 bg-white shadow-sm px-6 py-4">
          {/* Mobile layout (< md): logo + stars + 4.9 on first line, text + Reviews link on second line */}
          <div className="flex flex-col items-center gap-2 md:hidden">
            {/* First line: Google Logo + Stars + 4.9 */}
            <div className="flex items-center gap-3">
              <img
                src="https://iconape.com/wp-content/files/ur/370111/svg/google-logo-icon-png-svg.png"
                alt="Google logo"
                className="h-[26px] w-[70px] object-contain"
              />
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.9</span>
              </div>
            </div>
            {/* Second line: Excellent Based on Google Reviews (with Reviews as bold link) */}
            <div className="text-xs text-gray-600 text-center">
              Excellent Based on Google{" "}
              <a
                href="https://www.google.com/search?g2lbs=AL1YbfVu5hf2eB0UoN_w6jMYp7e5a3sBp6Z2A2Bm53NYdxaRT5g6VYue9iG3_p-lZXksAW-cGKr4_IIhVb3pfE-mlqxHas4z2mRCgbVhiwxnU0fYeetkMA93gQ4wFaFBeYmJRCZAdrq6&hl=en-IN&gl=in&cs=1&ssta=1&scp=ChtnY2lkOm1vdG9yY3ljbGVfcmVwYWlyX3Nob3ASYxISCZnTj46bl8s7EQAAANATXINVIjVTcmVlIFJhbSBCaWtlIE1lY2hhbmljLCBKYWxpIEhhbnVtYW4gUm9hZCwgUHVyYW5hcG9vbCoUDW4ZWwoV7yTELh1uGVsKJe8kxC4wABoWc3JlZSBSYW0gYmlrZSBtZWNoYW5pYyIWc3JlZSBSYW0gYmlrZSBtZWNoYW5pYyoXVHdvIFdoZWVsZXIgUmVwYWlyIFNob3A%3D&spp=Cg0vZy8xMXA2c243ZzRzOmRXaWdRQUJBQkVBSVFBeGdBR0FFWUFoZ0RJaFp6Y21WbElISmhiU0JpYVd0bElHMWxZMmhoYm1samtnRVdiVzkwYjNKamVXTnNaVjl5WlhCaGFYSmZjMmh2Y0pvQkFLb0JBQT09&src=2&q=Sree+Ram+Bike+Mechanic+Hyderabad,+Telangana&origin=https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline text-[13px]"
              >
                Reviews
              </a>
            </div>
          </div>

          {/* Desktop / tablet layout (≥ md) - row with link */}
          <div className="hidden md:flex md:flex-row md:items-center md:justify-between gap-4">
            {/* Left: Google logo + rating */}
            <div className="flex items-center gap-4">
              <img
                src="https://iconape.com/wp-content/files/ur/370111/svg/google-logo-icon-png-svg.png"
                alt="Google logo"
                className="h-[30px] w-[80px] object-contain"
              />
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.9</span>
                <span className="text-muted-foreground">(Excellent)</span>
              </div>
            </div>

            {/* Right: reviews link to Google */}
            <div className="text-xs sm:text-sm text-gray-500">
              Based On Google{" "}
              <a
                href="https://www.google.com/search?g2lbs=AL1YbfVu5hf2eB0UoN_w6jMYp7e5a3sBp6Z2A2Bm53NYdxaRT5g6VYue9iG3_p-lZXksAW-cGKr4_IIhVb3pfE-mlqxHas4z2mRCgbVhiwxnU0fYeetkMA93gQ4wFaFBeYmJRCZAdrq6&hl=en-IN&gl=in&cs=1&ssta=1&scp=ChtnY2lkOm1vdG9yY3ljbGVfcmVwYWlyX3Nob3ASYxISCZnTj46bl8s7EQAAANATXINVIjVTcmVlIFJhbSBCaWtlIE1lY2hhbmljLCBKYWxpIEhhbnVtYW4gUm9hZCwgUHVyYW5hcG9vbCoUDW4ZWwoV7yTELh1uGVsKJe8kxC4wABoWc3JlZSBSYW0gYmlrZSBtZWNoYW5pYyIWc3JlZSBSYW0gYmlrZSBtZWNoYW5pYyoXVHdvIFdoZWVsZXIgUmVwYWlyIFNob3A%3D&spp=Cg0vZy8xMXA2c243ZzRzOmRXaWdRQUJBQkVBSVFBeGdBR0FFWUFoZ0RJaFp6Y21WbElISmhiU0JpYVd0bElHMWxZMmhoYm1samtnRVdiVzkwYjNKamVXTnNaVjl5WlhCaGFYSmZjMmh2Y0pvQkFLb0JBQT09&src=2&q=Sree+Ram+Bike+Mechanic+Hyderabad,+Telangana&origin=https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Review
              </a>
            </div>
          </div>
        </div>

        {/* Review cards - auto sliding carousel */}
        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="max-w-6xl mx-auto relative"
        >
          {/* ml-0 px-4 ensure cards are fully visible on left/right, even with hover outline */}
          <CarouselContent className="py-4 ml-0 px-4">
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows visible on md+ similar to reference image */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};


