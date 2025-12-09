import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, GraduationCap, Users } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const collaborationTypes = [
  {
    icon: GraduationCap,
    title: "Academic Partners",
    description: "Joint research programs with universities and academic institutions.",
  },
  {
    icon: Building2,
    title: "Industry Research",
    description: "Applied research collaborations with technology companies.",
  },
  {
    icon: Users,
    title: "Independent Researchers",
    description: "Open collaboration opportunities for independent researchers.",
  },
];

const Collaboration = () => {
  const { ref, isVisible, getItemDelay } = useStaggeredAnimation(collaborationTypes.length);

  return (
    <section id="collaborate" className="section-padding bg-secondary/30">
      <div className="section-container" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight">
              Collaborate With Us
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We believe in open science and collaborative research. Join us in exploring 
              the frontiers of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {collaborationTypes.map((type, index) => (
              <div
                key={type.title}
                className={`text-center p-6 rounded-xl bg-card border border-border/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={getItemDelay(index)}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary mx-auto flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-heading font-medium mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>

          <div 
            className={`text-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-muted-foreground mb-6">
              Interested in working with us? We're always looking for talented researchers 
              and partners who share our vision.
            </p>
            <Button variant="hero" size="xl" className="group">
              Request Collaboration
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
