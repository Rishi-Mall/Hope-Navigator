import { useParams, Link } from "react-router-dom";
import { statesCancerData } from "@/data/statesCancerData";
import { ArrowLeft, Users, Activity, Hospital, HeartPulse, TrendingUp, TrendingDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, Legend,
} from "recharts";

const COLORS = [
  "hsl(205, 70%, 50%)", "hsl(340, 65%, 50%)", "hsl(160, 60%, 45%)",
  "hsl(45, 80%, 50%)", "hsl(280, 55%, 55%)", "hsl(15, 75%, 50%)",
  "hsl(190, 60%, 45%)", "hsl(100, 50%, 45%)", "hsl(0, 0%, 60%)",
];

const StateDetail = () => {
  const { stateName } = useParams();
  const decoded = decodeURIComponent(stateName || "");
  const data = statesCancerData[decoded];
  const { ref, isVisible } = useScrollAnimation(0.1);

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">State not found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </main>
    );
  }

  const malePercent = ((data.male / data.totalCases) * 100).toFixed(1);
  const femalePercent = ((data.female / data.totalCases) * 100).toFixed(1);

  const genderData = [
    { name: "Male", value: data.male },
    { name: "Female", value: data.female },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            {decoded} — Cancer Statistics
          </h1>
          <p className="text-muted-foreground mb-8">
            Comprehensive cancer distribution, demographics, and trends for {decoded}
          </p>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Users, label: "Total Cases", value: data.totalCases.toLocaleString(), color: "text-primary" },
              { icon: Activity, label: "Rate per 100K", value: data.rate.toString(), color: "text-orange-500" },
              { icon: Hospital, label: "Treatment Centers", value: data.treatmentCenters.toString(), color: "text-emerald-500" },
              { icon: HeartPulse, label: "Survival Rate", value: `${data.survivalRate}%`, color: "text-rose-500" },
            ].map((card) => (
              <div key={card.label} className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-lg transition-shadow">
                <card.icon className={`w-6 h-6 mx-auto mb-2 ${card.color}`} />
                <p className="text-2xl font-bold text-foreground">{card.value}</p>
                <p className="text-xs text-muted-foreground">{card.label}</p>
              </div>
            ))}
          </div>

          {/* Gender Split + Mortality */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {/* Gender Pie */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Gender Distribution</h2>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={genderData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    <Cell fill="hsl(205, 70%, 50%)" />
                    <Cell fill="hsl(340, 65%, 55%)" />
                  </Pie>
                  <Tooltip formatter={(v: number) => v.toLocaleString()} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-2 text-sm">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full" style={{ background: "hsl(205,70%,50%)" }} /> Male: {malePercent}%</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full" style={{ background: "hsl(340,65%,55%)" }} /> Female: {femalePercent}%</span>
              </div>
            </div>

            {/* Mortality & Survival */}
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-6">Mortality vs Survival</h2>
              <div className="flex gap-8">
                <div className="text-center">
                  <TrendingDown className="w-8 h-8 mx-auto text-rose-500 mb-2" />
                  <p className="text-3xl font-bold text-rose-500">{data.mortalityRate}%</p>
                  <p className="text-xs text-muted-foreground">Mortality Rate</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
                  <p className="text-3xl font-bold text-emerald-500">{data.survivalRate}%</p>
                  <p className="text-xs text-muted-foreground">Survival Rate</p>
                </div>
              </div>
            </div>

            {/* Age Group Bar */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Age Group Distribution</h2>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={data.ageGroups}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="group" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(v: number) => v.toLocaleString()} />
                  <Bar dataKey="cases" fill="hsl(205, 70%, 50%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cancer Types Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* Pie Chart */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Cancer Types Distribution</h2>
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie data={data.topCancers} dataKey="cases" nameKey="type" cx="50%" cy="50%" outerRadius={110} label={({ type, percentage }) => `${type} ${percentage}%`}>
                    {data.topCancers.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => v.toLocaleString()} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Ranked List */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Cancer Types Ranking</h2>
              <div className="space-y-3">
                {data.topCancers.map((cancer, i) => (
                  <div key={cancer.type} className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: COLORS[i % COLORS.length] }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <p className="text-sm font-medium text-foreground">{cancer.type}</p>
                        <p className="text-xs text-muted-foreground">{cancer.cases.toLocaleString()} ({cancer.percentage}%)</p>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${cancer.percentage}%`,
                            backgroundColor: COLORS[i % COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Yearly Trend */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Yearly Case Trend (2018–2023)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.yearlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(v: number) => v.toLocaleString()} />
                <Legend />
                <Line type="monotone" dataKey="cases" stroke="hsl(205, 70%, 50%)" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StateDetail;
