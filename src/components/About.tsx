import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Award, Coffee } from "lucide-react";

export function About() {
  const stats = [
    { label: "Years Experience", value: "1+", icon: Calendar },
    { label: "Projects Completed", value: "5+", icon: Award },
    { label: "Cups of Coffee", value: "∞", icon: Coffee },
    { label: "Location", value: "Indonesia, Bogor", icon: MapPin },
  ];

  const expertise = [
    "Game Programmer", 
    "Environment Design",
    "Game Development",
    "UI/UX Programmer",
    "DevOps",
    "Team Leadership"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-bl from-secondary/10 via-background to-accent/10 relative">
      {/* Glass morphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-chart-2/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-chart-3/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through code, 
            design, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* About Content */}
          <div className="lg:col-span-2">
            <Card className="bg-background/40 backdrop-blur-lg border-white/10 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4">My Journey</h3>
                    <p className="text-muted-foreground mb-4">
                      The first time I started making using Unity was about 1 year ago and at that time I was just messing 
                      around but over time I started to get 
                      interested and from there I learned many things such as language, design, UI/UX, even sound.
                    </p>
                    <p className="text-muted-foreground">
                      I currently specialize in game development with a focus on storytelling and complex mechanics. I enjoy transforming
                       complex problems into simple, beautiful, and intuitive solutions. Outside of coding, you'll find me exploring new technologies,
                       contributing to open indie game development, or mentoring aspiring developers.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {expertise.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label} 
                  className="bg-background/40 backdrop-blur-lg border-white/10 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="bg-background/40 backdrop-blur-lg border-white/10 shadow-xl inline-block">
            <CardContent className="p-8">
              <h3 className="mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I'm always excited to take on new challenges and collaborate 
                on interesting projects. Let's create something amazing together!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
