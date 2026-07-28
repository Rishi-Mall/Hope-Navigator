import { useState } from "react";
import { Search, X, BookOpen, Dna, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GlobalSearchProps {
  open: boolean;
  onClose: () => void;
}

const searchItems = [
  { type: "cancer", icon: BookOpen, label: "Lung Cancer", desc: "Education & information", path: "/education?q=lung" },
  { type: "cancer", icon: BookOpen, label: "Breast Cancer", desc: "Education & information", path: "/education?q=breast" },
  { type: "cancer", icon: BookOpen, label: "Prostate Cancer", desc: "Education & information", path: "/education?q=prostate" },
  { type: "cancer", icon: BookOpen, label: "Skin Cancer", desc: "Education & information", path: "/education?q=skin" },
  { type: "cancer", icon: BookOpen, label: "Colon Cancer", desc: "Education & information", path: "/education?q=colon" },
  { type: "cancer", icon: BookOpen, label: "Blood Cancer", desc: "Education & information", path: "/education?q=blood" },
  { type: "gene", icon: Dna, label: "BRCA1 Gene", desc: "Research & genetics", path: "/research?q=BRCA1" },
  { type: "gene", icon: Dna, label: "TP53 Gene", desc: "Research & genetics", path: "/research?q=TP53" },
  { type: "research", icon: FileText, label: "Immunotherapy Research", desc: "Latest papers", path: "/research?q=immunotherapy" },
];

const GlobalSearch = ({ open, onClose }: GlobalSearchProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  if (!open) return null;

  const filtered = searchItems.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg mx-4 bg-card rounded-xl shadow-2xl border border-border overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            autoFocus
            placeholder="Search cancer types, genes, research..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
          />
          <button onClick={onClose}>
            <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-8 text-sm">No results found</p>
          ) : (
            filtered.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  navigate(item.path);
                  onClose();
                  setQuery("");
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <item.icon className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
