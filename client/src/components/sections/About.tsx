import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Book, 
  Code2, 
  GraduationCap, 
  Terminal,
  Coffee,
  Gamepad2,
  Music,
  Camera
} from "lucide-react";

const techStack = {
  "Languages": ["Java", "Python", "JavaScript/TypeScript", "C#", "SQL"],
  "Frontend": ["React", "Next.js", "Tailwind CSS", "Material-UI"],
  "Backend": ["Node.js", "Express", "Spring Boot", "ASP.NET"],
  "Database": ["PostgreSQL", "MongoDB", "Redis"],
  "Tools": ["Git", "Docker", "AWS", "Azure"],
};

const activities = [
  {
    icon: Coffee,
    title: "Coffee & Code",
    description: "Passionate about programming while enjoying a good cup of coffee"
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Enthusiast of strategy and RPG games"
  },
  {
    icon: Music,
    title: "Music",
    description: "Playing guitar and discovering new genres"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and exploring different perspectives"
  }
];

const education = [
  {
    degree: "Master's in Computer Science",
    institution: "Your University",
    period: "2020 - 2022",
    description: "Focus on Artificial Intelligence and Machine Learning"
  },
  {
    degree: "Bachelor's in Software Engineering",
    institution: "Your University",
    period: "2016 - 2020",
    description: "Foundation in software development and engineering principles"
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

            {/* Tech Stack Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code2 className="h-6 w-6 text-primary" />
                Tech Stack
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <h4 className="font-medium text-lg flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-primary" />
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-lg bg-card"
                  >
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="mt-2">{edu.description}</p>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activities.map((activity) => (
                  <motion.div
                    key={activity.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-lg bg-card text-center"
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