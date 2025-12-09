import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Lightbulb, Users, BookOpen, Compass } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Intellectual Rigor",
    description: "We pursue research with the precision of mathematicians and the curiosity of philosophers, never settling for surface-level understanding.",
  },
  {
    icon: Users,
    title: "Open Collaboration",
    description: "We believe the most challenging problems require diverse perspectives. We share our findings and welcome collaboration from the global research community.",
  },
  {
    icon: BookOpen,
    title: "Scientific Integrity",
    description: "Our work is grounded in reproducible research, peer review, and transparent methodology. We publish what we learn, including our failures.",
  },
  {
    icon: Compass,
    title: "Responsible Innovation",
    description: "We consider the long-term implications of our research, prioritizing safety and alignment alongside capability advancement.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="section-padding pt-16">
          <div className="section-container">
            <div className="max-w-4xl">
              <p className="text-accent font-medium mb-4 animate-fade-up">About Paradoxai Lab</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] tracking-tight animate-fade-up-delay-1">
                Understanding complexity through next-generation artificial intelligence
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed animate-fade-up-delay-2">
                Paradoxai Lab is an independent AI research institute focused on the mathematical 
                and cognitive foundations of intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-semibold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We explore foundational problems in intelligence, reasoning, causality, and paradoxical 
                  systems. Our goal is to build AI models that think more like scientists, philosophers, 
                  and mathematicians — systems capable of handling uncertainty, contradiction, and non-linear logic.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe next-generation AI must overcome logical paradox, uncertainty, and contradiction 
                  to truly understand the world. Our research pushes the boundaries of what artificial 
                  intelligence can reason about and comprehend.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-semibold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We envision a future where AI systems can engage with the full complexity of reality — 
                  navigating ambiguity, resolving contradictions, and generating novel insights that 
                  advance human knowledge.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our work lies at the intersection of deep learning, logic, simulation, alignment, 
                  multi-agent systems, and scientific cognition. We develop models capable of reasoning 
                  under uncertainty, contradiction, and emergent complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight mb-4">
                What We Do
              </h2>
              <p className="text-muted-foreground">
                Our research spans multiple domains, all unified by the goal of creating 
                more capable and aligned AI systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-heading font-medium mb-3">Fundamental AI Research</h3>
                <p className="text-sm text-muted-foreground">
                  Research in reasoning, cognition, and neural architecture design that pushes 
                  the boundaries of machine intelligence.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-heading font-medium mb-3">Paradox-Tolerant Models</h3>
                <p className="text-sm text-muted-foreground">
                  Development of models that can interpret paradoxes, ambiguous data, and 
                  conflicting information without logical breakdown.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-heading font-medium mb-3">Simulation Engines</h3>
                <p className="text-sm text-muted-foreground">
                  Building engines for complex systems, uncertainty modeling, and understanding 
                  emergent behavior in dynamic environments.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-heading font-medium mb-3">Applied Research</h3>
                <p className="text-sm text-muted-foreground">
                  Work in alignment, decision-making, robotics cognition, and multi-agent 
                  interactions with real-world applications.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 md:col-span-2">
                <h3 className="font-heading font-medium mb-3">Open Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Partnership with universities, researchers, and scientific partners worldwide 
                  to accelerate progress in AI research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide our research and define our culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="flex gap-5">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex-shrink-0 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight mb-4">
                Join Our Mission
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented researchers and collaborators who share 
                our vision for the future of AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="group" asChild>
                  <a href="/#collaborate">
                    Collaborate With Us
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="/#research">View Our Research</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
