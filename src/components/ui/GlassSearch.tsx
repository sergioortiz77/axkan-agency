import React, { useState } from 'react';

type GlassSearchProps = {
    placeholder?: string;
    onSearch: (query: string) => void;
};

export default function GlassSearch({ placeholder, onSearch }: GlassSearchProps) {
    const [query, setQuery] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative flex items-center bg-[#0a0a1a] md:bg-black/40 md:backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 transition-all duration-300 focus-within:ring-2 focus-within:ring-white/20">
                <svg
                    className="w-6 h-6 text-gray-400 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
                <input
                    type="text"
                    className="w-full bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
                    placeholder={placeholder || 'Pregunta lo que sea...'}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={() => query.trim() && onSearch(query)}
                    className="ml-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-cyan-400"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
