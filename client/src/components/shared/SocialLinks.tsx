import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useToast } from "@/hooks/use-toast";

const email = "tiagomvduarte24@gmail.com";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tiago-duarte-628278263/",
    icon: FaLinkedin,
    color: "hover:text-[#0077B5]",
  },
  {
    name: "GitHub",
    url: "https://github.com/TiagomvDuarte",
    icon: FaGithub,
    color: "hover:text-[#0077B5]",
  },
  {
    name: "Email",
    action: async () => {
      await navigator.clipboard.writeText(email);
      return "Email copied to clipboard!";
    },
    icon: HiMail,
    color: "hover:text-primary",
  },
];

export default function SocialLinks() {
  const { toast } = useToast();

  const handleSocialClick = async (link: typeof socialLinks[0]) => {
    if ('url' in link) {
      window.open(link.url, '_blank');
    } else if ('action' in link) {
      try {
        const message = await link.action();
        toast({
          description: message,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Failed to copy email",
        });
      }
    }
  };

  return (
    <div className="flex items-center space-x-6">
      {socialLinks.map((link) => (
        <motion.button
          key={link.name}
          onClick={() => handleSocialClick(link)}
          className={`text-muted-foreground ${link.color} transition-all duration-300`}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon className="w-6 h-6" />
          <span className="sr-only">{link.name}</span>
        </motion.button>
      ))}
    </div>
  );
}