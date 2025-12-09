import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Service Request Received!",
        description: "We'll contact you shortly to confirm your booking.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-full w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact us
          </h2>
          {/* Orange accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Visit, call, or WhatsApp us we're here to help.
          </p>
        </div>

        {/* Additional Info - Before You Visit */}
        <div className="bg-muted/30 rounded-lg p-6 md:p-8 mb-12 max-w-[1160px] mx-auto w-full overflow-hidden">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">
            Before You Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <h4 className="font-semibold text-foreground mb-2">Easy to Find</h4>
              <p className="text-sm text-muted-foreground">
                Located opposite Hara Darwaza in Karwan - easy landmark for directions
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏍️</div>
              <h4 className="font-semibold text-foreground mb-2">Drop & Go</h4>
              <p className="text-sm text-muted-foreground">
                Drop your bike in the morning, pick it up in the evening - or use our pickup service
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-semibold text-foreground mb-2">Free Inspection</h4>
              <p className="text-sm text-muted-foreground">
                Bring your bike for a free check-up and consultation anytime
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
          {/* Contact Info */}
          <div className="space-y-6 w-full min-w-0">
            <Card className="w-full max-w-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 min-w-0">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">Phone & WhatsApp</p>
                    <a href="tel:+919533819551" className="text-sm text-muted-foreground hover:text-primary block break-words">
                      +91 95338 19551
                    </a>
                    <a 
                      href="https://wa.me/919533819551?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20bike%20service." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline block mt-1"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 min-w-0">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Alternative Number</p>
                    <a href="tel:+917097797743" className="text-sm text-muted-foreground hover:text-primary block break-words">
                      +91 70977 97743
                    </a>
                    <a 
                      href="https://wa.me/917097797743?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20bike%20service." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline block mt-1"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 min-w-0">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Email</p>
                    <a href="mailto:sreerambikemechanic@gmail.com" className="text-sm text-muted-foreground hover:text-primary break-all block">
                    info@hyderabadbikemechanic.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 min-w-0">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground break-words">
                      Sattanna Galli, Opp. Hara Darwaza, Karwan, Hyderabad Telangana – 500006
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 min-w-0">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Working Hours</p>
                    <p className="text-sm text-muted-foreground break-words">
                      Mon - Sat : 10:00 AM - 9:00 PM <br />
                      | Sunday Optional
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Find Us - Google Maps */}
          <div className="lg:col-span-2 w-full min-w-0">
            <Card className="w-full max-w-full overflow-hidden">
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0 w-full max-w-full overflow-hidden">
                {/* Google Maps Embed */}
                <div className="w-full max-w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1132.0710425299987!2d78.45380465825812!3d17.372492112528807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb979b8e8fd399%3A0x55835c13d0000000!2sNear%20Baradi%20Bhavan%2C%2013-5-644%2F1%2C%20Sattanna%20Galli%2C%20opp.%20hara%20Darwaze%2C%20Puranapool%2C%20Asifnagar%2C%20Telangana%20500006!3m2!1d17.3726809!2d78.4534572!5e0!3m2!1sen!2sin!4v1764837657964!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0, maxWidth: '100%', display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                    className="rounded-lg w-full max-w-full"
                  />
                </div>
                {/* Get Directions Button */}
                <div className="p-6 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full hero-gradient text-white"
                  >
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Near+Baradi+Bhavan,+13-5-644%2F1,+Sattanna+Galli,+opp.+hara+Darwaze,+Puranapool,+Asifnagar,+Telangana+500006"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions on Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Section */}
        {/* Mobile/tablet: extra top & bottom padding, 24px side padding; desktop: keep original padding */}
        <div className="bg-muted/30 rounded-lg pt-10 pb-12 px-6 md:p-16 mb-[30px] md:mb-12 max-w-6xl mx-auto mt-12 w-full max-w-full overflow-hidden">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">
            Quick Contact
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Prefer to talk directly */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Prefer to talk directly?</h3>
              <p className="text-sm text-muted-foreground">
                Call or send a WhatsApp message we're here to help with any bike service or repair questions
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border"></div>

            {/* Need Pickup Service */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Need Pickup Service?</h3>
              {/* Extra spacing between paragraph and buttons */}
              <p className="text-sm text-muted-foreground mb-14">
                We provide pickup and drop within 3 km, and a small extra charge applies beyond that. Just call or WhatsApp us to schedule your preferred time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="hero-gradient text-white"
                >
                  <a href="tel:+919533819551">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <a
                    href="https://wa.me/919533819551?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20bike%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
