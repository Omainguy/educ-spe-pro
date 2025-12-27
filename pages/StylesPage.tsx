
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Check, Settings2, Sparkles } from 'lucide-react';
import { MOCK_STYLES } from '../constants';
import { WritingStyle } from '../types';

const StylesPage: React.FC = () => {
  const [styles, setStyles] = useState<WritingStyle[]>(MOCK_STYLES);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Profils de style</h1>
          <p className="text-slate-500">Personnalisez le ton et le vocabulaire utilisé par l'IA.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
        >
          <Plus size={18} />
          Nouveau style
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-2xl border-2 border-indigo-500 shadow-xl shadow-indigo-50 animate-in zoom-in-95 duration-200">
          <h3 className="font-bold text-lg text-slate-900 mb-4">Créer un nouveau profil</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Nom du style</label>
                <input 
                  type="text" 
                  placeholder="Ex: Clinique & Précis" 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Description courte</label>
                <input 
                  type="text" 
                  placeholder="Expliquez brièvement l'usage..." 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Instructions pour l'IA (Prompt)</label>
              <textarea 
                rows={4}
                placeholder="Ex: 'Utilise un vocabulaire centré sur la clinique lacanienne, reste distant et factuel...'"
                className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button onClick={() => setShowForm(false)} className="px-5 py-2 rounded-lg text-slate-500 font-medium hover:bg-slate-50 transition-colors">Annuler</button>
            <button onClick={() => setShowForm(false)} className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors">Sauvegarder</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {styles.map((style) => (
          <div key={style.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                <Settings2 size={20} />
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 text-lg mb-1">{style.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{style.description}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                <Check size={12} />
                Actif
              </span>
              <button className="text-xs text-indigo-600 font-bold flex items-center gap-1 hover:underline">
                Tester ce style <Sparkles size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StylesPage;
