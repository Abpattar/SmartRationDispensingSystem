
import React from 'react';

const HeroSection = () => {
    return (
        <>
            <section className="max-w-4xl mx-auto px-4 pt-4 pb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                    Transparent Welfare <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Distribution Network</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                    Access beneficiary records, track inventory, and manage distribution with our immersive next-gen portal.
                </p>
                <div className="magnet-card glass-panel rounded-2xl p-2 shadow-xl shadow-blue-900/5 dark:shadow-black/20 max-w-2xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
                        <div className="pl-4 text-slate-400">
                            <span className="material-symbols-outlined text-2xl animate-pulse">search</span>
                        </div>
                        <input
                            className="w-full border-none focus:ring-0 bg-transparent py-4 px-4 text-slate-900 dark:text-white placeholder-slate-400 text-base outline-none"
                            placeholder="Search Beneficiary ID, Aadhaar, or Ration Card..."
                            type="text"
                        />
                        <div className="pr-2">
                            <button className="shiny-btn text-white font-medium py-2.5 px-6 rounded-lg shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Trending:</span>
                    <button className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm">#RationStatus</button>
                    <button className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm">#KYCUpdate</button>
                    <button className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm">#FamilyHead</button>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 perspective-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 card-3d-wrapper">
                    <div className="card-3d glass-panel p-6 rounded-2xl relative overflow-hidden group border-t-4 border-t-blue-500 cursor-pointer">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-blue-500">inventory_2</span>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">inventory_2</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Ration Stock</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Real-time inventory levels across all distribution centers.</p>
                        <div className="text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </div>

                    <div className="card-3d glass-panel p-6 rounded-2xl relative overflow-hidden group border-t-4 border-t-emerald-500 cursor-pointer">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-emerald-500">history</span>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">history</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Transactions</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Complete audit trail of distributed goods and beneficiaries.</p>
                        <div className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            View History <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </div>

                    <div className="card-3d glass-panel p-6 rounded-2xl relative overflow-hidden group border-t-4 border-t-purple-500 cursor-pointer">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-purple-500">diversity_3</span>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">diversity_3</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Beneficiaries</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Manage family details, members addition and KYC status.</p>
                        <div className="text-purple-600 dark:text-purple-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Manage Profiles <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </div>

                    <div className="card-3d glass-panel p-6 rounded-2xl relative overflow-hidden group border-t-4 border-t-orange-500 cursor-pointer">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-orange-500">event_upcoming</span>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">event_upcoming</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Schedules</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Distribution timelines, slot booking and holiday alerts.</p>
                        <div className="text-orange-600 dark:text-orange-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Check Dates <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
                <div className="glass-panel rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/20 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Need to register a new family?</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Start the digital enrollment process securely.</p>
                    </div>
                    <div className="relative z-10 flex gap-4">
                        <button className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            Documentation
                        </button>
                        <button className="shiny-btn px-6 py-3 rounded-xl text-white font-medium shadow-lg hover:shadow-blue-500/30">
                            Start Enrollment
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
