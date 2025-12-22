import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const team = [
  {
    name: "Anupam Singh",
    role: "Founder & Research Director",
    bio: "Founder of Paradoxai Lab. Leading research on paradox-tolerant AI architectures, reasoning under uncertainty, and next-generation cognitive systems.",
  },
  {
    name: "Dr. Marcus Rodriguez",
    role: "Principal Scientist",
    bio: "Previously at OpenAI research. Specializes in cognitive modeling and emergent behavior in complex systems.",
  },
  {
    name: "Dr. Sanjay Patel",
    role: "Research Scientist",
    bio: "Expert in multi-agent systems and game theory. PhD from Stanford in Computer Science with focus on AI alignment.",
  },
  {
    name: "Dr. Lisa Kim",
    role: "Research Scientist",
    bio: "Background in mathematical logic and formal verification. Working on integrating philosophical reasoning into neural systems.",
  },
];

const Team = () => {
  const { ref, isVisible, getItemDelay } = useStaggeredAnimation(team.length);

  return (
    <section id="team" className="section-padding">
      <div className="section-container" ref={ref}>
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight">
            Our Team
          </h2>
          <p className="mt-4 text-muted-foreground">
            Researchers and scientists pushing the boundaries of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group p-8 rounded-xl bg-card border border-border/50 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={getItemDelay(index)}
            >
              <div className="w-16 h-16 rounded-full bg-secondary mb-6 flex items-center justify-center">
                <span className="text-xl font-heading font-semibold text-muted-foreground">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-lg font-heading font-medium">
                {member.name}
              </h3>
              <p className="text-sm text-accent mt-1">
                {member.role}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
