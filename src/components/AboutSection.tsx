import FadeIn from "./FadeIn";
import OvalImage from "./OvalImage";
import aboutWorkspace from "@/assets/about-workspace.jpg";

const AboutSection = () => (
  <section id="about" className="px-6 md:px-16 lg:px-24 py-28">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Who is Godspower?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-lg">
            I am a final-year Computer Science student, 21 years old, studying in
            Benin, Cotonou. I have over 3 years of hands-on experience in tech,
            with more than 90% project success across personal and academic
            projects. I focus on building scalable solutions and turning ideas into
            functional digital products.
          </p>
        </FadeIn>
      </div>
      <FadeIn delay={0.2} className="flex justify-center lg:justify-end">
        <OvalImage
          src={aboutWorkspace}
          alt="Tech workspace"
          className="w-80 h-[28rem] md:w-96 md:h-[32rem]"
        />
      </FadeIn>
    </div>
  </section>
);

export default AboutSection;
