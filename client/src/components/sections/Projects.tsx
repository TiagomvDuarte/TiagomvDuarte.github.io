import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FolderGit2, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = {
  "Research Papers": [
    {
      title: "Paper on AI Implementation",
      link: "path/to/paper.pdf",
      description: "Research on modern AI techniques",
    },
  ],
  "Course Materials": [
    {
      title: "Data Structures Notes",
      link: "path/to/notes",
      description: "Comprehensive study materials",
    },
  ],
  "Code Repositories": [
    {
      title: "GitHub Profile",
      link: "https://github.com/TiagomvDuarte",
      description: "Collection of personal projects",
    },
  ],
};

export default function Projects() {
  return (
    <section id="files" className="py-16 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <FolderGit2 className="h-8 w-8 text-primary" />
            Files
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(resources).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 backdrop-blur-sm bg-card/80 hover:bg-card/100 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">{category}</h3>
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{item.title}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary/80"
                            onClick={() => window.open(item.link, "_blank")}
                          >
                            <LinkIcon className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}