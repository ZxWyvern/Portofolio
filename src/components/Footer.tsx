import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3>Pandu Satria Permana</h3>
            <p className="text-muted-foreground">
              Game Developer passionate about creating beautiful and functional game experiences.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4>Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <button className="text-left text-muted-foreground hover:text-foreground transition-colors">
                About
              </button>
              <button className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </button>
              <button className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </button>
              <button className="text-left text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4>Services</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Web Development</span>
              <span className="text-muted-foreground">Mobile App Development</span>
              <span className="text-muted-foreground">UI/UX Design</span>
              <span className="text-muted-foreground">Consulting</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Pandu Satria Permana. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
