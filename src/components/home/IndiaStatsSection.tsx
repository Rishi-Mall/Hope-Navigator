import { indiaStats } from "@/data/cancerData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const genderData = [
  { name: "Male", value: indiaStats.maleToFemale.male, color: "hsl(205, 85%, 45%)" },
  { name: "Female", value: indiaStats.maleToFemale.female, color: "hsl(330, 70%, 55%)" },
];

const IndiaStatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">India Cancer Statistics</h2>
          <p className="text-muted-foreground">State-wise, gender, and age group distribution in India</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`lg:col-span-2 bg-card rounded-xl border border-border p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">State-wise Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={indiaStats.stateData} layout="vertical" margin={{ left: 20 }}>
                  <XAxis type="number" tick={{ fontSize: 11, fill: "hsl(215, 15%, 50%)" }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                  <YAxis type="category" dataKey="state" tick={{ fontSize: 11, fill: "hsl(215, 15%, 50%)" }} width={100} />
                  <Tooltip formatter={(value: number) => [`${(value / 1000).toFixed(0)}K`, "Cases"]} />
                  <Bar dataKey="cases" fill="hsl(205, 85%, 45%)" radius={[0, 6, 6, 0]} animationDuration={2000} animationBegin={isVisible ? 0 : 99999} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={`bg-card rounded-xl border border-border p-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Gender Distribution</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={genderData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" label={({ name, value }) => `${name}: ${value}%`} animationDuration={1500} animationBegin={isVisible ? 200 : 99999}>
                    {genderData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className={`mt-6 bg-card rounded-xl border border-border p-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Age Group Distribution</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {indiaStats.ageGroups.map((ag, i) => (
              <div key={ag.group} className="text-center">
                <div className="w-20 bg-muted rounded-lg overflow-hidden mx-auto mb-2" style={{ height: 120 }}>
                  <div
                    className="w-full bg-primary rounded-t-lg transition-all ease-out"
                    style={{
                      height: isVisible ? `${ag.percentage * 2.5}%` : "0%",
                      marginTop: isVisible ? `${100 - ag.percentage * 2.5}%` : "100%",
                      transitionDuration: "1200ms",
                      transitionDelay: `${700 + i * 150}ms`,
                    }}
                  />
                </div>
                <p className={`font-semibold text-sm text-foreground transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${900 + i * 150}ms` }}>
                  {ag.percentage}%
                </p>
                <p className="text-xs text-muted-foreground">{ag.group} yrs</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaStatsSection;
