import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const quote = {
  text: "O código é poesia em movimento",
  author: "Anonymous"
};

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
            Citação Inspiradora
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 backdrop-blur-sm bg-card/80 hover:bg-card/100 transition-colors text-center">
              <p className="text-2xl italic text-muted-foreground mb-6">"{quote.text}"</p>
              <p className="text-lg text-primary">- {quote.author}</p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}