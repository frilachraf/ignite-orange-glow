import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="lg:w-[90vw] mx-auto mb-6">
        <Services />
        <About />
        <Contact />

      </div>
      
        <Footer />
    </div>
  );
};

export default Index;
