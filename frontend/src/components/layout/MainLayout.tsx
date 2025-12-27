"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Menu,
    X,
    LogOut,
    Bell,
    ChevronRight
} from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    if (pathname === '/login') return <>{children}</>;

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 lg:relative lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100">
                    <div className="flex items-center gap-2 font-bold text-indigo-600 text-xl">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs">ESP</span>
                        </div>
                        <span>Educ Spé Pro</span>
                    </div>
                    <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                        <X size={20} className="text-slate-400" />
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setSidebarOpen(false)}
                            className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${pathname === item.path
                                    ? 'bg-indigo-50 text-indigo-700 font-medium'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-slate-100">
                    <Link href="/login" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-red-600 rounded-xl hover:bg-red-50 transition-all">
                        <LogOut size={20} />
                        Déconnexion
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Navbar */}
                <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 shrink-0">
                    <button className="lg:hidden p-2 text-slate-400" onClick={() => setSidebarOpen(true)}>
                        <Menu size={24} />
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <button className="p-2 text-slate-400 hover:text-indigo-600 relative">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 hidden sm:block"></div>
                        <Link href="/profile" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <span className="hidden sm:block text-right">
                                <p className="text-sm font-semibold text-slate-900">Jean Dupont</p>
                                <p className="text-xs text-slate-500">Éducateur Spécialisé</p>
                            </span>
                            <img
                                src="https://picsum.photos/seed/edu/40/40"
                                alt="Profile"
                                className="w-10 h-10 rounded-full bg-slate-200 border border-slate-200"
                            />
                        </Link>
                    </div>
                </header>

                {/* Page Area */}
                <div className="flex-1 overflow-y-auto p-4 lg:p-8">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
