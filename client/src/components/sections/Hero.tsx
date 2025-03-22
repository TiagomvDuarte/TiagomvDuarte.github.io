import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/shared/AnimatedText";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useToast } from "@/hooks/use-toast";

const email = "tiagomvduarte24@gmail.com";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        description: "Email copied to clipboard!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to copy email",
      });
    }
  };

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/display.avif"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <AnimatedText
            text="Hi, I'm Tiago Duarte"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-20 text-white"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            I'm a Computer Science student and a tech enthusiast
          </motion.p>

          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center items-center space-x-6"
            >
              <a
                href="https://www.linkedin.com/in/tiago-duarte-628278263/"
                className="text-white/60 hover:text-[#0077B5] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/TiagomvDuarte"
                className="text-white/60 hover:text-[#0077B5] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <button
                onClick={handleEmailClick}
                className="text-white/60 hover:text-primary transition-colors duration-300"
              >
                <HiMail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </button>
            </motion.div>

            <motion.div
              className="cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => {
                document.querySelector("#about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <ArrowDown className="w-8 h-8 text-white/60" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}