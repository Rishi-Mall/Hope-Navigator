import { doctors } from "@/data/cancerData";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DoctorsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-20 stat-gradient" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Consult Our Experts</h2>
          <p className="text-muted-foreground">Connect with leading oncologists for guidance and support</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl border border-border p-6 text-center hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-3 border-primary/20" loading="lazy" width={96} height={96} />
              <h3 className="font-heading font-semibold text-lg text-foreground">{doc.name}</h3>
              <p className="text-sm text-primary mb-1">{doc.specialization}</p>
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                <Clock className="h-3 w-3" /> {doc.experience} experience
              </div>
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-4">
                <MapPin className="h-3 w-3" /> {doc.hospital}
              </div>
              <Button size="sm" className="w-full">
                <Phone className="mr-2 h-4 w-4" /> Book Consultation
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
