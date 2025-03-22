import { motion } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";
import { Card } from "@/components/ui/card";
import { FolderGit2, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const resources = {
  "Research Papers": [
    {
      title: "Paper on AI Implementation",
      link: "path/to/paper.pdf",
      description: "Research on modern AI techniques",
    },
  ],
  "Course Materials": [
    {
      title: "Data Structures Notes",
      link: "path/to/notes",
      description: "Comprehensive study materials",
    },
  ],
  "Code Repositories": [
    {
      title: "GitHub Profile",
      link: "https://github.com/TiagomvDuarte",
      description: "Collection of personal projects",
    },
  ],
};

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

          {/* Files & Resources Section */}
          <div id="resources" className="pt-20">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
              <FolderGit2 className="h-8 w-8 text-primary" />
              Files & Resources
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(resources).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                >
                  <Card className="p-6 backdrop-blur-sm bg-card/80 hover:bg-card/100 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4">{category}</h3>
                    <div className="space-y-4">
                      {items.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{item.title}</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-primary hover:text-primary/80"
                              onClick={() => window.open(item.link, "_blank")}
                            >
                              <LinkIcon className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}