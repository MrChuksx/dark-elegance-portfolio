import FadeIn from "./FadeIn";
import ParallaxImage from "./ParallaxImage";
import aboutWorkspace from "@/assets/about-workspace.jpg";

const AboutSection = () => (
  <section id="about" className="px-6 md:px-16 lg:px-24 py-28">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Who is MrChuksx?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-lg">
            I'm a developer and creator who loves building things that work
            beautifully. From career tools and university platforms to creative
            portfolios and AI-powered workflows — I ship real products with
            modern tech stacks. Currently focused on TypeScript, React, and
            pushing the boundaries of what's possible with code.
          </p>
        </FadeIn>
      </div>
      <FadeIn delay={0.2} className="flex justify-center lg:justify-end">
        <ParallaxImage
          src={aboutWorkspace}
          alt="Tech workspace"
          className="w-80 h-[28rem] md:w-96 md:h-[32rem]"
        />
      </FadeIn>
    </div>
  </section>
);

export default AboutSection;
