import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "(555) 123-4567",
      subtitle: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@electricpro.com",
      subtitle: "Quick Response Guaranteed"
    },
    {
      icon: MapPin,
      title: "Service Area",
      info: "Greater Metro Area",
      subtitle: "50+ Mile Radius"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 7AM-6PM",
      subtitle: "Emergency: 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get Your <span className="text-primary">Free Quote</span> Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to power up your project? Contact our expert electricians for a free consultation 
            and personalized estimate for your electrical needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="gradient-card border-0 shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Request Free Estimate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Service Type</label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>Select a service</option>
                  <option>Residential Electrical</option>
                  <option>Commercial Electrical</option>
                  <option>Emergency Service</option>
                  <option>Electrical Repairs</option>
                  <option>Safety Inspection</option>
                  <option>Maintenance Plan</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea 
                  placeholder="Please describe your electrical project or issue..."
                  className="min-h-32"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Get Free Estimate
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll respond within 2 hours during business hours
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {/* Emergency CTA */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-elevated glow-primary">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Electrical Emergency?</h3>
                <p className="mb-6 opacity-90">
                  Don't wait! Our certified electricians are available 24/7 for emergency electrical services.
                </p>
                <Button variant="heroOutline" size="lg" className="font-bold">
                  Call Emergency Line: (555) 911-ELEC
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-foreground font-medium">{item.info}</p>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Service Guarantee */}
            <Card className="bg-accent/50 border border-primary/20 shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-muted-foreground text-sm">
                  We stand behind our work with a comprehensive satisfaction guarantee. 
                  If you're not completely satisfied, we'll make it right.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;