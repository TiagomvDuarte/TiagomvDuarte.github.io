import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: SiGithub,
    color: "hover:text-[#333]",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: SiLinkedin,
    color: "hover:text-[#0077b5]",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/yourusername",
    icon: SiX,
    color: "hover:text-[#000]",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-6">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted-foreground ${link.color} transition-all duration-300`}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon className="w-6 h-6" />
          <span className="sr-only">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
}