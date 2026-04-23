import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'HTML5', logo: 'html5/html5-original.svg', category: 'Frontend' },
  { name: 'Node.js', logo: 'nodejs/nodejs-original.svg', category: 'Backend' },
  { name: 'MongoDB', logo: 'mongodb/mongodb-original.svg', category: 'Database' },
  { name: 'Git', logo: 'git/git-original.svg', category: 'Cloud / DevOps' },
  { name: 'Postman', logo: 'postman/postman-original.svg', category: 'Tools' },
  { name: 'CSS3', logo: 'css3/css3-original.svg', category: 'Frontend' },
  { name: 'Express.js', logo: 'express/express-original.svg', category: 'Backend' },
  { name: 'MySQL', logo: 'mysql/mysql-original.svg', category: 'Database' },
  { name: 'GitHub', logo: 'github/github-original.svg', category: 'Cloud / DevOps' },
  { name: 'Jest', logo: 'jest/jest-plain.svg', category: 'Tools' },
  { name: 'JavaScript', logo: 'javascript/javascript-original.svg', category: 'Frontend' },
  { name: 'Nest.js', logo: 'nestjs/nestjs-plain.svg', category: 'Backend' },
  { name: 'PostgreSQL', logo: 'postgresql/postgresql-original.svg', category: 'Database' },
  { name: 'GitLab', logo: 'gitlab/gitlab-original.svg', category: 'Cloud / DevOps' },
  { name: 'Mocha', logo: 'mocha/mocha-plain.svg', category: 'Tools' },
  { name: 'TypeScript', logo: 'typescript/typescript-original.svg', category: 'Frontend' },
  { name: 'GraphQL', logo: 'graphql/graphql-plain.svg', category: 'Backend' },
  { name: 'SQLite', logo: 'sqlite/sqlite-original.svg', category: 'Database' },
  { name: 'Docker', logo: 'docker/docker-original.svg', category: 'Cloud / DevOps' },
  { name: 'Cypress', logo: 'cypressio/cypressio-original.svg', category: 'Tools' },
  { name: 'React.js', logo: 'react/react-original.svg', category: 'Frontend' },
  { name: 'REST APIs', logo: 'postman/postman-original.svg', category: 'Backend' },
  { name: 'Supabase', logo: 'supabase/supabase-original.svg', category: 'Database' },
  { name: 'Kubernetes', logo: 'kubernetes/kubernetes-plain.svg', category: 'Cloud / DevOps' },
  { name: 'GitHub Actions', logo: 'github/github-original.svg', category: 'Tools' },
  { name: 'Next.js', logo: 'nextjs/nextjs-original.svg', category: 'Frontend' },
  { name: 'Firebase', logo: 'firebase/firebase-plain.svg', category: 'Backend' },
  { name: 'Firebase Firestore', logo: 'firebase/firebase-plain.svg', category: 'Database' },
  { name: 'AWS', logo: 'amazonwebservices/amazonwebservices-original.svg', category: 'Cloud / DevOps' },
  { name: 'VS Code', logo: 'vscode/vscode-original.svg', category: 'Tools' },
  { name: 'Redux', logo: 'redux/redux-original.svg', category: 'Frontend' },
  { name: 'Socket.io', logo: 'socketio/socketio-original.svg', category: 'Backend' },
  { name: 'Redis', logo: 'redis/redis-original.svg', category: 'Database' },
  { name: 'Google Cloud', logo: 'googlecloud/googlecloud-original.svg', category: 'Cloud / DevOps' },
  { name: 'Figma', logo: 'figma/figma-original.svg', category: 'Tools' },
  { name: 'Zustand', logo: 'zustand/zustand-original.svg', category: 'Frontend' },
  { name: 'Prisma ORM', logo: 'prisma/prisma-original.svg', category: 'Backend' },
  { name: 'PlanetScale', logo: 'planetscale/planetscale-original.svg', category: 'Database' },
  { name: 'Azure', logo: 'azure/azure-original.svg', category: 'Cloud / DevOps' },
  { name: 'Notion', logo: 'notion/notion-original.svg', category: 'Tools' },
  { name: 'Bootstrap', logo: 'bootstrap/bootstrap-original.svg', category: 'Frontend' },
  { name: 'tRPC', logo: 'trpc/trpc-original.svg', category: 'Backend' },
  { name: 'Vercel', logo: 'vercel/vercel-original.svg', category: 'Cloud / DevOps' },
  { name: 'Slack', logo: 'slack/slack-original.svg', category: 'Tools' },
  { name: 'Material UI', logo: 'materialui/materialui-original.svg', category: 'Frontend' },
  { name: 'Python', logo: 'python/python-original.svg', category: 'Backend' },
  { name: 'Render', logo: 'render/render-original.svg', category: 'Cloud / DevOps' },
  { name: 'Chakra UI', logo: 'chakraui/chakraui-original.svg', category: 'Frontend' },
  { name: 'FastAPI', logo: 'fastapi/fastapi-original.svg', category: 'Backend' },
  { name: 'Netlify', logo: 'netlify/netlify-original.svg', category: 'Cloud / DevOps' },
  { name: 'Vite', logo: 'vite/vite-original.svg', category: 'Frontend' },
  { name: 'Django', logo: 'django/django-plain.svg', category: 'Backend' },
  { name: 'Railway', logo: 'railway/railway-original.svg', category: 'Cloud / DevOps' },
  { name: 'Sass', logo: 'sass/sass-original.svg', category: 'Frontend' },
  { name: 'Three.js', logo: 'threejs/threejs-original.svg', category: 'Frontend' },
  { name: 'GSAP', logo: 'greensock/greensock-original.svg', category: 'Frontend' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 35,
                  ease: 'linear',
                },
              }}
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="relative flex-shrink-0 glass-card rounded-xl p-6 min-w-[200px] group hover:bg-primary/10 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.logo}`}
                        alt={skill.name}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Category Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {['Frontend', 'Backend', 'Database', 'Tools'].map((category) => (
            <div
              key={category}
              className="glass-card px-6 py-2 rounded-full text-sm font-medium text-primary border border-primary/30"
            >
              {category}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
