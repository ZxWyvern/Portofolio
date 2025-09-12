import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { LucideIcon, Code, Database, Layout, Monitor } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: LucideIcon;
  description?: string;
}

const skills: Skill[] = [
  { name: "C#", level: 95, category: "Language", icon: Code, description: "Proficient in C# programming language." },
  { name: "C++", level: 20, category: "Language", icon: Code, description: "Basic knowledge of C++." },
  { name: "JavaScript", level: 20, category: "Language", icon: Code, description: "Familiar with JavaScript for web development." },
  { name: "HTML/CSS", level: 50, category: "Language", icon: Code, description: "Intermediate skills in HTML and CSS." },
  { name: "UI", level: 30, category: "UI/UX", icon: Layout, description: "UI design principles and tools." },
  { name: "UX", level: 50, category: "UI/UX", icon: Monitor, description: "Users experience design and research." },
];

const categories = ["Language", "UI/UX"];

export function Skills() {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedSkill, setExpandedSkill] = useState<Skill | null>(null);

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

  // Dynamically load Credly embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (expandedSkill) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedSkill]);

  const getSkillsByCategory = (category: string) => {
    if (category === "All") return skills;
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Language: "bg-chart-1",
      Database: "bg-chart-3",
      DevOps: "bg-chart-4",
      "UI/UX": "bg-chart-2"
    };
    return colors[category as keyof typeof colors] || "bg-primary";
  };

  const handleSkillClick = (skill: Skill) => {
    setExpandedSkill(skill);
  };

  const closeModal = () => {
    setExpandedSkill(null);
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

        {/* Category Filter Tabs */}
        <div className="p-3 flex justify-center mb-8 space-x-4">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background/40 text-muted-foreground hover:bg-background/60"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {getSkillsByCategory(selectedCategory).map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="bg-background/40 backdrop-blur-lg border-white/10 shadow-xl cursor-pointer"
                onClick={() => handleSkillClick(skill)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {skill.icon && <skill.icon className="w-5 h-5 text-primary" />}
                    <div className={`w-3 h-3 rounded-full ${getCategoryColor(skill.category)}`}></div>
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                    <Progress
                      value={Math.min(Math.max(animatedValues[skill.name] || 0, 0), 100)}
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Skills Chart */}
        <Card className="bg-background/40 backdrop-blur-lg border-white/10 shadow-xl">
          <CardHeader>
            <CardTitle>Skills Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <TooltipProvider key={skill.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="text-center cursor-pointer"
                        onClick={() => handleSkillClick(skill)}
                        whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
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
                            <motion.path
                              className="text-primary"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeDasharray="100"
                              strokeLinecap="round"
                              fill="none"
                              initial={{ strokeDashoffset: 100 }}
                              animate={{ strokeDashoffset: 100 - (animatedValues[skill.name] || 0) }}
                              transition={{ duration: 1, delay: index * 0.1 }}
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
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="center">
                      {skill.description}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Credly Badge */}
        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-center">Certifications</h3>
          <div className="bg-background/40 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-xl">
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="7e00b106-8ece-41ff-ae60-6d1b88be7b07" data-share-badge-host="https://www.credly.com"></div>
          </div>
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {expandedSkill && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {expandedSkill.icon && (
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <expandedSkill.icon className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold">{expandedSkill.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className={`w-2 h-2 rounded-full ${getCategoryColor(expandedSkill.category)}`}></div>
                        <span className="text-sm text-muted-foreground">{expandedSkill.category}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="p-2 hover:bg-accent rounded-full transition-colors"
                    onClick={closeModal}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{expandedSkill.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Proficiency Level</span>
                    <span className="text-sm text-muted-foreground">{expandedSkill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <motion.div
                      className="bg-primary h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${expandedSkill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-3 border border-border rounded-xl font-medium hover:bg-accent transition-colors"
                    onClick={closeModal}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
