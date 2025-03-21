import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import ThemeToggle from "@/components/shared/ThemeToggle";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#journey", label: "My Journey" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#activities", label: "Activities" },
];

const socialLinks = [
  {
    name: "Email",
    url: "mailto:tiagomvduarte24@gmail.com",
    icon: HiMail,
    color: "hover:text-primary",
  },
  {
    name: "GitHub",
    url: "https://github.com/TiagomvDuarte",
    icon: SiGithub,
    color: "hover:text-[#333] dark:hover:text-[#fff]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tiago-duarte-628278263/",
    icon: SiLinkedin,
    color: "hover:text-[#0077b5]",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50"
    >
      {/* Background overlay with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled || isOpen ? 1 : 0 }}
        className="absolute inset-0 bg-background/80 backdrop-blur-md shadow-md"
        transition={{ duration: 0.3 }}
      />

      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className={`transition-opacity ${scrolled || isOpen ? 'opacity-100' : 'opacity-90'}`}>
              <img 
                src="1-removebg-preview.png" 
                alt="Tiago Duarte"
                className="h-8 transition-all duration-300 brightness-[1000] dark:brightness-[1000]"
              />
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
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

            {/* Theme Toggle + Social Links */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
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
          </div>

          {/* Mobile Right Side Controls */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
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
                    className="text-foreground hover:text-primary transition-colors"
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

                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground ${link.color} transition-all duration-300`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon className="w-6 h-6" />
                      <span className="sr-only">{link.name}</span>
                    </motion.a>
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