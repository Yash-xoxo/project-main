"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
              <span className="text-primary font-bold">◆</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">DevOps Portfolio</span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <a
            href="#"
            className="text-sm px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all flex items-center gap-2 hover:gap-3"
          >
            Resume
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
