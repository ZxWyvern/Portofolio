import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail, Heart, Bot } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" />, React + Vite, and <Bot className="w-4 h-4 text-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
