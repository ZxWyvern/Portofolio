import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  Palette, 
  Database, 
  Cloud,
  Play,
  Terminal,
  Instagram,
  ChevronRight,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";

const codeSnippets = [
  `void Start()
  {
      PerAsperaAdAstra();
      Debug.Log("Game Begin");
      Debug.Log("Ready to play");
  }`,

`void PerAsperaAdAstra()
{
    Debug.Log("Through hardships we endure");
    Debug.Log("Strength grows with each trial");
    Debug.Log("Until we touch the stars");
}`

,

  `public struct PortfolioStatus
  {
      public bool IsAvailable;
      public string ExperienceYears;
      public string Skills;
  }`,

  `PortfolioStatus myPortfolio = new PortfolioStatus();
  myPortfolio.IsAvailable = true;
  myPortfolio.ExperienceYears = "1+ Years";
  myPortfolio.Skills = "C#, Unity";
  myPortfolio.ExperienceYears = "1+ Years";
  Debug.Log(myPortfolio);`,
];


const floatingIcons = [
  { icon: Code, delay: 0, x: "10%", y: "20%" },
  { icon: Palette, delay: 0.5, x: "80%", y: "30%" },
  { icon: Database, delay: 1, x: "20%", y: "70%" },
  { icon: Cloud, delay: 1.5, x: "90%", y: "80%" },
  { icon: Globe, delay: 2, x: "15%", y: "40%" },
  { icon: Zap, delay: 2.5, x: "85%", y: "60%" }
];

const techBadges = [
  { name: "C#", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "Unity3D", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
  { name: "Unity2D", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { name: "UI/UX", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  { name: "Level Design", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
  { name: "Artists", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" }
];

export function Hero() {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/10"></div>
      
      {/* Static mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, rgba(29, 78, 216, 0.15), transparent 40%)`,
        }}
      ></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: "10%", top: "20%", delay: 0 },
          { left: "80%", top: "30%", delay: 0.5 },
          { left: "20%", top: "70%", delay: 1 },
          { left: "90%", top: "80%", delay: 1.5 },
          { left: "15%", top: "40%", delay: 2 },
          { left: "85%", top: "60%", delay: 2.5 },
          { left: "5%", top: "90%", delay: 3 },
          { left: "95%", top: "10%", delay: 3.5 }
        ].map((shape, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary/10 rounded-full"
            style={{
              left: shape.left,
              top: shape.top,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            <IconComponent className="w-12 h-12 text-primary" />
          </motion.div>
        );
      })}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left side - Main content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status badge with animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Badge 
                variant="outline" 
                className="bg-green-500/10 text-green-400 border-green-500/30 gap-2 px-4 py-2"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for opportunities
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                1+ Years
              </Badge>
            </motion.div>

            {/* Main heading with gradient text */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <h3 className="text-muted-foreground">Hello, I'm</h3>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
                    Pandu Satria Permana
                  </span>
                </h1>
                <motion.div 
                  className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Game Developer
                </motion.div>
              </motion.div>

              {/* Animated description */}
              <motion.p 
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Passionate about creating exceptional gaming experiences using Unity. 
                I transform complex ideas into elegant, scalable games that captivate 
                and delight players, all through clean code and innovative design.
              </motion.p>
            </div>

            {/* Tech badges */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {techBadges.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className={`${tech.color} px-3 py-1 hover:shadow-lg transition-all cursor-default`}
                  >
                    {tech.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => scrollToSection('projects')} 
                  size="lg"
                  className="group gap-2 from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 transition-all"
                >
                  <Play className="w-4 h-4" />
                  View My Work
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {[
                { icon: Github, href: "https://github.com/zxwyvern", label: "GitHub" },
                { icon: Instagram, href: "https://www.instagram.com/schreinaa/", label: "Instagram" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="bg-background/30 backdrop-blur-sm border border-white/10 hover:bg-background/50 hover:border-white/20"
                    >
                      <a href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        <IconComponent className="w-5 h-5" />
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right side - Interactive code terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Card className="bg-background/40 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground ml-4">
                  <Terminal className="w-4 h-4" />
                  <span>PanduSatria.cs</span>
                </div>
              </div>

              <CardContent className="p-6 font-mono text-sm">
                <motion.div
                  key={currentCodeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2"
                >
                  {codeSnippets[currentCodeIndex].split('\n').map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-muted-foreground text-xs select-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-chart-1">│</span>
                      <code className="text-foreground">{line}</code>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Typing cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-primary ml-1 mt-2"
                />
              </CardContent>
            </Card>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-background/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl"
            >
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-1">99%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
