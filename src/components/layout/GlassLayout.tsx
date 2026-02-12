"use client";

import React, { useState } from 'react';
import { Settings, Menu, X, Rocket } from 'lucide-react';
import Link from 'next/link';

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0a0a1a] text-white font-sans overflow-x-hidden relative">
            {/* Background Decor: Nebulas/Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
            </div>

            {/* Mobile Header (Sticky) */}
            <header className="lg:hidden sticky top-0 z-40 bg-[#0a0a1a]/80 backdrop-blur-md border-b border-white/5 px-4 h-16 flex items-center justify-between">
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
                >
                    <Menu size={24} />
                </button>

                <Link href="/" className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                    <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Axkan</span>
                </Link>

                <div className="w-10 flex justify-end">
                    {/* Placeholder for future right profile action or just spacing */}
                    {rightPanelContent && (
                        <button
                            onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
                            className={`p-2 -mr-2 transition-colors ${isRightPanelOpen ? 'text-cyan-400' : 'text-gray-400'}`}
                        >
                            <Rocket size={20} />
                        </button>
                    )}
                </div>
            </header>

            <div className="relative z-10 flex flex-col lg:flex-row h-[calc(100vh-64px)] lg:h-screen lg:p-6 lg:gap-6">

                {/* Mobile Dropdown Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden animate-fade-in"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Left Sidebar (Responsive Drawer) */}
                <aside className={`
                    fixed lg:relative top-0 left-0 z-50 h-full lg:h-auto w-72 lg:w-64
                    bg-[#0f0f1f]/95 lg:bg-white/5 
                    border-r lg:border border-white/10 lg:rounded-3xl 
                    shadow-2xl lg:shadow-none lg:backdrop-blur-xl
                    transition-transform duration-300 ease-out
                    flex flex-col p-6
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}>
                    <div className="flex items-center justify-between lg:justify-start gap-3 mb-10 lg:mb-10">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-8 h-8 flex-shrink-0">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 animate-pulse opacity-40 blur-sm" />
                                <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                            </div>
                            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Axkan</span>
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="lg:hidden text-gray-400 hover:text-white"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex-1 space-y-4 overflow-y-auto">
                        {sidebarContent}
                    </nav>

                    <div className="mt-auto pt-6 border-t border-white/[0.06]">
                        <div className="flex items-center gap-3 text-gray-600 hover:text-gray-300 cursor-pointer transition-all duration-200 group">
                            <Settings size={16} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-300" />
                            <span className="text-sm lg:text-xs tracking-wider uppercase font-light">Ajustes</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col relative min-w-0 overflow-hidden">
                    {/* On Desktop, we might want internal padding. On mobile, we want edge-to-edge often, but let's check. */}
                    {children}
                </main>

                {/* Right Panel (Responsive Slide-over) */}
                {rightPanelContent && (
                    <>
                        {/* Mobile Overlay for Right Panel */}
                        {isRightPanelOpen && (
                            <div
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden animate-fade-in"
                                onClick={() => setIsRightPanelOpen(false)}
                            />
                        )}

                        <aside className={`
                            fixed xl:relative top-0 right-0 z-50 h-full xl:h-auto w-80 
                            bg-[#0f0f1f]/95 xl:bg-black/20 
                            border-l xl:border border-white/10 xl:border-white/5 xl:rounded-3xl 
                            shadow-2xl xl:shadow-none xl:backdrop-blur-md
                            transition-transform duration-300 ease-out
                            flex flex-col p-6 gap-6
                            ${isRightPanelOpen ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'}
                        `}>
                            <div className="xl:hidden flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Contexto</h3>
                                <button
                                    onClick={() => setIsRightPanelOpen(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            {rightPanelContent}
                        </aside>
                    </>
                )}
            </div>
        </div>
    );
}

