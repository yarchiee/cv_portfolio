'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import MenuOverlay from './MenuOverlay';
import { portfolioData } from '@/lib/data/portfolio';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { personal } = portfolioData;

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-40 px-8 py-8 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
                {/* Left: Home Link */}
                <a
                    href="/"
                    className="font-bold uppercase tracking-[0.15em] text-sm pointer-events-auto hover:opacity-70 transition-opacity"
                >
                    {personal.name}
                </a>

                {/* Right: Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="flex items-center gap-2 font-bold uppercase tracking-widest pointer-events-auto hover:opacity-70 transition-opacity"
                >
                    <span>Menu</span>
                    <Menu size={24} />
                </button>
            </div>
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
