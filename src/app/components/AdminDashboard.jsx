import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Users, Package, TrendingUp, AlertCircle, Activity, CheckCircle2, User, Fingerprint } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import AnimatedList from "./AnimatedList";
import AnimatedContent from "./AnimatedContent";
import { useState } from "react";
export function AdminDashboard() {
  const [authenticatedBeneficiary, setAuthenticatedBeneficiary] = useState(null);
  const stats = [
    { title: "Active Beneficiaries", value: "12,456", change: "+5.2%", icon: Users, color: "text-blue-600" },
    { title: "Total Distributions", value: "8,234", change: "+12.8%", icon: Package, color: "text-green-600" },
    { title: "Inventory Level", value: "87%", change: "-3.1%", icon: TrendingUp, color: "text-purple-600" },
    { title: "Pending Requests", value: "42", change: "-18.5%", icon: AlertCircle, color: "text-orange-600" },
  ];
  const monthlyDistribution = [
    { month: "Aug", rice: 45000, wheat: 35000, sugar: 15000 },
    { month: "Sep", rice: 48000, wheat: 37000, sugar: 16000 },
    { month: "Oct", rice: 52000, wheat: 39000, sugar: 17500 },
    { month: "Nov", rice: 49000, wheat: 38000, sugar: 16800 },
    { month: "Dec", rice: 54000, wheat: 41000, sugar: 18200 },
    { month: "Jan", rice: 57000, wheat: 43000, sugar: 19000 },
  ];
  const dispensingCenters = [
    { name: "North Zone", value: 3200, status: "Operational" },
    { name: "South Zone", value: 2800, status: "Operational" },
    { name: "East Zone", value: 2400, status: "Operational" },
    { name: "West Zone", value: 2100, status: "Maintenance" },
  ];
  const categoryDistribution = [
    { name: "AAY", value: 4200, color: "#3b82f6" },
    { name: "PHH", value: 3800, color: "#10b981" },
    { name: "BPL", value: 2900, color: "#f59e0b" },
    { name: "APL", value: 1556, color: "#8b5cf6" },
  ];
  const recentActivity = [
    { time: "2 min ago", action: "Ration dispensed", user: "Center #45", detail: "5kg Rice, 3kg Wheat", status: "success", beneficiary: "Rajesh Kumar" },
    { time: "5 min ago", action: "Biometric verified", user: "BEN2024-789123", detail: "Fingerprint match", status: "success", beneficiary: "Priya Sharma" },
    { time: "8 min ago", action: "Low stock alert", user: "Center #23", detail: "Sugar below 20%", status: "warning", beneficiary: null },
    { time: "12 min ago", action: "New registration", user: "BEN2024-789456", detail: "Family of 4", status: "info", beneficiary: null },
    { time: "15 min ago", action: "Ration dispensed", user: "Center #67", detail: "10kg Rice, 5kg Wheat", status: "success", beneficiary: "Amit Patel" },
    { time: "18 min ago", action: "Biometric verified", user: "BEN2024-234567", detail: "Fingerprint match", status: "success", beneficiary: "Sunita Devi" },
    { time: "22 min ago", action: "Ration dispensed", user: "Center #45", detail: "3kg Sugar, 1L Oil", status: "success", beneficiary: "Meena Kumari" },
  ];
  const handleActivityClick = (activity) => {
    if (activity.status === "success" && activity.action === "Biometric verified") {
      // Simulate authenticated beneficiary data
      setAuthenticatedBeneficiary({
        name: activity.beneficiary || "Unknown",
        id: activity.user,
        rationCard: "AAY-MH-2024-456789",
        category: "Priority Household",
        familyMembers: 4,
        remainingQuota: {
          rice: "8 kg",
          wheat: "7 kg",
          sugar: "2 kg",
          oil: "1 L"
        }
      });
    }
  };
  return (<div className="flex gap-6">
    {/* Main Content */}
    <div className="flex-1 space-y-6">
      {/* Real-time Activity Feed - PRIORITY SECTION */}
      <AnimatedContent distance={50} direction="vertical">
        <Card className="border-2 border-blue-500 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-b border-blue-800/30">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Real-time Activity Feed</div>
                  <div className="text-xs font-normal text-muted-foreground mt-0.5">Live system monitoring</div>
                </div>
              </CardTitle>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                <span className="text-sm font-medium text-emerald-400">Live</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <AnimatedList
              items={recentActivity}
              className="w-full h-[500px]"
              displayScrollbar={true}
              onItemSelect={(activity) => handleActivityClick(activity)}
              renderItem={(activity, index, isSelected) => (
                <div
                  className={`flex items-start gap-3 pb-4 border-b last:border-b-0 border-white/10 ${activity.status === 'success' && activity.action === 'Biometric verified'
                    ? 'cursor-pointer hover:bg-blue-500/10 p-3 rounded-lg -m-3 mb-1 ' + (isSelected ? 'bg-blue-500/20' : '')
                    : 'p-3 hover:bg-white/5 rounded-lg -m-3 mb-1'
                    }`}
                >
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'warning' ? 'bg-orange-500' :
                      'bg-blue-500'
                    }`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-sm text-white">{activity.action}</p>
                      <span className="text-xs text-slate-400 flex-shrink-0">{activity.time}</span>
                    </div>
                    <p className="text-sm text-slate-400">{activity.user}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.detail}</p>
                  </div>
                  {activity.status === 'success' && activity.action === 'Biometric verified' && (
                    <Fingerprint className="w-4 h-4 text-blue-500" />
                  )}
                </div>
              )}
            />
          </CardContent>
        </Card>
      </AnimatedContent>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <AnimatedContent key={index} delay={index * 0.05} distance={30}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-semibold">{stat.value}</p>
                      <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg bg-muted/50 ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedContent>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Distribution Trend */}
        <AnimatedContent distance={50} delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Monthly Distribution Trend (kg)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="rice" stroke="#3b82f6" strokeWidth={2} name="Rice" />
                  <Line type="monotone" dataKey="wheat" stroke="#10b981" strokeWidth={2} name="Wheat" />
                  <Line type="monotone" dataKey="sugar" stroke="#f59e0b" strokeWidth={2} name="Sugar" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </AnimatedContent>

        {/* Category Distribution */}
        <AnimatedContent distance={50} delay={0.15}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Beneficiary Category Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={categoryDistribution} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                    {categoryDistribution.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {categoryDistribution.map((cat, index) => (<div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-sm">{cat.name}: {cat.value}</span>
                </div>))}
              </div>
            </CardContent>
          </Card>
        </AnimatedContent>
      </div>

      {/* Dispensing Centers Status */}
      <AnimatedContent distance={50} delay={0.2}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Dispensing Centers Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={dispensingCenters}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {dispensingCenters.map((center, index) => (<div key={index} className="flex items-center justify-between text-sm">
                <span>{center.name}</span>
                <Badge className={center.status === "Operational" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}>
                  {center.status}
                </Badge>
              </div>))}
            </div>
          </CardContent>
        </Card>
      </AnimatedContent>

      {/* System Health */}
      <AnimatedContent distance={30} delay={0.25}>
        <Card className="bg-green-500/10 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">System Status: All Services Operational</h3>
                <p className="text-sm text-green-700 mt-1">
                  Last updated: {new Date().toLocaleString()} • 124 active dispensing units • 99.8% uptime
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedContent>
    </div>

    {/* Right Side Panel - Beneficiary Summary (shown after authentication) */}
    {authenticatedBeneficiary && (<div className="w-80 flex-shrink-0">
      <div className="sticky top-6 space-y-4">
        <AnimatedContent distance={30} direction="horizontal" delay={0.1}>
          <Card className="border-green-500 border-2">
            <CardHeader className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 pb-4 border-b border-green-800/30">
              <div className="flex items-start justify-between">
                <CardTitle className="flex items-center gap-2 text-sm text-green-100">
                  <div className="p-1.5 bg-green-600 rounded">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  Authenticated
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setAuthenticatedBeneficiary(null)} className="h-6 px-2 text-xs">
                  Clear
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {/* Beneficiary Avatar */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">{authenticatedBeneficiary.name}</h3>
                    <p className="text-sm text-slate-400">{authenticatedBeneficiary.id}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Ration Card</span>
                    <span className="font-medium text-sm text-slate-200">{authenticatedBeneficiary.rationCard}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Category</span>
                    <span className="font-medium text-sm text-slate-200">{authenticatedBeneficiary.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Family Members</span>
                    <span className="font-medium text-lg text-white">{authenticatedBeneficiary.familyMembers}</span>
                  </div>
                </div>

                {/* Remaining Quota */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-slate-200">Remaining Quota</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(authenticatedBeneficiary.remainingQuota).map(([item, quantity]) => (<div key={item} className="p-2 bg-blue-500/10 rounded border border-blue-500/30">
                      <p className="text-xs text-slate-400 capitalize">{item}</p>
                      <p className="text-sm font-semibold text-blue-300">{quantity}</p>
                    </div>))}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                  Proceed to Dispense
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedContent>

        {/* Quick Tip */}
        <AnimatedContent distance={30} direction="horizontal" delay={0.15}>
          <Card className="bg-blue-500/10 border-blue-200">
            <CardContent className="pt-4">
              <div className="flex items-start gap-2">
                <Fingerprint className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-300">
                  Click on any "Biometric verified" activity to view beneficiary details
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedContent>
      </div>
    </div>)}
  </div>);
}
