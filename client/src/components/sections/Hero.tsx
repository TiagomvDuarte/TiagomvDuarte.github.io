import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/shared/AnimatedText";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMail } from "react-icons/hi";

const quotes = [
  {
    text: "O código é poesia em movimento",
    author: "Anonymous"
  },
  {
    text: "A simplicidade é a sofisticação suprema",
    author: "Leonardo da Vinci"
  },
  {
    text: "Inovação distingue um líder de um seguidor",
    author: "Steve Jobs"
  }
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <AnimatedText
            text="Hi, I'm Tiago Duarte"
            className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            A passionate full-stack developer crafting beautiful and functional web experiences
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center items-center space-x-6 mb-12"
          >
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiMail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://github.com/yourusername"
              className="text-muted-foreground hover:text-[#333] dark:hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-muted-foreground hover:text-[#0077b5] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </motion.div>

          {/* Quotes Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="mb-6"
              >
                <p className="text-lg italic text-muted-foreground">"{quote.text}"</p>
                <p className="text-sm text-primary mt-1">- {quote.author}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ArrowDown className="w-8 h-8 text-primary/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full bg-primary/5"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}