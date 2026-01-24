import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { Package, TrendingDown, TrendingUp, AlertTriangle, Box, RefreshCw } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function RationTracking() {
  const inventoryData = [
    { name: "Rice", current: 45000, capacity: 50000, unit: "kg", status: "optimal", trend: "+5%" },
    { name: "Wheat", current: 38000, capacity: 50000, unit: "kg", status: "optimal", trend: "+3%" },
    { name: "Sugar", current: 8000, capacity: 20000, unit: "kg", status: "low", trend: "-12%" },
    { name: "Cooking Oil", current: 3200, capacity: 10000, unit: "L", status: "critical", trend: "-18%" },
    { name: "Pulses", current: 12000, capacity: 15000, unit: "kg", status: "optimal", trend: "+8%" },
    { name: "Salt", current: 4500, capacity: 5000, unit: "kg", status: "optimal", trend: "+2%" },
  ];

  const weeklyConsumption = [
    { day: "Mon", rice: 7500, wheat: 6200, sugar: 2100, oil: 850 },
    { day: "Tue", rice: 8200, wheat: 6800, sugar: 2300, oil: 920 },
    { day: "Wed", rice: 7800, wheat: 6500, sugar: 2200, oil: 890 },
    { day: "Thu", rice: 8500, wheat: 7100, sugar: 2400, oil: 950 },
    { day: "Fri", rice: 9200, wheat: 7600, sugar: 2600, oil: 1020 },
    { day: "Sat", rice: 6800, wheat: 5900, sugar: 1900, oil: 780 },
    { day: "Sun", rice: 5200, wheat: 4500, sugar: 1500, oil: 620 },
  ];

  const supplierDeliveries = [
    { supplier: "National Food Corporation", item: "Rice", quantity: "10,000 kg", scheduled: "2026-01-22", status: "On Track" },
    { supplier: "State Procurement Agency", item: "Wheat", quantity: "8,500 kg", scheduled: "2026-01-23", status: "On Track" },
    { supplier: "Regional Oil Mills", item: "Cooking Oil", quantity: "2,000 L", scheduled: "2026-01-21", status: "Urgent" },
    { supplier: "Sugar Federation", item: "Sugar", quantity: "5,000 kg", scheduled: "2026-01-24", status: "On Track" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal": return "bg-green-100 text-green-700";
      case "low": return "bg-orange-100 text-orange-700";
      case "critical": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getDeliveryStatusColor = (status: string) => {
    switch (status) {
      case "On Track": return "bg-green-100 text-green-700";
      case "Urgent": return "bg-red-100 text-red-700";
      case "Delayed": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Inventory</p>
                <p className="text-2xl font-semibold mt-1">110.7T</p>
                <p className="text-xs text-green-600 mt-1">+4.2% this week</p>
              </div>
              <Package className="w-10 h-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Daily Dispensed</p>
                <p className="text-2xl font-semibold mt-1">8,234</p>
                <p className="text-xs text-green-600 mt-1">+12% from avg</p>
              </div>
              <Box className="w-10 h-10 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Low Stock Items</p>
                <p className="text-2xl font-semibold mt-1">2</p>
                <p className="text-xs text-orange-600 mt-1">Requires attention</p>
              </div>
              <AlertTriangle className="w-10 h-10 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Capacity</p>
                <p className="text-2xl font-semibold mt-1">74%</p>
                <p className="text-xs text-muted-foreground mt-1">Across all items</p>
              </div>
              <RefreshCw className="w-10 h-10 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Real-time Inventory Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {inventoryData.map((item, index) => {
              const percentage = (item.current / item.capacity) * 100;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="font-medium">{item.name}</div>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-right">
                      <div className="flex items-center gap-1 text-sm">
                        {item.trend.startsWith('+') ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                        <span className={item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                          {item.trend}
                        </span>
                      </div>
                      <div className="text-right min-w-[140px]">
                        <p className="font-semibold">
                          {item.current.toLocaleString()} / {item.capacity.toLocaleString()} {item.unit}
                        </p>
                        <p className="text-sm text-muted-foreground">{percentage.toFixed(1)}% capacity</p>
                      </div>
                    </div>
                  </div>
                  <Progress 
                    value={percentage} 
                    className={`h-3 ${
                      item.status === 'critical' ? '[&>*]:bg-red-500' : 
                      item.status === 'low' ? '[&>*]:bg-orange-500' : 
                      '[&>*]:bg-green-500/100'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Consumption Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Weekly Consumption Pattern
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={weeklyConsumption}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="rice" fill="#3b82f6" name="Rice (kg)" />
              <Bar dataKey="wheat" fill="#10b981" name="Wheat (kg)" />
              <Bar dataKey="sugar" fill="#f59e0b" name="Sugar (kg)" />
              <Bar dataKey="oil" fill="#8b5cf6" name="Oil (L)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Upcoming Deliveries */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5" />
            Scheduled Supplier Deliveries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {supplierDeliveries.map((delivery, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{delivery.supplier}</p>
                    <Badge className={getDeliveryStatusColor(delivery.status)}>
                      {delivery.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{delivery.item} - {delivery.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Scheduled</p>
                  <p className="text-sm text-muted-foreground">{delivery.scheduled}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alert Banner */}
      <Card className="bg-orange-50 border-orange-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-orange-900">Low Stock Alert</h3>
              <p className="text-sm text-orange-700 mt-1">
                Cooking Oil inventory is below 35% capacity. Urgent restocking recommended. 
                Next scheduled delivery: Jan 21, 2026 (2,000 L)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
