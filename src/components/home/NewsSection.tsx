import { researchNews } from "@/data/cancerData";
import { ExternalLink, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const NewsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Latest Research News</h2>
          <p className="text-muted-foreground">Breaking discoveries in cancer research</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchNews.map((news, i) => (
            <a
              key={i}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-card rounded-xl border border-border p-6 hover-lift block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(news.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {news.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{news.summary}</p>
              <span className="inline-flex items-center text-sm text-primary font-medium">
                Read more <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
