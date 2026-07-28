import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stateData: Record<string, { cases: number; rate: number }> = {
  "Uttar Pradesh": { cases: 210000, rate: 85 },
  "Maharashtra": { cases: 165000, rate: 95 },
  "West Bengal": { cases: 142000, rate: 110 },
  "Kerala": { cases: 98000, rate: 135 },
  "Tamil Nadu": { cases: 95000, rate: 100 },
  "Karnataka": { cases: 88000, rate: 90 },
  "Rajasthan": { cases: 78000, rate: 72 },
  "Gujarat": { cases: 75000, rate: 82 },
  "Madhya Pradesh": { cases: 72000, rate: 68 },
  "Bihar": { cases: 70000, rate: 55 },
  "Andhra Pradesh": { cases: 65000, rate: 88 },
  "Odisha": { cases: 55000, rate: 78 },
  "Assam": { cases: 48000, rate: 95 },
  "Punjab": { cases: 45000, rate: 105 },
  "Jharkhand": { cases: 38000, rate: 65 },
  "Telangana": { cases: 52000, rate: 92 },
  "Delhi": { cases: 32000, rate: 120 },
  "Mizoram": { cases: 8500, rate: 180 },
};

const getColor = (cases: number) => {
  if (cases >= 150000) return "hsl(0, 70%, 45%)";
  if (cases >= 100000) return "hsl(15, 75%, 50%)";
  if (cases >= 70000) return "hsl(30, 80%, 55%)";
  if (cases >= 40000) return "hsl(45, 80%, 55%)";
  return "hsl(205, 60%, 60%)";
};

const IndiaMapSection = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const navigate = useNavigate();

  const sortedStates = Object.entries(stateData).sort((a, b) => b[1].cases - a[1].cases);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            India Cancer Distribution Map
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interactive overview of estimated cancer cases across Indian states
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map visualization */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">State-wise Heatmap</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {sortedStates.map(([state, data]) => (
                <div
                  key={state}
                  className="relative rounded-lg p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: getColor(data.cases) }}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => navigate(`/state/${encodeURIComponent(state)}`)}
                >
                  <p className="text-[10px] sm:text-xs font-bold text-white leading-tight truncate">{state}</p>
                  <p className="text-[10px] text-white/80">{(data.cases / 1000).toFixed(0)}K</p>
                  {hoveredState === state && (
                    <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-popover border border-border rounded-lg p-3 shadow-xl whitespace-nowrap animate-fade-in">
                      <p className="text-sm font-bold text-foreground">{state}</p>
                      <p className="text-xs text-muted-foreground">Cases: {data.cases.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Rate: {data.rate} per 100K</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 mt-6 text-xs text-muted-foreground">
              <span className="font-semibold">Cases:</span>
              {[
                { label: "150K+", color: "hsl(0, 70%, 45%)" },
                { label: "100K+", color: "hsl(15, 75%, 50%)" },
                { label: "70K+", color: "hsl(30, 80%, 55%)" },
                { label: "40K+", color: "hsl(45, 80%, 55%)" },
                { label: "<40K", color: "hsl(205, 60%, 60%)" },
              ].map((l) => (
                <span key={l.label} className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded" style={{ backgroundColor: l.color }} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          {/* Ranking table */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">State Rankings</h3>
            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-2">
              {sortedStates.map(([state, data], i) => (
                <div
                  key={state}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                    hoveredState === state ? "bg-primary/10" : "hover:bg-muted"
                  }`}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => navigate(`/state/${encodeURIComponent(state)}`)}
                >
                  <span className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{state}</p>
                    <div className="w-full bg-muted rounded-full h-1.5 mt-1">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${(data.cases / sortedStates[0][1].cases) * 100}%`,
                          backgroundColor: getColor(data.cases),
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{(data.cases / 1000).toFixed(0)}K</p>
                    <p className="text-[10px] text-muted-foreground">{data.rate}/100K</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMapSection;
