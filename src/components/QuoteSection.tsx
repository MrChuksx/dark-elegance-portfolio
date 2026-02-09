import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import ParallaxImage from "./ParallaxImage";
import quoteImage from "@/assets/quote-image.jpg";

const QuoteSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const textX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <motion.blockquote
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.3] italic"
            style={{ x: textX }}
          >
            "Technology speaks where limitations once existed."
          </motion.blockquote>
        </FadeIn>
        <FadeIn delay={0.2} className="flex justify-center lg:justify-end">
          <ParallaxImage
            src={quoteImage}
            alt="Abstract technology"
            className="w-72 h-96 md:w-80 md:h-[26rem]"
            speed={0.2}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default QuoteSection;
