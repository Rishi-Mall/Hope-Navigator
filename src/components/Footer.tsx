import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-heading font-bold text-xl mb-3">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <span className="text-gradient">CancerAware</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Empowering people with knowledge about cancer prevention, education, and the latest research breakthroughs.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-foreground">Navigate</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/education" className="hover:text-primary transition-colors">Education</Link>
            <Link to="/research" className="hover:text-primary transition-colors">Research</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-foreground">Resources</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="https://www.who.int/health-topics/cancer" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WHO Cancer</a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">PubMed</a>
            <a href="https://www.cancer.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Cancer.org</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CancerAware. For educational purposes only. Not medical advice.
      </div>
    </div>
  </footer>
);

export default Footer;
