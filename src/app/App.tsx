import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { BeneficiaryDashboard } from "@/app/components/BeneficiaryDashboard";
import { AdminDashboard } from "@/app/components/AdminDashboard";
import { RationTracking } from "@/app/components/RationTracking";
import { BiometricAuth } from "@/app/components/BiometricAuth";
import { TransactionsReports } from "@/app/components/TransactionsReports";
import { Home, LayoutDashboard, Package, Fingerprint, FileText, Shield } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("beneficiary");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Smart Ration Distribution System</h1>
                <p className="text-sm text-gray-600">Government Welfare Initiative</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">System Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="beneficiary" className="gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Beneficiary</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="gap-2">
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Admin</span>
            </TabsTrigger>
            <TabsTrigger value="tracking" className="gap-2">
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Inventory</span>
            </TabsTrigger>
            <TabsTrigger value="biometric" className="gap-2">
              <Fingerprint className="w-4 h-4" />
              <span className="hidden sm:inline">Biometric</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Reports</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="beneficiary" className="space-y-6">
            <BeneficiaryDashboard />
          </TabsContent>

          <TabsContent value="admin" className="space-y-6">
            <AdminDashboard />
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <RationTracking />
          </TabsContent>

          <TabsContent value="biometric" className="space-y-6">
            <BiometricAuth />
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <TransactionsReports />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">About the System</h3>
              <p className="text-sm text-gray-600">
                Smart IoT-based ration distribution ensuring transparency, efficiency, and digital trust in government welfare programs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time inventory tracking</li>
                <li>• Biometric authentication</li>
                <li>• Complete transaction transparency</li>
                <li>• Accurate automated dispensing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-sm text-gray-600">
                Helpline: 1800-XXX-XXXX<br />
                Email: support@ration.gov.in<br />
                Available: 24/7
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>© 2026 Government of India. All rights reserved. Powered by IoT & Blockchain Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
