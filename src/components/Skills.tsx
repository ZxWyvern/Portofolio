import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "C#", level: 95, category: "Language" },
  { name: "C++", level: 20, category: "Language" },
  { name: "JavaScript", level: 20, category: "Language" },
  { name: "HTML/CSS", level: 50, category: "Language" },
  { name: "UI", level: 30, category: "UI/UX" },
  { name: "UX", level: 50, category: "UI/UX" },
];

const categories = ["Language", "UI/UX"];

export function Skills() {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newValues: { [key: string]: number } = {};
      skills.forEach(skill => {
        newValues[skill.name] = skill.level;
      });
      setAnimatedValues(newValues);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Language: "bg-chart-1",
      Database: "bg-chart-3",
      DevOps: "bg-chart-4"
    };
    return colors[category as keyof typeof colors] || "bg-primary";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/10 relative">
      {/* Glass morphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-chart-1/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-chart-2/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a breakdown of my technical skills and proficiency levels. 
            I'm constantly learning and improving these skills through projects and courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category) => (
            <Card key={category} className="bg-background/40 backdrop-blur-lg border-white/10 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getCategoryColor(category)}`}></div>
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {getSkillsByCategory(category).map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                    <Progress 
                      value={animatedValues[skill.name] || 0} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Skills Chart */}
        <Card className="bg-background/40 backdrop-blur-lg border-white/10 shadow-xl">
          <CardHeader>
            <CardTitle>Skills Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-secondary"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-primary"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${animatedValues[skill.name] || 0}, 100`}
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium">{animatedValues[skill.name] || 0}%</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}