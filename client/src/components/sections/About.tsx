import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Book,
  Code2,
  GraduationCap,
  Terminal,
  Trophy,
  Heart,
  Users,
  Laptop,
  Music
} from "lucide-react";
import Timeline from "@/components/shared/Timeline";

const techStack = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "Redis"],
  "DevOps": ["Docker", "AWS", "CI/CD", "Git"],
  "Tools": ["VS Code", "Figma", "Postman", "Jest"],
};

const activities = [
  {
    icon: Trophy,
    title: "Tennis",
    description: "Competição e exercício físico através do tênis"
  },
  {
    icon: Heart,
    title: "Voluntariado",
    description: "Contribuindo para causas sociais e ambientais"
  },
  {
    icon: Users,
    title: "Networking",
    description: "Conectando e colaborando com outros profissionais"
  },
  {
    icon: Laptop,
    title: "Tech",
    description: "Explorando novas tecnologias e inovações"
  },
  {
    icon: Music,
    title: "Guitarra",
    description: "Expressão musical e criatividade"
  }
];

const timelineItems = [
  {
    date: "2022 - Present",
    title: "Software Engineer",
    subtitle: "Tech Company",
    description: "Working on full-stack development with modern technologies"
  },
  {
    date: "2020 - 2022",
    title: "Master's in Computer Science",
    subtitle: "Your University",
    description: "Focus on Artificial Intelligence and Machine Learning"
  },
  {
    date: "2016 - 2020",
    title: "Bachelor's in Software Engineering",
    subtitle: "Your University",
    description: "Foundation in software development and engineering principles"
  },
  {
    date: "2015 - 2016",
    title: "Web Development Internship",
    subtitle: "Startup Company",
    description: "First steps in professional web development"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid gap-12">
            {/* Profile Section with Photo */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl -rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-6" />
                <Card className="relative overflow-hidden rounded-2xl border-2 border-primary/20">
                  <img
                    src="/your-photo.jpg" // Substitua pelo caminho da sua foto
                    alt="Your Name"
                    className="w-full h-full object-cover"
                  />
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 backdrop-blur-sm bg-card/80">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Hello World! 👋</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    I'm a passionate software developer with a strong foundation in both frontend and backend development.
                    My journey in tech has been driven by curiosity and a desire to create impactful solutions.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                    and sharing knowledge with the developer community.
                  </p>
                </Card>
              </motion.div>
            </div>

            {/* Timeline Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
                My Journey
              </h3>
              <Timeline items={timelineItems} />
            </div>

            {/* Tech Stack Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code2 className="h-6 w-6 text-primary" />
                Tech Stack
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-lg bg-card/80 backdrop-blur-sm"
                  >
                    <h4 className="font-medium text-lg flex items-center gap-2 mb-4">
                      <Terminal className="h-4 w-4 text-primary" />
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>


            {/* Activities Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Book className="h-6 w-6 text-primary" />
                Activities & Interests
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {activities.map((activity) => (
                  <motion.div
                    key={activity.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-lg bg-card/80 backdrop-blur-sm text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <activity.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}