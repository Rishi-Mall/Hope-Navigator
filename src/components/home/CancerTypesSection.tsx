import { cancerTypes } from "@/data/cancerData";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CancerTypesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  // Show only the first 6 on the homepage
  const displayed = cancerTypes.slice(0, 6);

  return (
    <section id="cancer-types" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Major Cancer Types</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Understanding different cancer types is the first step toward prevention and early detection.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((cancer, i) => (
            <Link
              key={cancer.id}
              to={`/education?q=${cancer.id}`}
              className={`group bg-card rounded-xl border border-border p-6 hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cancer.color} flex items-center justify-center text-2xl mb-4`}>
                {cancer.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cancer.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{cancer.shortDesc}</p>
              <span className="inline-flex items-center text-sm text-primary font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CancerTypesSection;
