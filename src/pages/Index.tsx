import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResearchFocus from "@/components/ResearchFocus";
import Publications from "@/components/Publications";
import Team from "@/components/Team";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ResearchFocus />
        <Publications />
        <Team />
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
