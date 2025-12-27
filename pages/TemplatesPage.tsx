
import React from 'react';
import { Search, Plus, MoreHorizontal, FileText, Layout, Copy } from 'lucide-react';
import { MOCK_TEMPLATES, REPORT_TYPES } from '../constants';

const TemplatesPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Templates d'écrits</h1>
          <p className="text-slate-500">Structures de documents pré-enregistrées par type.</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
          <Plus size={18} />
          Créer un template
        </button>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <div className="relative flex-1 min-w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher un modèle..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white"
          />
        </div>
        <div className="flex gap-2">
          {['Tous', 'Rapports', 'Notes', 'Projets'].map((cat, i) => (
            <button 
              key={cat} 
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                i === 0 ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
              <th className="px-6 py-4">Nom du template</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Structure indicative</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_TEMPLATES.map((tpl) => (
              <tr key={tpl.id} className="hover:bg-slate-50/50 transition-colors cursor-default group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <Layout size={18} />
                    </div>
                    <span className="font-bold text-slate-900">{tpl.name}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-slate-600">{tpl.type}</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-slate-500 italic">{tpl.structure}</span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors" title="Dupliquer">
                      <Copy size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors" title="Plus">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TemplatesPage;
