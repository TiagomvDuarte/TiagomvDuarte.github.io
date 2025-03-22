import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

      <div className="space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.2 }}
            className={`relative flex items-center gap-8 min-h-[100px] ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot on timeline */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className="w-full h-full rounded-full bg-primary/20 p-1.5"
              >
                <div className="w-full h-full rounded-full bg-primary" />
              </motion.div>
            </div>

            {/* Content */}
            <div
              className={`pl-16 md:pl-0 ${
                index % 2 === 0 ? "md:w-[calc(50%-2rem)]" : "md:w-[calc(50%-2rem)]"
              }`}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 backdrop-blur-sm bg-card/80 hover:bg-card/100 transition-all duration-200 flex flex-col items-center text-center">
                  <p className="text-sm text-primary font-medium mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-muted-foreground text-sm mb-2">{item.subtitle}</p>
                  )}
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}