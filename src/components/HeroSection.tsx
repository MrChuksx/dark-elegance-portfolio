import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import OvalImage from "./OvalImage";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => (
  <section className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <FadeIn>
          <span className="pill-badge">
            Uchechukwu Godspower / Software Developer &amp; Prompt Engineer
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-foreground">
            Welcome to My
            <br />
            Tech Portfolio
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-md font-light tracking-wide">
            Building vision to reality
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-foreground text-sm tracking-widest uppercase hover:opacity-70 transition-opacity group"
          >
            Work with me today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
      <FadeIn delay={0.2} className="flex justify-center lg:justify-end">
        <OvalImage
          src={heroPortrait}
          alt="Uchechukwu Godspower portrait"
          className="w-80 h-[28rem] md:w-96 md:h-[32rem]"
        />
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
