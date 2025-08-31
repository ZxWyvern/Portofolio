import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import platImg from '../assets/images/2Dplat.png';
import horrorImg from '../assets/images/UnityHorror.png';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "2D Platformer Game",
    description: "A classic 2D platformer game developed using Unity. Features include multiple levels, enemy AI, and smooth player controls.",
    image: platImg,
    technologies: ["Unity", "C#", "2D Art", "Puzzle"],
    liveUrl: "https://example.com/2d-platformer",
    githubUrl: "https://github.com/pandusatria/2d-platformer"
  },
  {
    title: "Horror Game : Facility breach: last shift ",
    description: "A deeply atmospheric psychological horror experience where haunting narratives and fragile character progression blur the line between fear and reality.",
    image: horrorImg,
    technologies: ["Unity", "C#", "3D Modeling", "NavMeshAgent"],
    liveUrl: "https://example.com/rpg-adventure",
    githubUrl: "https://github.com/pandusatria/rpg-adventure"
  },
  {
    title: "Mobile Puzzle Game (In Progress)",
    description: "A mobile puzzle game designed for iOS and Android platforms. Features intuitive touch controls and challenging puzzles.",
    image: "https://example.com/images/mobile-puzzle.jpg",
    technologies: ["Unity", "C#", "Mobile Development"],
    liveUrl: "https://example.com/mobile-puzzle",
    githubUrl: "https://github.com/pandusatria/mobile-puzzle"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-bl from-background via-primary/5 to-secondary/10 relative">
      {/* Glass morphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-chart-3/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-chart-4/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
            Each project demonstrates different aspects of game development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-background/30 backdrop-blur-lg border-white/10 shadow-xl hover:shadow-2xl hover:bg-background/40 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo (Coming Soon)
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code (In Progress)
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
