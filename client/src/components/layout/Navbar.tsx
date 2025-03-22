import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Tiago Duarte</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <Button variant="ghost" className="mr-2" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" className="mr-2" asChild>
            <Link href="#journey">Journey</Link>
          </Button>
          <Button variant="ghost" className="mr-2" asChild>
            <Link href="#tech-stack">Tech Stack</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#activities">Activities</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;