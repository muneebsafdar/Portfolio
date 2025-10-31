import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Users, Trophy } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: Trophy,
      number: '15+',
      label: 'Projects Completed',
      description: 'Successfully delivered web applications',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Code,
      number: '3+',
      label: 'Years Experience',
      description: 'Professional software development',
      color: 'from-primary to-secondary',
    },
    {
      icon: Users,
      number: '10+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      number: '5+',
      label: 'Certifications',
      description: 'Industry-recognized credentials',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      year: '2023',
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2023',
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Udemy',
      year: '2024',
    },
    {
      title: 'Node.js Application Development',
      issuer: 'LinkedIn Learning',
      year: '2024',
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements & Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                <achievement.icon className="w-12 h-12 mb-4 text-primary" />
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
