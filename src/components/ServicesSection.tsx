import { motion } from "framer-motion";
import webdev from '@/assets/web-developemt.jpg'
import appdev from '@/assets/mobile app.jpg'
import wordpress from '@/assets/wordpress.jpg'
import automation from '@/assets/automation.webp'
import cloud from '@/assets/cloud.webp'
import { Button } from "./ui/button";

const ServicesSection = () => {
  const services = [
    {
      image: webdev,
      title: "Web Application Development",
      description:
        "I build modern, high-performance, and responsive web applications using cutting-edge technologies like React, Next.js, and Node.js — optimized for both speed and scalability.",
    },
    {
      image: wordpress,
      title: "WordPress Solutions",
      description:
        "From custom themes to advanced plugins, I craft tailored WordPress experiences that align perfectly with business goals — fast, secure, and SEO-friendly.",
    },
    {
      image: automation,
      title: "Automation & Integrations",
      description:
        "I streamline workflows using APIs, bots, and automation tools — reducing manual effort and boosting productivity across web, business, and cloud systems.",
    },
    {
      image: appdev,
      title: "Mobile App Development",
      description:
        "I design and develop sleek, cross-platform mobile applications that deliver smooth user experiences, built with React Native and modern mobile UI frameworks.",
    },
    {
      image: cloud,
      title: "Cloud Infrastructure & DevOps",
      description:
        "From CI/CD pipelines to containerized deployment, I set up secure, scalable cloud architectures on AWS, Vercel, and Render — ensuring seamless delivery.",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What I Offer
          </h2>
          <p className="text-muted-foreground text-lg">
            Services to bring your ideas to life
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer group backdrop-blur-md"
            >
              {/* Image */}
              <div className="w-full h-40 rounded-xl overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-xl leading-relaxed">
                {service.description}
              </p>

              <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-5 transition-opacity"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Discuss Your Project
          </Button>
        </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
