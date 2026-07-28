import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 hero-gradient opacity-80" />
    </div>
    <div className="relative container mx-auto px-4 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/10">
          Knowledge is the first step toward prevention
        </span>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
          Fight Cancer with <br />
          <span className="text-accent">Awareness</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Explore cancer types, latest research, global statistics, and survivor stories.
          Empowering everyone with knowledge for a healthier tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
            <Link to="/education">
              <BookOpen className="mr-2 h-5 w-5" /> Learn About Cancer
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
            <Link to="/research">
              <Search className="mr-2 h-5 w-5" /> Explore Research
            </Link>
          </Button>
        </div>
      </div>
      <a href="#cancer-types" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float">
        <ArrowDown className="h-6 w-6" />
      </a>
    </div>
  </section>
);

export default HeroSection;
