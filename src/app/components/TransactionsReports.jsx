import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { FileText, Download, Filter, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
export function TransactionsReports() {
    const recentTransactions = [
        {
            txId: "TXN-2026-00234",
            date: "2026-01-20",
            time: "14:32",
            beneficiary: "Rajesh Kumar",
            beneficiaryId: "BEN2024-789456",
            items: [
                { name: "Rice", quantity: 5, unit: "kg" },
                { name: "Wheat", quantity: 3, unit: "kg" }
            ],
            center: "Center #45, Mumbai",
            status: "Completed",
            verificationMethod: "Fingerprint"
        },
        {
            txId: "TXN-2026-00233",
            date: "2026-01-20",
            time: "14:28",
            beneficiary: "Priya Sharma",
            beneficiaryId: "BEN2024-123456",
            items: [
                { name: "Sugar", quantity: 2, unit: "kg" },
                { name: "Oil", quantity: 1, unit: "L" }
            ],
            center: "Center #45, Mumbai",
            status: "Completed",
            verificationMethod: "Fingerprint"
        },
        {
            txId: "TXN-2026-00232",
            date: "2026-01-20",
            time: "14:25",
            beneficiary: "Amit Patel",
            beneficiaryId: "BEN2024-234567",
            items: [
                { name: "Rice", quantity: 10, unit: "kg" },
                { name: "Wheat", quantity: 5, unit: "kg" },
                { name: "Sugar", quantity: 3, unit: "kg" }
            ],
            center: "Center #67, Mumbai",
            status: "Completed",
            verificationMethod: "Fingerprint"
        },
        {
            txId: "TXN-2026-00231",
            date: "2026-01-20",
            time: "14:20",
            beneficiary: "Sunita Devi",
            beneficiaryId: "BEN2024-345678",
            items: [
                { name: "Wheat", quantity: 7, unit: "kg" }
            ],
            center: "Center #23, Mumbai",
            status: "Completed",
            verificationMethod: "Iris Scan"
        },
        {
            txId: "TXN-2026-00230",
            date: "2026-01-20",
            time: "14:15",
            beneficiary: "Rahul Singh",
            beneficiaryId: "BEN2024-456789",
            items: [
                { name: "Rice", quantity: 8, unit: "kg" },
                { name: "Oil", quantity: 1, unit: "L" }
            ],
            center: "Center #45, Mumbai",
            status: "Failed",
            verificationMethod: "Fingerprint"
        },
        {
            txId: "TXN-2026-00229",
            date: "2026-01-20",
            time: "14:10",
            beneficiary: "Meena Kumari",
            beneficiaryId: "BEN2024-567890",
            items: [
                { name: "Rice", quantity: 5, unit: "kg" },
                { name: "Sugar", quantity: 2, unit: "kg" }
            ],
            center: "Center #45, Mumbai",
            status: "Completed",
            verificationMethod: "Fingerprint"
        }
    ];
    const monthlyStats = [
        { month: "Aug", transactions: 24500, beneficiaries: 11200 },
        { month: "Sep", transactions: 26300, beneficiaries: 11600 },
        { month: "Oct", transactions: 28100, beneficiaries: 12000 },
        { month: "Nov", transactions: 27800, beneficiaries: 11900 },
        { month: "Dec", transactions: 29500, beneficiaries: 12300 },
        { month: "Jan", transactions: 31200, beneficiaries: 12456 },
    ];
    const reportCategories = [
        { name: "Daily Distribution Report", description: "Detailed breakdown of today's ration distribution", icon: FileText },
        { name: "Monthly Summary Report", description: "Comprehensive monthly statistics and analytics", icon: Calendar },
        { name: "Beneficiary Audit Report", description: "Complete beneficiary transaction history", icon: TrendingUp },
        { name: "Inventory Movement Report", description: "Stock in/out and current inventory levels", icon: FileText },
    ];
    const getStatusBadge = (status) => {
        return status === "Completed"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700";
    };
    return (<div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Today's Transactions</p>
              <p className="text-2xl font-semibold">1,234</p>
              <p className="text-xs text-green-600">+8.3% from yesterday</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Success Rate</p>
              <p className="text-2xl font-semibold">98.7%</p>
              <p className="text-xs text-green-600">+0.2% from avg</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Dispensed</p>
              <p className="text-2xl font-semibold">8.2T</p>
              <p className="text-xs text-muted-foreground">Today</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Avg Transaction Time</p>
              <p className="text-2xl font-semibold">2.3min</p>
              <p className="text-xs text-green-600">-0.4min faster</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5"/>
            Transaction Trends (6 Months)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
              <XAxis dataKey="month" stroke="#6b7280"/>
              <YAxis stroke="#6b7280"/>
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="transactions" stroke="#3b82f6" strokeWidth={2} name="Transactions"/>
              <Line type="monotone" dataKey="beneficiaries" stroke="#10b981" strokeWidth={2} name="Unique Beneficiaries"/>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Transactions Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5"/>
              Recent Transactions
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2"/>
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2"/>
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Beneficiary</TableHead>
                  <TableHead>Items Dispensed</TableHead>
                  <TableHead>Center</TableHead>
                  <TableHead>Verification</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((tx) => (<TableRow key={tx.txId}>
                    <TableCell className="font-medium">{tx.txId}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{tx.date}</div>
                        <div className="text-gray-500">{tx.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">{tx.beneficiary}</div>
                        <div className="text-gray-500">{tx.beneficiaryId}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {tx.items.map((item, idx) => (<div key={idx} className="text-gray-700">
                            {item.name} ({item.quantity}{item.unit})
                          </div>))}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{tx.center}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {tx.verificationMethod}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(tx.status)}>
                        {tx.status}
                      </Badge>
                    </TableCell>
                  </TableRow>))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Report Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5"/>
            Generate Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportCategories.map((report, index) => {
            const Icon = report.icon;
            return (<div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600"/>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{report.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                    <Button variant="outline" size="sm" className="mt-3">
                      <Download className="w-3 h-3 mr-2"/>
                      Generate PDF
                    </Button>
                  </div>
                </div>);
        })}
          </div>
        </CardContent>
      </Card>

      {/* Transparency Info */}
      <Card className="bg-indigo-50 border-indigo-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5"/>
            <div>
              <h3 className="font-semibold text-indigo-900">Complete Transparency & Audit Trail</h3>
              <p className="text-sm text-indigo-700 mt-1">
                Every transaction is recorded with complete details including biometric verification, timestamp, 
                and dispensing information. All data is immutable and available for audit purposes, ensuring 
                complete transparency in the distribution system.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>);
}
