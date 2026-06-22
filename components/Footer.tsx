import Link from "next/link";
import { Code2, Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">DevOps Engineer</h3>
            <p className="text-sm text-muted-foreground">
              Cloud architect & DevOps specialist. Building scalable, reliable infrastructure systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  All Projects
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/50 transition-all"
              >
                <Code2 size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/50 transition-all"
              >
                <Share2 size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/50 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © 2024 DevOps Portfolio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Enterprise-grade infrastructure built for scale
          </p>
        </div>
      </div>
    </footer>
  );
}
