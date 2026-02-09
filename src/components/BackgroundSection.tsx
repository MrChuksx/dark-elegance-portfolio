import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const items = [
  {
    title: "Education",
    details: ["Computer Science, EStam University"],
  },
  {
    title: "Experience",
    details: [
      "Software Developer & Prompt Engineer",
      "Personal Projects (Web & Backend)",
      "Over 3 years of hands-on development experience",
      "90%+ project success rate",
    ],
  },
];

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const BackgroundSection = () => (
  <section className="px-6 md:px-16 lg:px-24 py-28">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-16">
          My Background
        </h2>
      </FadeIn>
      <div className="space-y-12">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.1}>
            <div className="border-t border-border pt-8">
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                </motion.div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                  {item.title}
                </h3>
              </div>
              <ul className="ml-9 space-y-2">
                {item.details.map((detail, di) => (
                  <motion.li
                    key={detail}
                    className="text-muted-foreground text-base"
                    custom={di}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={listItemVariants}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default BackgroundSection;
