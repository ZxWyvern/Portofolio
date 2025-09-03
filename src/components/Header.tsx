import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Badge } from "./ui/badge";
import { 
  Menu, 
  Moon, 
  Sun, 
  User, 
  Settings, 
  LogOut, 
  Download, 
  Github, 
  Linkedin, 
  Mail,
  Instagram,
  Home,
  Code,
  Briefcase,
  Phone,
  UserCircle
} from "lucide-react";

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: UserCircle },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Phone },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Find active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/30 backdrop-blur-xl border-b border-white/20 shadow-xl py-2' 
        : 'bg-background/20 backdrop-blur-lg border-b border-white/10 shadow-lg py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >

            <div className="hidden sm:block">
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Pandu Satria Permana
              </div>
              <div className="text-xs text-muted-foreground">Game Developer</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-4 py-2 rounded-lg transition-all duration-300 group
                    ${isActive 
                      ? 'text-primary bg-primary/10 shadow-sm' 
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 p-1 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors group">
                  <div className="hidden md:flex items-center gap-1">
                    <Badge variant="secondary" className="text-xs bg-chart-1/20 text-chart-1 border-chart-1/20">
                      Available
                    </Badge>
                  </div>
                </div>
              </DropdownMenuTrigger>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background/80 backdrop-blur-xl border-white/20">
                <div className="flex flex-col h-full">
                  <div className="flex items-center p-4 gap-3 pb-6 border-b border-white/10">
                    <Avatar className="w-12 h-12 border-2 border-white/20">
                      <AvatarImage src="" alt="Profile" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-chart-1 text-white">
                        PSP
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Pandu Satria Permana</div>
                      <div className="text-sm text-muted-foreground">Game Developer</div>
                      <Badge variant="secondary" className="text-xs bg-chart-1/20 text-chart-1 border-chart-1/20 mt-1">
                        Available for work
                      </Badge>
                    </div>
                  </div>

                  <nav className="flex-1 py-6">
                    <div className="space-y-2">
                      {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`
                              w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                              ${isActive 
                                ? 'text-primary bg-primary/10 shadow-sm border border-primary/20' 
                                : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                              }
                            `}
                          >
                            <Icon className="w-5 h-5" />
                            <span>{item.label}</span>
                            {isActive && (
                              <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </nav>

                  <div className="pt-6 border-t p-3 border-white/10 space-y-4">
                    <Button
                      onClick={toggleTheme}
                      variant="outline"
                      className="w-full gap-2 bg-background/50 border-white/20"
                    >
                      {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                    <Button
                      onClick={() => scrollToSection('contact')}
                      className="w-full gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Get In Touch
                    </Button>

                    {/* Social Links */}
                  <div className="pt-4 border-t border-white/10 flex flex-col items-center">
                      <p className="text-sm text-muted-foreground mb-3 text-center">Connect with me</p>
                      <div className="flex gap-3">
                        <Button variant="ghost" size="icon" asChild className="w-10 h-10">
                          <a href="https://github.com/zxwyvern" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild className="w-10 h-10">
                          <a href="https://www.instagram.com/schreinaa/">
                            <Instagram className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
