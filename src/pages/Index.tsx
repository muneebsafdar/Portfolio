import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonial';
import ServicesSection from '@/components/ServicesSection';

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <ServicesSection/>
      {/* <Achievements /> */}
      <Testimonials/>
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
