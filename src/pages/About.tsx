import { useEffect, useMemo, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, ShieldCheck, Users, User } from "lucide-react";
import { getAssetsFromFolderWithMetadata } from "@/utils/getAssetsFromFolder";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const About = () => {
  const galleryPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Automatically fetch all images from about folder
  const aboutImages = useMemo(() => {
    const imagesWithMetadata = getAssetsFromFolderWithMetadata('about');
    
    // Find specific images by filename
    const workshopImage = imagesWithMetadata.find(img => 
      img.filename.toLowerCase().includes('workshop')
    );
    const founderImage = imagesWithMetadata.find(img => 
      img.filename.toLowerCase().includes('founder')
    );
    
    // Get other images for gallery/memories (exclude workshop and founder)
    const galleryImages = imagesWithMetadata.filter(img => 
      !img.filename.toLowerCase().includes('workshop') && 
      !img.filename.toLowerCase().includes('founder')
    );

    return {
      workshop: workshopImage?.image || null,
      founder: founderImage?.image || null,
      gallery: galleryImages.map(img => img.image),
    };
  }, []);

  const values = [
    {
      icon: Users,
      title: "Local & Trusted",
      desc: "Serving the Karwan community for over 40 years with dedication.",
    },
    {
      icon: ShieldCheck,
      title: "Genuine Parts",
      desc: "Only OEM and trusted aftermarket parts with full transparency.",
    },
    {
      icon: Heart,
      title: "Customer First",
      desc: "We treat every bike as if it were our own family member.",
    },
    {
      icon: Award,
      title: "Expert Service",
      desc: "40+ years of hands-on experience in bike maintenance and repair.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppFloat />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[hsl(20,100%,92%)] via-[hsl(210,30%,97%)] to-[hsl(211,100%,96%)] py-16 md:py-24 overflow-hidden">
          {/* Floating animated tools */}
          <div className="absolute top-10 right-10 md:top-20 md:right-20 text-6xl md:text-8xl opacity-40 animate-float-mechanic pointer-events-none">
            🔧
          </div>
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 text-6xl md:text-8xl opacity-30 animate-float-mechanic pointer-events-none" style={{ animationDelay: '1s' }}>
            ⚙️
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Us</h1>
              <p className="text-xl text-primary font-semibold mb-4">
                From Sree Ram Bike Mechanic to HyderabadBikeMechanic
              </p>
              <p className="text-lg text-muted-foreground">
                Trusted local workshop since 1990, founded by Mr. Ram Chavan
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Founded in 1990 by <strong className="text-foreground">Mr. Ram Chavan</strong>, 
                    a master mechanic with 40+ years of hands-on experience, our workshop has been 
                    a cornerstone of the Karwan community.
                  </p>
                  <p>
                    We started as <strong className="text-foreground">Sree Ram Bike Mechanic</strong> 
                    {" "}with a simple mission: to provide honest, reliable, and expert bike servicing 
                    to our neighbors in Hyderabad.
                  </p>
                  <p>
                    Now continuing the legacy under the name{" "}
                    <strong className="text-foreground">HyderabadBikeMechanic</strong>, we remain 
                    committed to the same values that made us trusted by thousands of riders.
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                    <p className="text-foreground italic font-semibold text-xl">
                      "Do every job as if the bike were your own."
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">— Mr. Ram Chavan, Founder</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                {aboutImages.workshop ? (
                  <div className="rounded-lg shadow-xl w-full aspect-[4/3] overflow-hidden">
                    <img 
                      src={aboutImages.workshop} 
                      alt="Bike mechanic workshop in Karwan Hyderabad" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="rounded-lg shadow-xl w-full bg-muted/50 aspect-[4/3] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Users className="h-24 w-24 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Workshop Image</p>
                    </div>
                  </div>
                )}
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
                  <div className="text-4xl font-bold">40+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Meet Our Founder
              </h2>
              <Card className="card-hover shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {aboutImages.founder ? (
                        <img 
                          src={aboutImages.founder} 
                          alt="Mr. Ram Chavan, Founder of Hyderabad Bike Mechanic" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-16 w-16 text-primary" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Mr. Ram Chavan</h3>
                    <p className="text-primary font-semibold mb-4">Founder & Head Mechanic</p>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    With over 40 years of experience in two-wheeler maintenance and repair, 
                    Mr. Ram Chavan is an expert in engine tuning, rebuilds, and performance 
                    optimization. His passion for bikes and commitment to quality service has 
                    made HyderabadBikeMechanic a trusted name in the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Riders Trust Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built on decades of trust, transparency, and exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="card-hover text-center shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative bg-gradient-to-br from-[hsl(20,100%,92%)] via-[hsl(210,30%,97%)] to-[hsl(211,100%,96%)] py-16 overflow-hidden">
          {/* Floating animated tools */}
          <div className="absolute top-10 right-10 md:top-20 md:right-20 text-6xl md:text-8xl opacity-40 animate-float-mechanic pointer-events-none">
            🔧
          </div>
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 text-6xl md:text-8xl opacity-30 animate-float-mechanic pointer-events-none" style={{ animationDelay: '1s' }}>
            ⚙️
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">40+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-muted-foreground">Bikes Serviced</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Memories/Gallery Section */}
        {aboutImages.gallery.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Our Memories
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Moments from our workshop and journey
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <Carousel
                  plugins={[galleryPlugin.current]}
                  className="w-full"
                  opts={{
                    loop: true,
                    align: "start",
                  }}
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {aboutImages.gallery.map((image, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                          <img 
                            src={image} 
                            alt="Bike service memories and customer satisfaction at Hyderabad Bike Mechanic"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </section>
        )}

        {/* Location Note */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Visit Our Workshop
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Sattanna Galli, Opp. Hara Darwaza, Karwan, Hyderabad – 500006
            </p>
            <p className="text-muted-foreground">
              <strong>Opening Hours:</strong> Mon - Sat : 10:00 AM - 9:00 PM | Sunday Optional
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

