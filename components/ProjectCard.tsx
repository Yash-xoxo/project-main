"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const accentColors = [
    "from-red-500 to-orange-500",
    "from-emerald-500 to-teal-500",
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-amber-500 to-orange-500",
    "from-indigo-500 to-blue-500",
  ];

  const colorIndex = parseInt(project.id) - 1;
  const gradientClass = accentColors[colorIndex % accentColors.length];

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative overflow-hidden rounded-xl bg-card/40 border border-border/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
        {/* Gradient accent */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${gradientClass}`}
        />

        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/20 group-hover:to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

        <div className="relative p-6 h-full flex flex-col">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientClass}`}
            />
            <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-muted-foreground italic mb-4">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-xs px-2.5 py-1 text-muted-foreground">
                  +{project.techStack.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
            <span className="text-sm font-medium">View Project</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
