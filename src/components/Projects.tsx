import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import university from '@/assets/university.jpg';
import formnexus from '@/assets/formnexus.png';
import movie from '@/assets/movie.png';
import library from '@/assets/library.jpeg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  detailedDescription: string;
  frontendRepo: string;
  backendRepo: string;
  createdDate: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

const projects: Project[] = [
  {
    id: 1,
    title: 'FormNexus',
    description: 'AI-powered form builder using Gemini API',
    image: formnexus,
    tech: ['Next.js', 'PostgreSQL', 'Shadcn UI', 'DaisyUI'],
    detailedDescription: `
      FormNexus is an AI-driven form builder that empowers users to create fully functional, responsive forms through natural language prompts. Using the Gemini API, users can describe what they need, and the system instantly generates dynamic and customizable forms with live previews. It also provides features to create, update, delete, and share forms effortlessly, making it a go-to solution for teams and individuals.

      The project is built using Next.js for frontend performance and scalability, PostgreSQL with Drizzle ORM for robust data management, and styled with Shadcn UI and DaisyUI for a modern and clean interface. It also incorporates authentication, role-based access, and subscription-based pricing tiers, delivering a professional SaaS experience from end to end.
    `,
    frontendRepo: 'https://github.com/muneebsafdar/Formnexus',
    backendRepo: '',
    createdDate: 'January 2025',
  },
  {
    id: 2,
    title: 'University Management System',
    description: 'End-to-end university management solution',
    image: university,
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    detailedDescription: `
      The University Management System is a full-scale MERN stack web application that centralizes all academic and administrative operations of a university. It provides separate roles for administrators, teachers, and students, allowing efficient handling of tasks such as course management, student enrollment, attendance tracking, and internal communication.

      The system focuses on usability, security, and automation, replacing manual record-keeping with a modern web-based approach. Its backend ensures secure and structured data flow through MongoDB and Express, while React offers a seamless frontend interface. This project demonstrates scalable architecture and real-world usability for large institutions.
    `,
    frontendRepo: 'https://github.com/muneebsafdar/universityFrontent',
    backendRepo: 'https://github.com/muneebsafdar/universityBackend',
    createdDate: 'June 2024',
  },
  {
    id: 3,
    title: 'Library Management System',
    description: 'Digital solution for managing library operations',
    image: library,
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    detailedDescription: `
      The Library Management System is a comprehensive digital platform designed to automate and manage library operations efficiently. It supports user and admin roles, allowing admins to manage book inventories, issue records, and user details, while users can browse, borrow, and return books easily. The real-time data updates ensure accuracy and transparency throughout the system.

      Built using the MERN stack, the application demonstrates strong backend logic, dynamic routing, and secure authentication. Its clean and intuitive UI enhances user interaction, while MongoDB ensures smooth data handling. This project showcases practical implementation of CRUD operations and database-driven user experiences.
    `,
    frontendRepo: 'https://github.com/muneebsafdar/LibraryManagementSystem',
    backendRepo: '',
    createdDate: 'August 2024',
  },
  {
    id: 4,
    title: 'Movie Showcase',
    description: 'Modern movie browsing app with infinite scroll',
    image: movie,
    tech: ['React', 'TMDB API', 'React Redux', 'TailwindCSS'],
    detailedDescription: `
      Movie Showcase is a dynamic and visually stunning movie discovery app that fetches live data from the TMDB API. Users can explore thousands of films with infinite scrolling, search functionality, and smooth animations for an engaging browsing experience. The layout is responsive and optimized for both desktop and mobile screens.

      Built entirely in React with Redux for state management, the app ensures consistent performance and efficient data flow. TailwindCSS adds a modern visual appeal with clean, flexible styling. This project demonstrates strong API integration, front-end optimization, and user-centric design principles for a rich UI experience.
    `,
    frontendRepo: 'https://github.com/muneebsafdar/MovieShowCase',
    backendRepo: '',
    createdDate: 'October 2024',
  },
];


  const handleProjectClick = (project: Project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Check out some of my latest work
          </p>
        </motion.div>

        <div className="relative">
          <div className="no-scrollbar flex overflow-x-auto gap-8 pb-8 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent snap-x snap-mandatory">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-shrink-0 w-[350px] md:w-[450px] snap-start"
              >
                <div className="card-glass rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 h-full shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.2)]">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        onClick={() => handleProjectClick(project)}
                        className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">← Scroll horizontally to see more projects →</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
