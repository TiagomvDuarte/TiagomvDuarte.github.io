import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  GraduationCap,
  Terminal,
  Droplet,
  Monitor,
  FolderKanban,
  User,
} from "lucide-react";
import { PiGuitarFill } from "react-icons/pi";
import { GiTennisRacket } from "react-icons/gi";
import Timeline from "@/components/shared/Timeline";

const activities = [
  {
    icon: Monitor,
    title: "NTT DATA",
    date: "October 2024 - Present",
    description: "University Ambassador"
  },
  {
    icon: Droplet,
    title: "Thirst Project Portugal",
    date: "May 2024 - Present",
    description: "Member of Logistics Department - Team FCT NOVA"
  },
  {
    icon: User,
    title: "Magma Studio",
    date: "March 2024 - October 2024",
    description: "University Ambassador"
  },
  {
    icon: GraduationCap,
    title: "Cambridge School",
    description: "Classes 4 hours/week",
    date: "September 2017 - July 2023"
  },
  {
    icon: PiGuitarFill,
    title: "Guitar Classes",
    date: "October 2015 - July 2020",
    description: "Once a week"
  },
  {
    icon: GiTennisRacket,
    title: "Tennis Classes",
    date: "September 2014 - Present",
    description: "Twice a week"
  }
];

const techStack = {
  "Languages": ["Java", "Python", "SQL", "JavaScript", "C", "OCaml"],
  "AI & Data Science": ["TensorFlow", "R", "AutoGen", "Semantic Kernel", "MATLAB", "Matplotlib", "NumPy", "Pandas"],
  "Tools & DevOps": ["Docker", "Git", "GitHub", "IntelliJ", "Maven", "Gradle", "Canva", "Oracle VM", "Ubuntu", "VS Code"],
};

const timelineItems = [
  {
    date: "September 2025 - TBD",
    title: "MSc in Data Science and Advanced Analytics - NOVA IMS",
    description: "Starting master's degree studies"
  },
  {
    date: "March 2025 - July 2025",
    title: "Building AI Agents - Unipartner",
    subtitle: "Curricular Internship",
    description: ""
  },
  {
    date: "September 2022 - Present",
    title: "BSc in Computer Science and Engineering - NOVA FCT",
    description: "Average: 17"
  },
  {
    date: "July 2023",
    title: "Cambridge Certificate in Advanced English",
    description: "Overall: 189"
  },
  {
    date: "September 2019 - June 2022",
    title: "High School in Science & Technology Course",
    description: "Average: 18"
  },
];

const quote = {
  text: "I want to understand the big questions, the really big ones that you normally go into philosophy or physics if you're interested in. I thought building AI would be the fastest route to answer some of those questions.",
  author: "Demis Hassabis"
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2 pt-16">
            <User className="h-8 w-8 text-primary" />
            ABOUT ME
          </h2>

          <div className="grid gap-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl -rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-6" />
                <Card className="relative overflow-hidden rounded-2xl border-2 border-primary/20">
                  <img
                    src="profile.jpg"
                    alt="Tiago Duarte"
                    className="w-full h-full object-cover"
                  />
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 bg-card hover:bg-card transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-primary">WHO AM I?</h3>
                  <p className="text-lg leading-relaxed mb-4 text-foreground">
                    I am currently 20 years old, pursuing a Bachelor's degree in Computer Science and Engineering at NOVA School of Science and Technology in Lisbon, Portugal and eagerly anticipating the opportunity to pursue a master's degree in Data Science.
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-foreground">
                    My interests range from technology to global and social affairs, and I am particularly interested in integrating these interests whenever possible. I have a strong passion for learning and continually expanding my knowledge in areas such as Artificial Intelligence and Data Science, exploring their profound impact on the world.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    Driven by a desire to understand the intersection of technology and society, I am committed to exploring how advancements in these fields can positively impact the world around us.
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-8 bg-card hover:bg-card transition-colors text-center">
                <p className="text-xl md:text-2xl italic text-muted-foreground mb-6 leading-relaxed">"{quote.text}"</p>
                <p className="text-lg text-primary">- {quote.author}</p>
              </Card>
            </motion.div>

            <div id="journey" className="scroll-mt-32">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
                My Journey
              </h3>
              <Timeline items={timelineItems} />
            </div>

            <div id="tech-stack" className="scroll-mt-32">
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
                    className="p-6 rounded-lg bg-card hover:bg-card transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-medium text-lg flex items-center gap-2 mb-4">
                      <Terminal className="h-4 w-4 text-primary" />
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div id="activities" className="scroll-mt-32">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FolderKanban className="h-6 w-6 text-primary" />
                Activities
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {activities.map((activity) => (
                  <motion.div
                    key={activity.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-lg bg-card hover:bg-card transition-colors text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <activity.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">{activity.title}</h4>
                    <p className="text-sm text-primary mb-1">{activity.date}</p>
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
};

export default About;