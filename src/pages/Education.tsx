import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { cancerTypes } from "@/data/cancerData";
import { Search, AlertTriangle, Stethoscope, ShieldAlert, Microscope, Pill } from "lucide-react";

const Education = () => {
  const [searchParams] = useSearchParams();
  const initialQ = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQ);

  const filtered = useMemo(() => {
    if (!query) return cancerTypes;
    return cancerTypes.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.id.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const sections = [
    { key: "causes", label: "Causes", icon: AlertTriangle },
    { key: "symptoms", label: "Symptoms", icon: Stethoscope },
    { key: "riskFactors", label: "Risk Factors", icon: ShieldAlert },
    { key: "diagnosis", label: "Diagnosis", icon: Microscope },
    { key: "treatments", label: "Treatments", icon: Pill },
  ] as const;

  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">Cancer Education</h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Search and explore detailed information about different cancer types, their causes, symptoms, and treatments.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search any cancer type..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No cancer types found matching "{query}"</p>
        ) : (
          <div className="space-y-8">
            {filtered.map((cancer) => (
              <div key={cancer.id} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className={`bg-gradient-to-r ${cancer.color} p-6 flex items-center gap-4`}>
                  <span className="text-4xl">{cancer.icon}</span>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">{cancer.name}</h2>
                    <p className="text-sm text-muted-foreground">{cancer.shortDesc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border">
                  {sections.map(({ key, label, icon: Icon }) => (
                    <div key={key} className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="h-4 w-4 text-primary" />
                        <h3 className="font-heading font-semibold text-sm text-foreground">{label}</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {(cancer[key] as string[]).map((item, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Education;
