import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const quotes = [
  {
    text: "O código é poesia em movimento",
    author: "Anonymous"
  },
  {
    text: "A simplicidade é a sofisticação suprema",
    author: "Leonardo da Vinci"
  },
  {
    text: "Inovação distingue um líder de um seguidor",
    author: "Steve Jobs"
  }
];

export default function Quotes() {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Citações Inspiradoras
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 backdrop-blur-sm bg-card/80 hover:bg-card/100 transition-colors">
                  <p className="text-lg italic text-muted-foreground mb-4">"{quote.text}"</p>
                  <p className="text-sm text-primary">- {quote.author}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}