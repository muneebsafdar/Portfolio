import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';

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

const ProjectDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project as Project | undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl" />
          <img
            src={project.image}
            alt={project.title}
            className="relative w-full h-[400px] md:h-[500px] object-cover rounded-2xl border border-border"
          />
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {project.title}
          </h1>
          <div className="flex items-center gap-3 text-muted-foreground mb-6">
            <Calendar className="w-5 h-5" />
            <span>{project.createdDate}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/30 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {project.detailedDescription.split('. ').map((sentence, index) => (
                  <p key={index}>{sentence}.</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Repository Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={() => window.open(project.frontendRepo, '_blank')}
            className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            <Github className="mr-2 w-5 h-5" />
            Frontend Repository
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open(project.backendRepo, '_blank')}
            className="flex-1 border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
          >
            <Github className="mr-2 w-5 h-5" />
            Backend Repository
          </Button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Interested in similar projects?</p>
          <Button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            size="lg"
            variant="outline"
            className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
          >
            <ExternalLink className="mr-2 w-5 h-5" />
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
