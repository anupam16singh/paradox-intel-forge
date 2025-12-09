import { Button } from "@/components/ui/button";
import { FileText, ArrowUpRight } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const publications = [
  {
    title: "Paradox-Tolerant Neural Networks: A New Paradigm for Contradictory Data Processing",
    authors: "A. Chen, M. Rodriguez, S. Patel",
    venue: "NeurIPS 2024",
    type: "Conference Paper",
  },
  {
    title: "Emergent Reasoning in Multi-Agent Systems Under Uncertainty",
    authors: "S. Patel, L. Kim, A. Chen",
    venue: "ICML 2024",
    type: "Conference Paper",
  },
  {
    title: "Cognitive Architectures for Scientific Discovery: A Survey",
    authors: "M. Rodriguez, J. Thompson",
    venue: "Paradoxai Lab Technical Report",
    type: "Technical Report",
  },
  {
    title: "Alignment Through Philosophical Reasoning: Integrating Ethics into Neural Computation",
    authors: "L. Kim, A. Chen, M. Rodriguez",
    venue: "AAAI 2024",
    type: "Conference Paper",
  },
];

const Publications = () => {
  const { ref, isVisible, getItemDelay } = useStaggeredAnimation(publications.length);

  return (
    <section id="publications" className="section-padding bg-secondary/30">
      <div className="section-container" ref={ref}>
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight">
            Publications
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our research contributions to the scientific community.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl bg-card border border-border/50 hover:border-border cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={getItemDelay(index)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                      {pub.type}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {pub.venue}
                    </span>
                  </div>
                  <h3 className="text-base font-medium group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button variant="heroOutline" size="lg">
            <FileText className="w-4 h-4 mr-2" />
            View All Papers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
