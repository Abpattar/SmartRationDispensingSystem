import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Fingerprint, Scan, CheckCircle2, XCircle, User, Shield, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

export function BiometricAuth() {
  const [authStep, setAuthStep] = useState<"idle" | "scanning" | "success" | "failed">("idle");
  const [beneficiaryId, setBeneficiaryId] = useState("");

  const handleBiometricScan = () => {
    setAuthStep("scanning");
    // Simulate biometric scanning
    setTimeout(() => {
      // Randomly simulate success/failure for demo
      const success = Math.random() > 0.2;
      setAuthStep(success ? "success" : "failed");
    }, 2500);
  };

  const resetAuth = () => {
    setAuthStep("idle");
    setBeneficiaryId("");
  };

  const beneficiaryDetails = {
    name: "Rajesh Kumar",
    id: "BEN2024-789456",
    rationCard: "AAY-MH-2024-456789",
    familyMembers: 4,
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%234f46e5'/%3E%3Ccircle cx='50' cy='40' r='20' fill='white'/%3E%3Ccircle cx='50' cy='85' r='30' fill='white'/%3E%3C/svg%3E",
    lastVisit: "2026-01-18",
    remainingQuota: {
      rice: "8 kg",
      wheat: "7 kg",
      sugar: "2 kg",
      oil: "1 L"
    }
  };

  const recentVerifications = [
    { time: "10:45 AM", beneficiary: "Priya Sharma", id: "BEN2024-123456", status: "verified", center: "Center #45" },
    { time: "10:42 AM", beneficiary: "Amit Patel", id: "BEN2024-234567", status: "verified", center: "Center #45" },
    { time: "10:38 AM", beneficiary: "Sunita Devi", id: "BEN2024-345678", status: "verified", center: "Center #45" },
    { time: "10:35 AM", beneficiary: "Rahul Singh", id: "BEN2024-456789", status: "failed", center: "Center #45" },
    { time: "10:30 AM", beneficiary: "Meena Kumari", id: "BEN2024-567890", status: "verified", center: "Center #45" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <Card className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-semibold">Biometric Authentication System</h2>
              <p className="text-indigo-100 mt-1">Secure, fast, and accurate beneficiary verification</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Biometric Scanner Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fingerprint className="w-5 h-5" />
              Fingerprint Scanner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Beneficiary ID Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Beneficiary ID (Optional)</label>
                <Input
                  placeholder="Enter beneficiary ID or scan fingerprint"
                  value={beneficiaryId}
                  onChange={(e) => setBeneficiaryId(e.target.value)}
                  disabled={authStep === "scanning"}
                />
              </div>

              {/* Scanner Display */}
              <div className="relative">
                <div className={`border-4 rounded-2xl p-8 flex items-center justify-center aspect-square transition-all ${
                  authStep === "idle" ? "border-gray-300 bg-muted/50" :
                  authStep === "scanning" ? "border-blue-500 bg-blue-500/10 animate-pulse" :
                  authStep === "success" ? "border-green-500 bg-green-500/10" :
                  "border-red-500 bg-red-50"
                }`}>
                  {authStep === "idle" && (
                    <div className="text-center">
                      <Scan className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">Place finger on scanner</p>
                      <p className="text-sm text-gray-500 mt-2">System ready to authenticate</p>
                    </div>
                  )}
                  
                  {authStep === "scanning" && (
                    <div className="text-center">
                      <Fingerprint className="w-24 h-24 text-blue-600 mx-auto mb-4 animate-pulse" />
                      <p className="text-blue-600 font-medium">Scanning fingerprint...</p>
                      <p className="text-sm text-blue-500 mt-2">Please hold still</p>
                    </div>
                  )}
                  
                  {authStep === "success" && (
                    <div className="text-center">
                      <CheckCircle2 className="w-24 h-24 text-green-600 mx-auto mb-4" />
                      <p className="text-green-600 font-medium text-lg">Verification Successful!</p>
                      <p className="text-sm text-green-600 mt-2">Identity confirmed</p>
                    </div>
                  )}
                  
                  {authStep === "failed" && (
                    <div className="text-center">
                      <XCircle className="w-24 h-24 text-red-600 mx-auto mb-4" />
                      <p className="text-red-600 font-medium text-lg">Verification Failed</p>
                      <p className="text-sm text-red-600 mt-2">Fingerprint not recognized</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {(authStep === "idle" || authStep === "failed") && (
                  <Button 
                    onClick={handleBiometricScan}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <Fingerprint className="w-4 h-4 mr-2" />
                    Start Biometric Scan
                  </Button>
                )}
                
                {(authStep === "success" || authStep === "failed") && (
                  <Button 
                    onClick={resetAuth}
                    variant="outline"
                    className="flex-1"
                  >
                    Scan Next Beneficiary
                  </Button>
                )}
              </div>

              {/* Scanner Status */}
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500/100 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700">Scanner Status: Active</span>
                </div>
                <Badge className="bg-green-100 text-green-700">
                  Device Connected
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Beneficiary Details (shown on success) */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Beneficiary Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            {authStep === "success" ? (
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-200">
                  <img 
                    src={beneficiaryDetails.photo} 
                    alt="Beneficiary" 
                    className="w-20 h-20 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{beneficiaryDetails.name}</h3>
                    <p className="text-sm text-muted-foreground">ID: {beneficiaryDetails.id}</p>
                    <p className="text-sm text-muted-foreground">Card: {beneficiaryDetails.rationCard}</p>
                    <Badge className="bg-green-500/100 hover:bg-green-500/100 text-white mt-2">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Family Members</span>
                    <span className="font-medium">{beneficiaryDetails.familyMembers}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Last Visit</span>
                    <span className="font-medium">{beneficiaryDetails.lastVisit}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Remaining Monthly Quota</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(beneficiaryDetails.remainingQuota).map(([item, quantity]) => (
                      <div key={item} className="p-3 bg-blue-500/10 rounded-lg border border-blue-200">
                        <p className="text-xs text-muted-foreground capitalize">{item}</p>
                        <p className="font-semibold text-blue-700">{quantity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Proceed to Dispense Ration
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Scan className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-500 font-medium">Awaiting Verification</p>
                <p className="text-sm text-gray-400 mt-2">
                  Beneficiary details will appear after successful authentication
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Verifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Recent Verifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentVerifications.map((verification, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    verification.status === "verified" ? "bg-green-500/100" : "bg-red-500"
                  }`}></div>
                  <div>
                    <p className="font-medium text-sm">{verification.beneficiary}</p>
                    <p className="text-xs text-muted-foreground">{verification.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">{verification.center}</span>
                  <span className="text-xs text-gray-500">{verification.time}</span>
                  <Badge className={
                    verification.status === "verified" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-red-100 text-red-700"
                  }>
                    {verification.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Info Banner */}
      <Card className="bg-blue-500/10 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900">Enhanced Security</h3>
              <p className="text-sm text-blue-700 mt-1">
                Our biometric system uses advanced fingerprint recognition technology with 99.7% accuracy rate. 
                All biometric data is encrypted and stored securely following government data protection standards.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
