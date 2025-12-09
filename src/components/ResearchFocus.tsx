import { Brain, Boxes, Network, Sparkles, Shield, Calculator } from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    title: "Reasoning & Cognitive Modeling",
    description: "Building AI systems that mirror human-like reasoning processes, from intuition to deliberate analysis.",
  },
  {
    icon: Boxes,
    title: "Paradox-Resistant Architecture",
    description: "Designing neural architectures capable of processing contradictory information without logical collapse.",
  },
  {
    icon: Network,
    title: "Multi-Agent System Behavior",
    description: "Studying emergent intelligence in systems where multiple AI agents interact and coordinate.",
  },
  {
    icon: Sparkles,
    title: "Uncertainty & Emergence",
    description: "Modeling uncertainty quantification and understanding how complex behaviors emerge from simple rules.",
  },
  {
    icon: Shield,
    title: "Scientific AI Alignment",
    description: "Ensuring AI systems remain aligned with human values while pursuing scientific discovery.",
  },
  {
    icon: Calculator,
    title: "Mathematical & Philosophical Logic",
    description: "Integrating formal logic systems with neural computation for rigorous reasoning capabilities.",
  },
];

const ResearchFocus = () => {
  return (
    <section id="research" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight">
            Research Focus
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our work spans foundational problems in intelligence, from cognitive architectures 
            to the philosophy of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className="group p-8 rounded-xl bg-card border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/10">
                <area.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-medium mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchFocus;
