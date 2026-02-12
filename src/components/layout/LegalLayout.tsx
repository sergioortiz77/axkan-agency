import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '../../app/legal.css';

type LegalLayoutProps = {
    children: React.ReactNode;
    title: string;
    lastUpdated: string;
};

export default function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
    return (
        <div className="min-h-screen bg-[#0a0a1a] text-white font-sans relative">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <header className="relative z-10 border-b border-white/[0.06]">
                <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-7 h-7 flex-shrink-0">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 opacity-40 blur-sm" />
                            <div className="relative w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                        </div>
                        <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            Axkan
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                        <ArrowLeft size={14} />
                        <span>Volver al inicio</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                <div className="mb-12">
                    <h1 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60 mb-3">
                        {title}
                    </h1>
                    <p className="text-sm text-gray-500">
                        Última actualización: {lastUpdated}
                    </p>
                </div>

                <article className="legal-content max-w-none">
                    {children}
                </article>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/[0.06] mt-20">
                <div className="max-w-4xl mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600" />
                                <span className="text-sm font-semibold">Axkan</span>
                            </div>
                            <p className="text-xs text-gray-600 max-w-xs">
                                Consultoría de Estrategia Digital con Inteligencia Artificial.
                            </p>
                        </div>
                        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
                            <Link href="/privacidad" className="hover:text-gray-300 transition-colors">Privacidad</Link>
                            <Link href="/terminos" className="hover:text-gray-300 transition-colors">Términos</Link>
                            <Link href="/acerca" className="hover:text-gray-300 transition-colors">Acerca de</Link>
                            <Link href="/dashboard" className="hover:text-gray-300 transition-colors">Dashboard</Link>
                        </nav>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/[0.04] text-xs text-gray-700">
                        © {new Date().getFullYear()} Axkan. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
}
