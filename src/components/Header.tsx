import { Button } from "@/components/ui/button";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, Zap } from "lucide-react";

const Header = () => {

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary rounded-lg glow-primary">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ElectricPro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Drawer */}
          <Drawer>
            <DrawerTrigger asChild>
              <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="flex items-center space-x-2">
                  <div className="p-2 bg-primary rounded-lg glow-primary">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold">ElectricPro</span>
                </DrawerTitle>
              </DrawerHeader>
              <div className="px-4 pb-6">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <DrawerClose key={item.name} asChild>
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-3 text-left border-b border-border/50 last:border-b-0"
                      >
                        {item.name}
                      </a>
                    </DrawerClose>
                  ))}
                  <DrawerClose asChild>
                    <Button variant="hero" className="mt-4 w-full">
                      Get Quote
                    </Button>
                  </DrawerClose>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;