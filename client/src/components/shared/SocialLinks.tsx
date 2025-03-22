
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/TiagomvDuarte",
    icon: FaGithub,
    color: "hover:text-[#2ea44f]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tiagomvduarte/",
    icon: FaLinkedin,
    color: "hover:text-[#0077B5]",
  },
  {
    name: "Email",
    url: "mailto:tiagomvduarte24@gmail.com",
    icon: HiMail,
    color: "hover:text-primary",
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
