import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Abstract geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold leading-[1.1] tracking-tight animate-fade-up">
            AI Research for Complex and{" "}
            <span className="text-gradient">Paradoxical</span> Systems
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-1">
            We design AI models that reason beyond linear logic — exploring uncertainty, 
            emergence, and contradiction to advance the frontier of artificial intelligence.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
            <Button variant="hero" size="xl" className="group">
              Explore Our Research
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Collaborate With Us
            </Button>
          </div>

          <p className="mt-16 text-sm text-muted-foreground animate-fade-up-delay-3">
            Understanding complexity through next-generation artificial intelligence
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
