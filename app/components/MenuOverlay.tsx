'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Project', href: '#projects' },
];

const externalLinks = [
    { label: 'Future Things Lab', href: '#' },
    { label: 'Speculatizen', href: '#' },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 bg-[var(--color-menu-bg)] text-white transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className="absolute top-8 right-8">
                <button
                    onClick={onClose}
                    className="p-2 hover:text-[var(--color-orange)] transition-colors"
                >
                    <X size={32} />
                </button>
            </div>

            <div className="h-full flex flex-col justify-center px-8 md:px-24 max-w-7xl mx-auto">
                <nav className="flex flex-col gap-6 mb-12">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            className="text-3xl md:text-5xl font-bold uppercase tracking-widest hover:text-[var(--color-orange)] transition-colors w-fit"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* <div className="flex flex-col gap-4">
                    <h3 className="text-sm uppercase tracking-[0.15em] text-gray-400">Other Sites</h3>
                    {externalLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-[var(--color-teal)] transition-colors w-fit"
                        >
                            {link.label}
                        </a>
                    ))}
                </div> */}
            </div>
        </div>
    );
}
