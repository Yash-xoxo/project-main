import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import { projects } from "@/lib/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | DevOps Portfolio`,
    description: project.longDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);
  const demoUrl = project.demoUrl && project.demoUrl !== "#" ? project.demoUrl : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-all mb-8"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          {/* Project header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight min-w-0">
                {project.title}
              </h1>
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start lg:self-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all whitespace-nowrap group lg:mt-2 lg:flex-shrink-0"
                >
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </a>
              )}
            </div>
            <p className="text-xl text-muted-foreground italic mb-6">{project.subtitle}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {project.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Key metrics */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-card/40 border border-border/50 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="pt-4">
              <ImageCarousel images={project.images} title="Project Gallery" />
            </div>
          )}

          {/* Tech stack */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Architecture Overview</h2>
            <div className="p-6 rounded-lg bg-card/40 border border-border/50 backdrop-blur-sm">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.architecture}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Project Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-card/40 border border-border/50 backdrop-blur-sm flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key features */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
            <div className="space-y-3">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/10 border border-border/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-card/40 border border-border/50 backdrop-blur-sm"
                >
                  <h4 className="font-semibold text-foreground mb-2">Challenge {idx + 1}</h4>
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Learnings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.learnings.map((learning, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50 backdrop-blur-sm"
                >
                  <p className="text-foreground font-medium">{learning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Role & impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-card/40 border border-border/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
            </div>
            <div className="p-6 rounded-lg bg-card/40 border border-border/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Impact</h3>
              <p className="text-muted-foreground">
                Designed and implemented enterprise-grade infrastructure that scales reliably, 
                meets production requirements, and demonstrates best practices in DevOps and cloud engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((related) => (
              <Link
                key={related.id}
                href={`/projects/${related.slug}`}
                className="group p-6 rounded-lg bg-card/40 border border-border/50 hover:border-primary/30 transition-all backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-primary uppercase">
                    {related.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {related.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{related.subtitle}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  View Project
                  <ExternalLink size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border border-primary/30 p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interested in Similar Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss how to apply these DevOps and infrastructure patterns to your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
              >
                Get in Touch
              </a>
              <Link
                href="/"
                className="px-8 py-3 rounded-lg bg-muted/20 border border-muted/50 text-foreground font-medium hover:bg-muted/40 transition-all"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
