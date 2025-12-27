"use client";

import React, { useState } from 'react';
import { Search, Plus, ExternalLink, Bookmark } from 'lucide-react';

// Define MOCK_KNOWLEDGE internally if not in constants yet or if it was removed
const MOCK_KNOWLEDGE = [
    { id: 'k1', title: 'Loi 2002-2', category: 'Législation', content: 'Rénovation de l\'action sociale et médico-sociale.' },
    { id: 'k2', title: 'Concept de Contention', category: 'Pratique', content: 'Modalités d\'intervention en cas de mise en danger.' },
    { id: 'k3', title: 'Projet d\'Etablissement', category: 'Institutionnel', content: 'Valeurs et cadre de travail de l\'institution.' }
];

export default function KnowledgePage() {
    const [entries] = useState(MOCK_KNOWLEDGE);

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">Base de connaissance</h1>
                    <p className="text-slate-500">Répertoire personnel des lois, concepts et valeurs institutionnelles.</p>
                </div>
                <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
                    <Plus size={18} />
                    Ajouter une ressource
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                        <h3 className="font-bold text-slate-900">Filtres</h3>
                        <div className="space-y-2">
                            {['Tout', 'Législation', 'Pratique', 'Institutionnel', 'Note Personnelle'].map((cat, i) => (
                                <button
                                    key={cat}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${i === 0 ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-500 hover:bg-slate-50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-5 rounded-2xl text-white shadow-lg shadow-indigo-100">
                        <Bookmark className="mb-3" size={24} />
                        <h4 className="font-bold mb-1" text-white>Astuce IA</h4>
                        <p className="text-xs text-indigo-100 leading-relaxed">
                            Enrichir votre base de connaissance permet à l'IA d'utiliser vos concepts métier préférés lors de la génération.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-3 space-y-4">
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Chercher une loi, un auteur, une pratique..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-100 outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {entries.map((entry) => (
                            <div key={entry.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors group">
                                <div className="flex items-start justify-between mb-3 text-slate-900">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full mb-2 inline-block">
                                            {entry.category}
                                        </span>
                                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                                            {entry.title}
                                        </h3>
                                    </div>
                                    <button className="p-2 text-slate-300 hover:text-slate-500 transition-colors">
                                        <ExternalLink size={18} />
                                    </button>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    {entry.content}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-slate-400 border-t border-slate-50 pt-4">
                                    <span>Modifié le 12/12/2023</span>
                                    <span>Utilisé 24 fois</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
