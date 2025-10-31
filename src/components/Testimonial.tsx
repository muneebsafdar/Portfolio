import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import zain from '@/assets/zain client.jpg'
import c1 from '@/assets/client.jpg'
import huzaifa from '@/assets/huzaifaclient.jpg'
import c2 from '@/assets/client (2).jpg'

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Zain Ijaz',
    role: 'E-commerce Entrepreneur',
    message:
      'Muneeb built our e-commerce platform from the ground up with exceptional precision. The design, speed, and user experience have helped boost our online sales significantly.',
    avatar: zain,
  },
  {
    id: 2,
    name: 'Safeer Shah',
    role: 'Startup Founder',
    message:
      'Collaborating with Muneeb was one of the best decisions for our startup. He understood our requirements perfectly and delivered a scalable, high-performance web platform.',
    avatar: c1,
  },
  {
    id: 3,
    name: 'Huzaifa Aslam',
    role: 'Dairy Exporter',
    message:
      'Muneeb turned our basic concept into a professional, modern website that’s helping us connect with international clients. His dedication and communication were impressive.',
    avatar: huzaifa,
  },
  {
    id: 4,
    name: 'Asif Ali',
    role: 'Textile Manager',
    message:
      'Muneeb created a visually stunning and responsive website for our textile business. His creative approach and technical expertise truly set him apart.',
    avatar: c2,
  },
];


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-muted-foreground text-lg">
            What people say about my work
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl p-8 md:p-12 border border-border shadow-xl"
          >
            <Quote className="w-12 h-12 text-primary mb-6" />
            
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              "{testimonials[currentIndex].message}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h4 className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
