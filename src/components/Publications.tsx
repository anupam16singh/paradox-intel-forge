import { Button } from "@/components/ui/button";
import { FileText, ArrowUpRight } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const publications = [
  {
    title: "ParadoxAI Decision Intelligence Architecture",
    authors: "Anupam Singh",
    venue: "Paradoxai Lab Whitepaper",
    type: "Whitepaper",
    date: "Aug 2025",
    description: "A system-level product architecture that translates decision intelligence research into a deployable, human-in-the-loop AI platform. The architecture separates data ingestion, regime awareness, decision representation, robustness evaluation, and human judgment to support safer decision-making without automated execution.",
    link: "https://github.com/anupam16singh/AIDE-Decision-Intelligence-Operating-System",
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
            <a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-6 rounded-xl bg-card border border-border/50 hover:border-border transition-all duration-700 ${
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
                    <span className="text-xs text-muted-foreground">
                      {pub.date}
                    </span>
                  </div>
                  <h3 className="text-base font-medium group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground/80 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0" />
              </div>
            </a>
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
