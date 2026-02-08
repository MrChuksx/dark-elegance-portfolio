import { ArrowRight } from "lucide-react";
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
                <ArrowRight className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                  {item.title}
                </h3>
              </div>
              <ul className="ml-9 space-y-2">
                {item.details.map((detail) => (
                  <li key={detail} className="text-muted-foreground text-base">
                    {detail}
                  </li>
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
