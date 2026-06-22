import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";
import { ArrowDown, Zap } from "lucide-react";

export const metadata = {
  title: "DevOps Portfolio | Enterprise Infrastructure & Cloud Solutions",
  description:
    "Premium DevOps and Cloud Engineering portfolio. Specialized in Kubernetes, CI/CD, Infrastructure as Code, and enterprise-scale systems.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Enterprise-Grade Infrastructure
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            DevOps & Cloud{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            Specialized in building enterprise-scale systems, automating deployments, and architecting
            resilient infrastructure for production environments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all flex items-center gap-2 hover:gap-3"
            >
              Explore Projects
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-lg bg-muted/20 border border-muted/50 text-foreground font-medium hover:bg-muted/40 hover:border-muted/70 transition-all"
            >
              Download Resume
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-lg bg-card/40 border border-border/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-1">6+</div>
              <div className="text-xs text-muted-foreground">Major Projects</div>
            </div>
            <div className="p-4 rounded-lg bg-card/40 border border-border/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime Focus</div>
            </div>
            <div className="p-4 rounded-lg bg-card/40 border border-border/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary mb-1">Enterprise</div>
              <div className="text-xs text-muted-foreground">Scale Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="text-sm font-medium text-primary">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Project Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of enterprise DevOps projects showcasing infrastructure architecture, automation,
              and cloud-native solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Engineering Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With expertise spanning virtualization, containerization, automation, and cloud-native
                architecture, I specialize in building systems that scale reliably and perform under
                enterprise-grade demands.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Each project demonstrates a commitment to best practices: infrastructure as code,
                continuous integration and deployment, monitoring and observability, and disaster recovery
                planning.
              </p>
              <ul className="space-y-3">
                {[
                  "Kubernetes & Container Orchestration",
                  "CI/CD Pipeline Design & Implementation",
                  "Infrastructure as Code (IaC)",
                  "Cloud Architecture & Migration",
                  "Monitoring & Observability",
                  "Disaster Recovery & High Availability",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Visual */}
            <div className="relative">
              <div className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50 p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  {[
                    { label: "Infrastructure Design", value: "Expert" },
                    { label: "DevOps Automation", value: "Expert" },
                    { label: "Cloud Platforms", value: "Advanced" },
                    { label: "Kubernetes", value: "Expert" },
                    { label: "CI/CD Systems", value: "Expert" },
                    { label: "System Architecture", value: "Expert" },
                  ].map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.label}</span>
                        <span className="text-xs text-primary">{skill.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted/20 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: skill.value === "Expert" ? "100%" : "85%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accent */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border border-primary/30 p-12 text-center backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss how enterprise-grade DevOps and cloud solutions can transform your
              systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-muted/20 border border-muted/50 text-foreground font-medium hover:bg-muted/40 transition-all"
              >
                View More Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
