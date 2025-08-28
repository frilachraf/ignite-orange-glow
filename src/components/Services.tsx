import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Home, Building, Wrench, Shield, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Electrical",
      description: "Complete electrical services for your home including wiring, outlets, lighting, and panel upgrades.",
      features: ["Wiring & Rewiring", "Outlet Installation", "Lighting Solutions", "Panel Upgrades"]
    },
    {
      icon: Building,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for businesses, offices, and commercial properties.",
      features: ["Office Wiring", "Security Systems", "Emergency Lighting", "Maintenance Plans"]
    },
    {
      icon: Zap,
      title: "Emergency Services",
      description: "24/7 emergency electrical services to keep your power on when you need it most.",
      features: ["Power Outages", "Electrical Faults", "Safety Inspections", "Urgent Repairs"]
    },
    {
      icon: Wrench,
      title: "Electrical Repairs",
      description: "Expert diagnosis and repair of all electrical issues, from minor fixes to major repairs.",
      features: ["Fault Diagnosis", "Circuit Repairs", "Switch & Outlet Fixes", "Code Compliance"]
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property meets all safety standards.",
      features: ["Code Compliance", "Safety Audits", "Risk Assessment", "Certification"]
    },
    {
      icon: Clock,
      title: "Maintenance Plans",
      description: "Preventive maintenance programs to keep your electrical systems running smoothly year-round.",
      features: ["Regular Inspections", "Preventive Care", "Priority Service", "Cost Savings"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-primary">Electrical</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential to commercial, emergency to maintenance - we provide comprehensive 
            electrical solutions with the highest standards of safety and quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 gradient-card border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary group-hover:glow-primary transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:variant-hero transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every electrical project is unique. Contact our experts for a personalized consultation 
              and custom electrical solutions tailored to your specific needs.
            </p>
            <Button variant="hero" size="lg">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;