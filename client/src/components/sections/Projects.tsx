import { motion } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and Node.js",
    image: "https://placehold.co/600x400",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with real-time updates",
    image: "https://placehold.co/600x400",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    demoUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description: "A responsive dashboard with data visualization",
    image: "https://placehold.co/600x400",
    tags: ["React", "D3.js", "Tailwind CSS"],
    demoUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
