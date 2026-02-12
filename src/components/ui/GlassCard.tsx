import React from 'react';

type GlassCardProps = {
    children: React.ReactNode;
    className?: string;
    glow?: 'none' | 'cyan' | 'purple' | 'emerald';
    isLoading?: boolean;
};

export default function GlassCard({
    children,
    className = '',
    glow = 'none',
    isLoading = false,
}: GlassCardProps) {
    const glowStyles = {
        none: '',
        cyan: 'shadow-[0_0_20px_rgba(34,211,238,0.2)] border-cyan-500/30',
        purple: 'shadow-[0_0_20px_rgba(168,85,247,0.2)] border-purple-500/30',
        emerald: 'shadow-[0_0_20px_rgba(16,185,129,0.2)] border-emerald-500/30',
    };

    return (
        <div
            className={`relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:translate-y-[-2px] hover:shadow-xl ${glowStyles[glow]} ${className}`}
        >
            {isLoading && (
                <div className="absolute inset-0 bg-white/5 animate-pulse z-10 pointer-events-none" />
            )}
            <div className="relative z-0">{children}</div>
        </div>
    );
}
