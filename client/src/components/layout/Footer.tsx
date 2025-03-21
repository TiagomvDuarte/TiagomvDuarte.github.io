import SocialLinks from "@/components/shared/SocialLinks";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-muted/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              2025 | Developed by Tiago Duarte & Replit | All Rights Reserved
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}