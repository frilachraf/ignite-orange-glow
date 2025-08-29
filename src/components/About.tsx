import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "Fully licensed electricians with industry certifications and ongoing training."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with 10+ years in residential and commercial electrical work."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock emergency services because electrical problems don't wait."
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind and property protection."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">ElectricPro</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience serving residential and commercial clients, 
              ElectricPro has built a reputation for reliability, quality, and exceptional customer service. 
              We're not just electricians – we're your electrical solutions partners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <Card className="text-center p-6 gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Emergency Support</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>

            {/* Testimonial Card */}
            <Card className="col-span-2 p-6 bg-primary/5 border border-primary/20 shadow-card">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                  <p className="text-muted-foreground italic mb-4">
                    "ElectricPro transformed our office lighting system. Professional, efficient, 
                    and the results exceeded our expectations. Highly recommended!"
                  </p>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Business Owner</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;