import { ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

import guidoraImg from "@/assets/projects/guidora.png";
import uniResultsImg from "@/assets/projects/uni-results.png";
import visionCraftImg from "@/assets/projects/vision-craft.png";
import darkPortfolioImg from "@/assets/projects/dark-portfolio.png";
import orgImg from "@/assets/projects/org.png";
import docsImg from "@/assets/projects/docs.png";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  language: string;
  stars: number;
  liveUrl?: string;
}

const mainProjects: Project[] = [
  {
    title: "Guidora",
    description: "A career compass app that helps users discover and navigate career paths with guided recommendations.",
    image: guidoraImg,
    github: "https://github.com/MrChuksx/guidora-your-career-compass",
    language: "TypeScript",
    stars: 0,
  },
  {
    title: "Uni Results Hub",
    description: "A university results management platform for viewing and tracking academic performance.",
    image: uniResultsImg,
    github: "https://github.com/MrChuksx/uni-results-hub-09811d83",
    language: "TypeScript",
    stars: 0,
    liveUrl: "https://uni-results-hub-09811d83.vercel.app",
  },
  {
    title: "Vision Craft",
    description: "A creative portfolio and vision board application for showcasing work and ideas.",
    image: visionCraftImg,
    github: "https://github.com/MrChuksx/chuks-vision-craft",
    language: "TypeScript",
    stars: 0,
    liveUrl: "https://chuks-craft.vercel.app",
  },
];

const moreProjects: Project[] = [
  {
    title: "Dark Elegance Portfolio",
    description: "A sleek, dark-themed personal portfolio website with modern design and smooth animations.",
    image: darkPortfolioImg,
    github: "https://github.com/MrChuksx/dark-elegance-portfolio",
    language: "TypeScript",
    stars: 0,
    liveUrl: "https://mrchuksvision.vercel.app",
  },
  {
    title: "MrChuksx's Org",
    description: "An organizational project built with Google Gemini AI Studio template for intelligent workflows.",
    image: orgImg,
    github: "https://github.com/MrChuksx/MrChuksx-s-Org",
    language: "TypeScript",
    stars: 0,
    liveUrl: "https://mr-chuksx-s-org.vercel.app",
  },
  {
    title: "Docs",
    description: "Personal documentation and knowledge base built with Mintlify for clean, structured technical writing.",
    image: docsImg,
    github: "https://github.com/MrChuksx/docs",
    language: "MDX",
    stars: 0,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    className="group cursor-pointer"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={cardVariants}
  >
    <motion.div
      className="w-full h-48 bg-secondary mb-5 overflow-hidden"
      style={{ borderRadius: "50% / 30%" }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.img
        src={project.image}
        alt={`${project.title} preview`}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
    <div className="flex items-center gap-3 mb-2">
      <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:translate-x-1 transition-transform duration-300">
        {project.title}
      </h3>
      {project.stars > 0 && (
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="w-3 h-3 fill-current" /> {project.stars}
        </span>
      )}
    </div>
    <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
      {project.description}
    </p>
    <p className="text-xs text-muted-foreground/70 mb-4">{project.language}</p>
    <div className="flex gap-4">
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        GitHub <Github className="w-3 h-3" />
      </motion.a>
      {project.liveUrl && (
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          Live <ExternalLink className="w-3 h-3" />
        </motion.a>
      )}
    </div>
  </motion.div>
);

const sectionHeaderVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const ProjectsSection = () => (
  <>
    <section id="work" className="px-6 md:px-16 lg:px-24 py-28">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
        >
          My Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {mainProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 md:px-16 lg:px-24 py-28">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
        >
          More of My Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {moreProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ProjectsSection;
