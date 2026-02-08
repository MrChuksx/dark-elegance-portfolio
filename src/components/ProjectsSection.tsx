import { ExternalLink, Github } from "lucide-react";
import FadeIn from "./FadeIn";

interface Project {
  title: string;
  description: string;
  image: string;
}

const mainProjects: Project[] = [
  { title: "DevFlow", description: "A developer productivity dashboard with real-time analytics and task management", image: "" },
  { title: "CloudSync API", description: "RESTful API for cloud file synchronization with multi-platform support", image: "" },
  { title: "PortfolioGen", description: "Automated portfolio generator built with modern web technologies", image: "" },
  { title: "CodeReview Bot", description: "AI-powered code review assistant integrating with GitHub workflows", image: "" },
  { title: "DataVault", description: "Secure data storage solution with end-to-end encryption", image: "" },
  { title: "TaskRunner CLI", description: "Command-line task automation tool for development workflows", image: "" },
];

const moreProjects: Project[] = [
  { title: "ChatConnect", description: "Real-time messaging platform with WebSocket architecture", image: "" },
  { title: "MetricsDash", description: "Business analytics dashboard with interactive data visualizations", image: "" },
  { title: "AuthGuard", description: "Authentication microservice with OAuth2 and JWT implementation", image: "" },
  { title: "DeployKit", description: "CI/CD pipeline toolkit for automated deployment workflows", image: "" },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <FadeIn delay={index * 0.08}>
    <div className="group">
      <div
        className="w-full h-48 bg-secondary mb-5"
        style={{ borderRadius: "50% / 30%" }}
      />
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex gap-4">
        <button className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity">
          View Project <ExternalLink className="w-3 h-3" />
        </button>
        <button className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
          GitHub <Github className="w-3 h-3" />
        </button>
      </div>
    </div>
  </FadeIn>
);

const ProjectsSection = () => (
  <>
    <section id="work" className="px-6 md:px-16 lg:px-24 py-28">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-16">
            My Work
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {mainProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 md:px-16 lg:px-24 py-28">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-16">
            More of My Work
          </h2>
        </FadeIn>
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
