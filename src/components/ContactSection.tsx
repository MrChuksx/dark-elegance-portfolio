import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const ContactSection = () => (
  <section id="contact" className="px-6 md:px-16 lg:px-24 py-28">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-16">
          Reach Out to Me
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn delay={0.1}>
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</p>
              <a
                href="mailto:Uchechukwugodspower6@gmail.com"
                className="text-foreground hover:opacity-70 transition-opacity text-lg"
              >
                Uchechukwugodspower6@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Social</p>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/godspower-uchechukwu-69a200397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-foreground hover:opacity-70 transition-opacity"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://x.com/mrchuks_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-foreground hover:opacity-70 transition-opacity"
                >
                  X (Twitter) ↗
                </a>
                <a
                  href="https://www.instagram.com/bluestoneon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-foreground hover:opacity-70 transition-opacity"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="flex items-end">
          <a
            href="mailto:Uchechukwugodspower6@gmail.com"
            className="inline-flex items-center gap-3 text-foreground text-sm tracking-widest uppercase hover:opacity-70 transition-opacity group"
          >
            Let's collaborate
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default ContactSection;
