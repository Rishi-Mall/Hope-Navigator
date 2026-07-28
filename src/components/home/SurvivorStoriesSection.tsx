import { survivorStories } from "@/data/cancerData";
import { useState } from "react";
import { Quote, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SurvivorStoriesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-20 stat-gradient" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Survivor Stories</h2>
          <p className="text-muted-foreground">Real stories of courage, hope, and resilience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {survivorStories.map((story, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl border border-border p-6 hover-lift relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <img src={story.image} alt={story.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" loading="lazy" width={56} height={56} />
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{story.name}</h3>
                  <p className="text-xs text-primary">{story.cancer}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{story.snippet}</p>
              <button onClick={() => setExpanded(i)} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                Read full story →
              </button>
            </div>
          ))}
        </div>

        {expanded !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setExpanded(null)}>
            <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" />
            <div className="relative bg-card rounded-xl border border-border p-8 max-w-md mx-4 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setExpanded(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <img src={survivorStories[expanded].image} alt={survivorStories[expanded].name} className="w-16 h-16 rounded-full object-cover" width={64} height={64} />
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">{survivorStories[expanded].name}</h3>
                  <p className="text-sm text-primary">{survivorStories[expanded].cancer}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{survivorStories[expanded].fullStory}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurvivorStoriesSection;
