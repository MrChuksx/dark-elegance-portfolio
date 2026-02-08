import FadeIn from "./FadeIn";
import OvalImage from "./OvalImage";
import quoteImage from "@/assets/quote-image.jpg";

const QuoteSection = () => (
  <section className="px-6 md:px-16 lg:px-24 py-28">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <FadeIn>
        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.3] italic">
          "Technology speaks where limitations once existed."
        </blockquote>
      </FadeIn>
      <FadeIn delay={0.2} className="flex justify-center lg:justify-end">
        <OvalImage
          src={quoteImage}
          alt="Abstract technology"
          className="w-72 h-96 md:w-80 md:h-[26rem]"
        />
      </FadeIn>
    </div>
  </section>
);

export default QuoteSection;
