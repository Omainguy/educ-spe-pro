"use client";

import React, { useState } from 'react';
import {
    Sparkles,
    ChevronRight,
    RotateCcw,
    Copy,
    Download,
    Check,
    Loader2,
    FileText as FileTextIcon
} from 'lucide-react';
import { REPORT_TYPES, INSTITUTIONS, MOCK_STYLES } from '@/lib/constants';

export default function GeneratorPage() {
    const [loading, setLoading] = useState(false);
    const [generatedContent, setGeneratedContent] = useState<string | null>(null);
    const [copying, setCopying] = useState(false);

    const [formData, setFormData] = useState({
        type: REPORT_TYPES[0],
        institution: INSTITUTIONS[0],
        subject: '',
        description: '',
        styleId: MOCK_STYLES[0].id
    });

    const handleGenerate = async () => {
        if (!formData.description) return;
        setLoading(true);
        setGeneratedContent(null);

        const selectedStyle = MOCK_STYLES.find(s => s.id === formData.styleId);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: formData.type,
                    institution: formData.institution,
                    subject: formData.subject,
                    description: formData.description,
                    styleName: selectedStyle?.name,
                    styleDescription: selectedStyle?.description
                }),
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            setGeneratedContent(data.content || "La génération a échoué. Veuillez réessayer.");
        } catch (error) {
            console.error("Generation Error:", error);
            setGeneratedContent("Une erreur est survenue lors de la génération de l'écrit. Veuillez vérifier votre connexion ou réessayer plus tard.");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (!generatedContent) return;
        navigator.clipboard.writeText(generatedContent);
        setCopying(true);
        setTimeout(() => setCopying(false), 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Générateur d'écrits</h1>
                    <p className="text-slate-500">Complétez les champs pour générer une trame professionnelle.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            Type d'écrit
                        </label>
                        <select
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-600"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        >
                            {REPORT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            Établissement / Structure
                        </label>
                        <select
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-600"
                            value={formData.institution}
                            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        >
                            {INSTITUTIONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            Sujet / Nom de l'usager
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: Ryan M., Incident du 04/01, Sortie cinéma..."
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-600"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 flex items-center justify-between">
                            Description & Faits
                            <span className="text-[10px] text-slate-400 font-normal italic">Notes brutes autorisées</span>
                        </label>
                        <textarea
                            rows={6}
                            placeholder="Décrivez brièvement les faits ou les observations à inclure dans l'écrit..."
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-600 resize-none"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-slate-700">Profil de style</label>
                        <div className="grid grid-cols-2 gap-3">
                            {MOCK_STYLES.map(style => (
                                <button
                                    key={style.id}
                                    onClick={() => setFormData({ ...formData, styleId: style.id })}
                                    className={`px-4 py-3 rounded-xl border text-left transition-all ${formData.styleId === style.id
                                            ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500'
                                            : 'border-slate-100 hover:border-slate-200 bg-slate-50'
                                        }`}
                                >
                                    <p className={`text-sm font-bold ${formData.styleId === style.id ? 'text-indigo-700' : 'text-slate-700'}`}>
                                        {style.name}
                                    </p>
                                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">{style.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        disabled={loading || !formData.description}
                        onClick={handleGenerate}
                        className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-white transition-all shadow-lg ${loading || !formData.description
                                ? 'bg-slate-300 cursor-not-allowed shadow-none'
                                : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.01] active:scale-95 shadow-indigo-200'
                            }`}
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <Sparkles size={20} />
                        )}
                        {loading ? 'Génération en cours...' : 'Générer l\'écrit professionnel'}
                    </button>
                </div>
            </div>

            {/* Result Panel */}
            <div className="flex flex-col h-full">
                <div className="mb-6 lg:mb-12">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Aperçu du résultat</h2>
                    <p className="text-slate-500">Visualisez et ajustez le document final.</p>
                </div>

                <div className="flex-1 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col min-h-[500px] overflow-hidden">
                    {generatedContent ? (
                        <>
                            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <button className="text-slate-400 hover:text-indigo-600 p-1" title="Regénérer" onClick={handleGenerate}>
                                        <RotateCcw size={18} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                                    >
                                        {copying ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                        {copying ? 'Copié' : 'Copier'}
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                                        <Download size={14} />
                                        Exporter
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 p-8 font-serif text-slate-800 whitespace-pre-wrap text-sm leading-relaxed overflow-y-auto">
                                {generatedContent}
                            </div>
                            <div className="p-4 bg-emerald-50 border-t border-emerald-100 flex items-center gap-3">
                                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0">
                                    <Sparkles size={16} />
                                </div>
                                <p className="text-xs text-emerald-800">
                                    <span className="font-bold">IA Suggestion:</span> N'oubliez pas de relire et de vérifier la confidentialité des données avant envoi.
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                                <FileTextIcon size={40} />
                            </div>
                            <div className="max-w-xs">
                                <p className="text-slate-900 font-semibold mb-1">Aucun écrit généré</p>
                                <p className="text-slate-400 text-sm">Remplissez le formulaire de gauche et cliquez sur générer pour voir le résultat ici.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
