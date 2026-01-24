import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { User, Calendar, Package, CheckCircle, Clock, MapPin, Search, UserSearch, AlertCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";
// Mock database of beneficiaries
const beneficiariesDB = [
    {
        id: "BEN2024-789456",
        name: "Rajesh Kumar",
        familyMembers: 4,
        category: "Priority Household",
        rationCard: "AAY-MH-2024-456789",
        aadhaar: "1234-5678-9012",
        status: "Active",
        lastDispensed: "2026-01-18",
        nextScheduled: "2026-02-01",
        rationItems: [
            { name: "Rice", allocated: 20, consumed: 12, unit: "kg", nextRefill: "Feb 01, 2026" },
            { name: "Wheat", allocated: 15, consumed: 8, unit: "kg", nextRefill: "Feb 01, 2026" },
            { name: "Sugar", allocated: 5, consumed: 3, unit: "kg", nextRefill: "Feb 01, 2026" },
            { name: "Cooking Oil", allocated: 2, consumed: 1, unit: "L", nextRefill: "Feb 01, 2026" },
        ],
        recentTransactions: [
            { date: "2026-01-18", items: "Rice (5kg), Wheat (3kg)", location: "Center #45, Mumbai", status: "Completed" },
            { date: "2026-01-10", items: "Sugar (2kg), Oil (1L)", location: "Center #45, Mumbai", status: "Completed" },
            { date: "2026-01-03", items: "Rice (7kg), Wheat (5kg)", location: "Center #45, Mumbai", status: "Completed" },
        ]
    },
    {
        id: "BEN2024-123456",
        name: "Priya Sharma",
        familyMembers: 3,
        category: "Below Poverty Line",
        rationCard: "BPL-MH-2024-123456",
        aadhaar: "2345-6789-0123",
        status: "Active",
        lastDispensed: "2026-01-19",
        nextScheduled: "2026-02-01",
        rationItems: [
            { name: "Rice", allocated: 15, consumed: 9, unit: "kg", nextRefill: "Feb 01, 2026" },
            { name: "Wheat", allocated: 12, consumed: 7, unit: "kg", nextRefill: "Feb 01, 2026" },
            { name: "Sugar", allocated: 4, consumed: 2, unit: "kg", nextRefill: "Feb 01, 2026" },
            { name: "Cooking Oil", allocated: 1.5, consumed: 0.5, unit: "L", nextRefill: "Feb 01, 2026" },
        ],
        recentTransactions: [
            { date: "2026-01-19", items: "Rice (4kg), Wheat (3kg)", location: "Center #67, Mumbai", status: "Completed" },
            { date: "2026-01-12", items: "Sugar (2kg)", location: "Center #67, Mumbai", status: "Completed" },
            { date: "2026-01-05", items: "Rice (5kg), Oil (0.5L)", location: "Center #67, Mumbai", status: "Completed" },
        ]
    },
    {
        id: "BEN2024-234567",
        name: "Amit Patel",
        familyMembers: 5,
        category: "Antyodaya Anna Yojana",
        rationCard: "AAY-GJ-2024-234567",
        aadhaar: "3456-7890-1234",
        status: "Active",
        lastDispensed: "2026-01-17",
        nextScheduled: "2026-02-01",
        rationItems: [
            { name: "Rice", allocated: 25, consumed: 18, unit: "kg", nextRefill: "Feb 01, 2026" },
            { name: "Wheat", allocated: 20, consumed: 12, unit: "kg", nextRefill: "Feb 01, 2026" },
            { name: "Sugar", allocated: 6, consumed: 4, unit: "kg", nextRefill: "Feb 01, 2026" },
            { name: "Cooking Oil", allocated: 2.5, consumed: 1.5, unit: "L", nextRefill: "Feb 01, 2026" },
        ],
        recentTransactions: [
            { date: "2026-01-17", items: "Rice (10kg), Wheat (5kg)", location: "Center #23, Ahmedabad", status: "Completed" },
            { date: "2026-01-08", items: "Sugar (3kg), Oil (1L)", location: "Center #23, Ahmedabad", status: "Completed" },
            { date: "2026-01-02", items: "Rice (8kg), Wheat (7kg)", location: "Center #23, Ahmedabad", status: "Completed" },
        ]
    }
];
export function BeneficiaryDashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const [searchError, setSearchError] = useState("");
    const handleSearch = () => {
        if (!searchQuery.trim()) {
            setSearchError("Please enter a search term");
            return;
        }
        setIsSearching(true);
        setSearchError("");
        // Simulate API call delay
        setTimeout(() => {
            const query = searchQuery.toLowerCase().trim();
            const found = beneficiariesDB.find(b => b.name.toLowerCase().includes(query) ||
                b.id.toLowerCase().includes(query) ||
                b.rationCard.toLowerCase().includes(query) ||
                b.aadhaar.replace(/-/g, '').includes(query.replace(/-/g, '')));
            if (found) {
                setSelectedBeneficiary(found);
                setSearchError("");
            }
            else {
                setSelectedBeneficiary(null);
                setSearchError("No beneficiary found matching your search criteria");
            }
            setIsSearching(false);
        }, 500);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    const clearSearch = () => {
        setSearchQuery("");
        setSelectedBeneficiary(null);
        setSearchError("");
    };
    return (<div className="space-y-6">
      {/* Search Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserSearch className="w-5 h-5"/>
            Search Beneficiary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                <Input placeholder="Search by Name, Beneficiary ID, Ration Card, or Aadhaar Number..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={handleKeyPress} className="pl-10 h-12"/>
              </div>
              <Button onClick={handleSearch} disabled={isSearching} className="bg-blue-600 hover:bg-blue-700 px-8">
                {isSearching ? "Searching..." : "Search"}
              </Button>
              {selectedBeneficiary && (<Button onClick={clearSearch} variant="outline">
                  Clear
                </Button>)}
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>Try searching:</span>
              <button onClick={() => { setSearchQuery("Rajesh Kumar"); }} className="text-blue-600 hover:underline">
                Rajesh Kumar
              </button>
              <span>•</span>
              <button onClick={() => { setSearchQuery("BEN2024-123456"); }} className="text-blue-600 hover:underline">
                BEN2024-123456
              </button>
              <span>•</span>
              <button onClick={() => { setSearchQuery("AAY-GJ-2024-234567"); }} className="text-blue-600 hover:underline">
                AAY-GJ-2024-234567
              </button>
            </div>
            {searchError && (<div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"/>
                <p className="text-sm text-red-700">{searchError}</p>
              </div>)}
          </div>
        </CardContent>
      </Card>

      {/* Empty State - Before Search */}
      {!selectedBeneficiary && !searchError && (<Card className="border-dashed">
          <CardContent className="pt-12 pb-12">
            <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
              <div className="p-4 bg-blue-500/10 rounded-full mb-4">
                <UserSearch className="w-12 h-12 text-blue-600"/>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Search for a Beneficiary</h3>
              <p className="text-muted-foreground mb-6">
                Enter a beneficiary's name, ID, ration card number, or Aadhaar number in the search bar above to view their complete profile, ration allocation, and transaction history.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full text-left">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600 mb-2"/>
                  <p className="text-sm font-medium text-foreground">Ration Status</p>
                  <p className="text-xs text-muted-foreground mt-1">View current allocation and consumption</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <Calendar className="w-5 h-5 text-green-600 mb-2"/>
                  <p className="text-sm font-medium text-foreground">Transaction History</p>
                  <p className="text-xs text-muted-foreground mt-1">Track all past distributions</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <User className="w-5 h-5 text-purple-600 mb-2"/>
                  <p className="text-sm font-medium text-foreground">Family Details</p>
                  <p className="text-xs text-muted-foreground mt-1">View household information</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600 mb-2"/>
                  <p className="text-sm font-medium text-foreground">Schedule Info</p>
                  <p className="text-xs text-muted-foreground mt-1">Next distribution dates</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>)}

      {/* Beneficiary Dashboard - After Successful Search */}
      {selectedBeneficiary && (<>
          {/* Header Card */}
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5"/>
                    <h2 className="text-2xl font-semibold">{selectedBeneficiary.name}</h2>
                  </div>
                  <p className="text-blue-100">Ration Card: {selectedBeneficiary.rationCard}</p>
                  <p className="text-blue-100">Aadhaar: {selectedBeneficiary.aadhaar}</p>
                  <div className="flex items-center gap-4 text-sm text-blue-100">
                    <span>Family Members: {selectedBeneficiary.familyMembers}</span>
                    <span>•</span>
                    <span>Category: {selectedBeneficiary.category}</span>
                  </div>
                </div>
                <Badge className="bg-green-500/100 hover:bg-green-500/100 text-white">
                  <CheckCircle className="w-3 h-3 mr-1"/>
                  {selectedBeneficiary.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Last Dispensed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600"/>
                  <span className="text-xl font-semibold">{selectedBeneficiary.lastDispensed}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Next Scheduled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600"/>
                  <span className="text-xl font-semibold">{selectedBeneficiary.nextScheduled}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Beneficiary ID</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-purple-600"/>
                  <span className="text-xl font-semibold">{selectedBeneficiary.id}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Ration Allocation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5"/>
                Monthly Ration Allocation (January 2026)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {selectedBeneficiary.rationItems.map((item, index) => (<div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.consumed} of {item.allocated} {item.unit} consumed
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-blue-600">
                          {item.allocated - item.consumed} {item.unit} remaining
                        </p>
                        <p className="text-xs text-gray-500">Refill: {item.nextRefill}</p>
                      </div>
                    </div>
                    <Progress value={(item.consumed / item.allocated) * 100} className="h-2"/>
                  </div>))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5"/>
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {selectedBeneficiary.recentTransactions.map((transaction, index) => (<div key={index} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                    <div className="flex-shrink-0 w-16 text-center">
                      <p className="text-sm font-medium">{transaction.date.split('-')[2]}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(transaction.date).toLocaleDateString('en-US', { month: 'short' })}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{transaction.items}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3"/>
                        <span>{transaction.location}</span>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {transaction.status}
                    </Badge>
                  </div>))}
              </div>
            </CardContent>
          </Card>

          {/* Action Button */}
          <Card className="bg-blue-500/10 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-blue-900">Ready to collect rations?</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Visit your nearest distribution center with biometric authentication
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Find Nearest Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </>)}
    </div>);
}
