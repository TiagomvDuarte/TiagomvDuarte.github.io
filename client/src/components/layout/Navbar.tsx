import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "@/components/shared/ThemeToggle";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#journey", label: "My Journey" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#activities", label: "Activities" },
];

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled || isOpen ? 1 : 0 }}
        className="absolute inset-0 bg-background/80 backdrop-blur-md shadow-md"
        transition={{ duration: 0.3 }}
      />

      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className={`transition-opacity ${scrolled || isOpen ? 'opacity-100' : 'opacity-90'}`}>
              <img
                src="/1-removebg-preview.png"
                alt="Tiago Duarte"
                className={`h-8 transition-all duration-300 ${
                  scrolled || isOpen
                    ? 'dark:brightness-[1000] brightness-0'
                    : 'brightness-[1000] dark:brightness-[1000]'
                }`}
              />
            </a>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  scrolled || isOpen
                    ? 'text-foreground hover:text-primary'
                    : 'text-white hover:text-white/80'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center space-x-4">
              <ThemeToggle isTransparent={!scrolled && !isOpen} />
              {socialLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleSocialClick(link)}
                  className={`${
                    scrolled || isOpen
                      ? 'text-muted-foreground'
                      : 'text-white/60'
                  } ${link.color} transition-all duration-200`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle isTransparent={!scrolled && !isOpen} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={!scrolled && !isOpen ? 'text-white' : ''}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden pt-4 pb-6"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`transition-colors ${
                      scrolled || isOpen
                        ? 'text-foreground hover:text-primary'
                        : 'text-white hover:text-white/80'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="flex items-center space-x-4 pt-4">
                  {socialLinks.map((link) => (
                    <motion.button
                      key={link.name}
                      onClick={() => handleSocialClick(link)}
                      className={`${
                        scrolled || isOpen
                          ? 'text-muted-foreground'
                          : 'text-white/60'
                      } ${link.color} transition-all duration-200`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon className="w-6 h-6" />
                      <span className="sr-only">{link.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}