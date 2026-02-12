"use client";

import React, { useState } from 'react';
import GlassLayout from '../../components/layout/GlassLayout';
import GlassSearch from '../../components/ui/GlassSearch';
import GlassCard from '../../components/ui/GlassCard';
import { Sparkles, Clock, Wrench, Settings } from 'lucide-react';

export default function DashboardPage() {
    const [messages, setMessages] = useState([
        { role: 'system', content: 'Bienvenido a Axkan. ¿Qué desafío estratégico podemos resolver hoy?' }
    ]);
    const [loading, setLoading] = useState(false);

    // State for Dynamic Data
    const [detectedTools, setDetectedTools] = useState<any[]>([]);
    const [prescribedStrategies, setPrescribedStrategies] = useState<any[]>([]);

    // State for active sidebar item
    const [activeNav, setActiveNav] = useState('Nuevo Diagnóstico');

    const handleNewDiagnosis = () => {
        setMessages([{ role: 'system', content: 'Bienvenido a Axkan. ¿Qué desafío estratégico podemos resolver hoy?' }]);
        setDetectedTools([]);
        setPrescribedStrategies([]);
        setActiveNav('Nuevo Diagnóstico');
    };

    const handleSearch = async (query: string) => {
        // 1. Optimistic Update (Show user message immediately)
        setMessages(prev => [...prev, { role: 'user', content: query }]);
        setLoading(true);

        try {
            // 2. Call the Real API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: query })
            });

            const data = await response.json();

            if (response.ok) {
                // 3. Update Chat History
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: data.content
                }]);

                // 4. Update Sidebars with Real Retrieval Data
                if (data.detectedTools) setDetectedTools(data.detectedTools);
                if (data.prescribedStrategies) setPrescribedStrategies(data.prescribedStrategies);

            } else {
                setMessages(prev => [...prev, { role: 'system', content: "Error conectando con Axkan." }]);
            }

        } catch (error) {
            console.error("Search failed:", error);
            setMessages(prev => [...prev, { role: 'system', content: "Error de red. Por favor intenta de nuevo." }]);
        } finally {
            setLoading(false);
        }
    };

    // Sidebar Navigation Items
    const navItems = [
        { label: 'Nuevo Diagnóstico', icon: Sparkles, action: handleNewDiagnosis },
        { label: 'Historial', icon: Clock, action: () => setActiveNav('Historial') },
        { label: 'Mis Herramientas', icon: Wrench, action: () => setActiveNav('Mis Herramientas') },
        { label: 'Configuración', icon: Settings, action: () => setActiveNav('Configuración') },
    ];

    // Sidebar Content (Left)
    const SidebarNav = (
        <div className="flex flex-col gap-1.5">
            {navItems.map(({ label, icon: Icon, action }) => {
                const isActive = activeNav === label;
                return (
                    <button
                        key={label}
                        onClick={action}
                        className={`
                            group flex items-center gap-3 px-4 py-3 rounded-xl
                            transition-all duration-200 ease-out
                            ${isActive
                                ? 'bg-gradient-to-r from-cyan-500/15 to-purple-500/10 text-cyan-300 border border-cyan-500/25 shadow-[0_0_20px_rgba(6,182,212,0.12)]'
                                : 'text-gray-500 hover:text-gray-200 hover:bg-white/[0.04] active:scale-[0.98]'
                            }
                        `}
                    >
                        <Icon
                            size={18}
                            strokeWidth={isActive ? 2.2 : 1.5}
                            className={`
                                flex-shrink-0 transition-all duration-200
                                ${isActive
                                    ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(6,182,212,0.5)]'
                                    : 'text-gray-600 group-hover:text-gray-400'
                                }
                            `}
                        />
                        <span className={`
                            text-[13px] tracking-wide transition-colors duration-200
                            ${isActive ? 'font-semibold' : 'font-normal'}
                        `}>
                            {label}
                        </span>
                    </button>
                );
            })}
        </div>
    );

    // Right Panel Content (Dynamic)
    const RightPanel = (
        <>
            <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 ml-1">Herramientas Detectadas</h3>
                <div className="grid grid-cols-1 gap-3">
                    {detectedTools.length > 0 ? detectedTools.map((tool: any) => (
                        <GlassCard key={tool.id} className="p-3 !py-2 flex items-center gap-3 hover:!bg-white/5 cursor-pointer">
                            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">
                                {tool.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <div className="font-medium text-sm">{tool.name}</div>
                                <div className="text-xs text-gray-500">{tool.costTier}</div>
                            </div>
                        </GlassCard>
                    )) : (
                        <div className="text-xs text-gray-600 italic px-2">No se han detectado herramientas.</div>
                    )}
                </div>
            </div>

            <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 ml-1">Estrategias Prescritas</h3>
                <div className="space-y-3">
                    {prescribedStrategies.length > 0 ? prescribedStrategies.map((strategy: any) => (
                        <div key={strategy.id} className="group cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-all">
                            <div className="text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors">
                                {strategy.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {strategy.description}
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-white/10 text-gray-400">
                                    {strategy.difficulty}
                                </span>
                                <span className="text-[10px] text-gray-600">Vía {strategy.source?.name}</span>
                            </div>
                        </div>
                    )) : (
                        <div className="text-xs text-gray-600 italic px-2">No hay estrategias activas.</div>
                    )}
                </div>
            </div>
        </>
    );

    return (
        <GlassLayout sidebarContent={SidebarNav} rightPanelContent={RightPanel}>
            <div className="flex-1 flex flex-col h-full relative">

                {/* Chat Area / Content */}
                <div className="flex-1 overflow-y-auto p-4 lg:p-10 space-y-8 scrollbar-hide">
                    {messages.length === 1 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-fade-in-up">
                            <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50 pb-2">
                                ¿Qué construiremos hoy?
                            </h1>
                            <p className="text-lg text-gray-400 max-w-xl">
                                Axkan te ayuda a encontrar las herramientas y estrategias perfectas para tu próxima gran idea.
                            </p>
                            {/* Featured Strategy Card (Placeholder for now) */}
                            <GlassCard className="w-full max-w-md mt-8 border-cyan-500/20 bg-cyan-900/10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-2 py-1 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/20">TENDENCIA</span>
                                    <span className="text-xs text-gray-400">12min lectura</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Motor SEO Automatizado</h3>
                                <p className="text-sm text-gray-400 mb-4">
                                    Aprende cómo configurar un blog SEO programático usando Next.js y Vercel.
                                </p>
                                <button className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
                                    Ver Estrategia <span>→</span>
                                </button>
                            </GlassCard>
                        </div>
                    ) : (
                        <div className="space-y-6 max-w-3xl mx-auto">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === 'user'
                                        ? 'bg-cyan-600/20 border border-cyan-500/30 text-white'
                                        : 'bg-white/5 border border-white/10 text-gray-200'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 rounded-2xl p-4 flex gap-2">
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-0" />
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150" />
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300" />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Search Bar (Floating at Bottom) */}
                {/* Search Bar (Floating at Bottom) */}
                <div className="p-4 lg:p-10 sticky bottom-0 z-20 w-full flex justify-center bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/95 to-transparent pt-10 lg:pt-20">
                    <GlassSearch onSearch={handleSearch} placeholder="Pregunta sobre herramientas..." />
                </div>

            </div>
        </GlassLayout>
    );
}
