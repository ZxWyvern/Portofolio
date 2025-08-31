import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Global glass morphism background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none"></div>
      
      {/* Floating glass elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-40 w-60 h-60 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}