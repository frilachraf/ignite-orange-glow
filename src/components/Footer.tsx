import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Residential Electrical",
    "Commercial Electrical", 
    "Emergency Services",
    "Electrical Repairs",
    "Safety Inspections",
    "Maintenance Plans"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-background p-6 rounded-3xl w-[90vw] mx-auto">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-primary rounded-lg glow-primary">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">ElectricPro</span>
            </div>
            
            <p className="text-background/80 mb-6 max-w-md">
              Your trusted electrical services partner for over 10 years. 
              Providing safe, reliable, and efficient electrical solutions 
              for residential and commercial properties.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@electricpro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Greater Metro Area</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-background/80 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              <li><a href="#home" className="text-background/80 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>

            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-background/10 rounded-lg hover:bg-primary hover:glow-primary transition-all duration-300"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} ElectricPro. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">License Info</a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-background/20">
            <p className="text-background/60 text-sm">
              Licensed Electrical Contractor | Fully Insured | 24/7 Emergency Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;