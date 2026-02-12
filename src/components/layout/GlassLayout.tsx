import React from 'react';
import { Settings } from 'lucide-react';

type GlassLayoutProps = {
    children: React.ReactNode;
    sidebarContent?: React.ReactNode;
    rightPanelContent?: React.ReactNode;
};

export default function GlassLayout({
    children,
    sidebarContent,
    rightPanelContent,
}: GlassLayoutProps) {
    return (
        <div className="min-h-screen bg-[#0a0a1a] text-white font-sans overflow-hidden relative">
            {/* Background Decor: Nebulas/Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex h-screen p-6 gap-6">
                {/* Left Sidebar (Glass) */}
                <aside className="w-20 lg:w-64 flex-shrink-0 flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-6 transition-all duration-300 hover:bg-white/[0.07]">
                    <div className="mb-10 flex items-center gap-3">
                        <div className="relative w-8 h-8 flex-shrink-0">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 animate-pulse opacity-40 blur-sm" />
                            <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                        </div>
                        <span className="hidden lg:block text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Axkan</span>
                    </div>
                    <nav className="flex-1 space-y-4">
                        {sidebarContent}
                    </nav>
                    <div className="mt-auto pt-6 border-t border-white/[0.06]">
                        <div className="flex items-center gap-3 text-gray-600 hover:text-gray-300 cursor-pointer transition-all duration-200 group">
                            <Settings size={16} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-300" />
                            <span className="hidden lg:block text-xs tracking-wider uppercase font-light">Ajustes del sistema</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col relative min-w-0">
                    {children}
                </main>

                {/* Right Panel (Glass) - Optional */}
                {rightPanelContent && (
                    <aside className="hidden xl:flex w-80 flex-shrink-0 flex-col backdrop-blur-md bg-black/20 border border-white/5 rounded-3xl p-6 gap-6">
                        {rightPanelContent}
                    </aside>
                )}
            </div>
        </div>
    );
}

