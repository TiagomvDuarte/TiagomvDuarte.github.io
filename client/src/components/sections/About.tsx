import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "Node.js", "Express",
  "Tailwind CSS", "PostgreSQL", "MongoDB", "GraphQL",
  "Next.js", "Docker", "AWS", "Git"
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
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-6">
              <p className="text-lg leading-relaxed">
                I'm a full-stack developer with a passion for building beautiful,
                functional, and user-friendly applications. With [X] years of
                experience in web development, I specialize in creating modern web
                applications using cutting-edge technologies.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                When I'm not coding, you can find me [your interests/hobbies].
                I'm always eager to learn new technologies and tackle challenging
                problems.
              </p>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
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
