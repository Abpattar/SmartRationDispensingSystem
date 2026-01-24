import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Tabs, TabsContent } from "@/app/components/ui/tabs";
import { BeneficiaryDashboard } from "@/app/components/BeneficiaryDashboard";
import { AdminDashboard } from "@/app/components/AdminDashboard";
import { RationTracking } from "@/app/components/RationTracking";
import { BiometricAuth } from "@/app/components/BiometricAuth";
import { TransactionsReports } from "@/app/components/TransactionsReports";
import { Shield } from "lucide-react";
import PillNav from "@/app/components/PillNav";

// Simple logo SVG as data URI
const logoSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234f46e5'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E";

export default function App() {
  const [activeTab, setActiveTab] = useState("beneficiary");

  const navItems = [
    { label: 'Beneficiary', href: '#beneficiary' },
    { label: 'Admin', href: '#admin' },
    { label: 'Inventory', href: '#tracking' },
    { label: 'Biometric', href: '#biometric' },
    { label: 'Reports', href: '#reports' }
  ];

  const handleNavClick = (item: { href: string }) => {
    const tab = item.href.replace('#', '');
    setActiveTab(tab);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 dark">
        {/* PillNav Header */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white tracking-tight">Smart Ration</h1>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Govt. Welfare Initiative</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                  <span className="text-sm font-medium text-emerald-400">System Active</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* PillNav Navigation */}
        <div className="relative border-b border-slate-800 bg-slate-900">
          <div className="container mx-auto px-4 py-3">
            <div className="relative">
              <PillNav
                logo={logoSvg}
                logoAlt="Smart Ration Logo"
                items={navItems}
                activeHref={`#${activeTab}`}
                className="!relative !top-0 !w-full md:!w-auto"
                ease="power2.easeOut"
                baseColor="#1e1b4b"
                pillColor="#6366f1"
                hoveredPillTextColor="#ffffff"
                pillTextColor="#ffffff"
                theme="dark"
                initialLoadAnimation={false}
                onMobileMenuClick={() => { }}
                onItemClick={handleNavClick}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
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
        <footer className="bg-slate-900 border-t border-slate-800 mt-12 pb-8">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="font-bold text-white text-lg">About the System</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Smart IoT-based ration distribution ensuring transparency, efficiency, and digital trust in government welfare programs.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-white text-lg">Key Features</h3>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Real-time inventory tracking</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Biometric authentication</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Complete transaction transparency</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Accurate automated dispensing</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-white text-lg">Support</h3>
                <div className="text-sm text-slate-400 space-y-2">
                  <p>Helpline: <span className="text-slate-300">1800-XXX-XXXX</span></p>
                  <p>Email: <span className="text-slate-300">support@ration.gov.in</span></p>
                  <p>Available: <span className="text-green-400">24/7</span></p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
              <p>© 2026 Government of India. All rights reserved. Powered by IoT & Blockchain Technology</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
