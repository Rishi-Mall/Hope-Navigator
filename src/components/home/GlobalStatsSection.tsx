import { globalStats } from "@/data/cancerData";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Activity, Heart } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AnimatedNumber = ({ target, suffix = "", active }: { target: number; suffix?: string; active: boolean }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const duration = 2000;
    const steps = 80;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  const format = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(0) + "K";
    return n.toString();
  };

  return <span>{format(count)}{suffix}</span>;
};

const stats = [
  { label: "Total Patients", value: globalStats.totalPatients, icon: Users, suffix: "+" },
  { label: "Yearly Cases", value: globalStats.yearlyCases, icon: TrendingUp, suffix: "+" },
  { label: "Yearly Deaths", value: globalStats.yearlyDeaths, icon: Activity, suffix: "+" },
  { label: "5-Year Survival", value: globalStats.survivalRate, icon: Heart, suffix: "%" },
];

const GlobalStatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 stat-gradient" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Global Cancer Statistics</h2>
          <p className="text-muted-foreground">Latest worldwide data on cancer incidence and impact</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-card rounded-xl border border-border p-5 text-center hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <stat.icon className={`h-8 w-8 text-primary mx-auto mb-3 transition-transform duration-700 ${isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"}`} style={{ transitionDelay: `${i * 150 + 300}ms` }} />
              <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} active={isVisible} />
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className={`bg-card rounded-xl border border-border p-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">Most Common Cancers (Annual Cases)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={globalStats.topCancers} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(215, 15%, 50%)" }} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(215, 15%, 50%)" }} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                <Tooltip formatter={(value: number) => [`${(value / 1000000).toFixed(2)}M cases`, "Cases"]} />
                <Line type="monotone" dataKey="cases" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 5, fill: "hsl(var(--primary))" }} activeDot={{ r: 7 }} animationDuration={2000} animationBegin={isVisible ? 0 : 99999} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalStatsSection;
