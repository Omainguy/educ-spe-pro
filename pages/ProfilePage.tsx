
import React from 'react';
import { User, Mail, Building, Briefcase, Shield, ChevronRight, Settings } from 'lucide-react';

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/edu/120/120" 
            alt="User avatar" 
            className="w-32 h-32 rounded-3xl object-cover border-4 border-slate-50 shadow-md"
          />
          <button className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-xl shadow-lg hover:bg-indigo-700 transition-colors">
            <Settings size={18} />
          </button>
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Jean Dupont</h1>
          <p className="text-indigo-600 font-medium mb-4">Éducateur Spécialisé Principal</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              <Building size={14} /> MECS de la Vallée
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              <Mail size={14} /> j.dupont@social.fr
            </span>
            <span className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full font-bold">
              Compte Pro
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 px-2">Paramètres du compte</h3>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-50 overflow-hidden">
            {[
              { icon: <User size={18} />, label: 'Informations personnelles', color: 'text-blue-500' },
              { icon: <Mail size={18} />, label: 'Notifications par email', color: 'text-amber-500' },
              { icon: <Shield size={18} />, label: 'Sécurité & Mot de passe', color: 'text-emerald-500' },
            ].map((item, i) => (
              <button key={i} className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-slate-700">{item.label}</span>
                </div>
                <ChevronRight size={18} className="text-slate-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 px-2">Statistiques de rédaction</h3>
          <div className="bg-indigo-600 p-6 rounded-2xl text-white shadow-xl shadow-indigo-100 flex flex-col justify-between min-h-[200px]">
            <div>
              <p className="text-indigo-100 text-sm mb-1 uppercase tracking-wider font-bold">Temps économisé estimé</p>
              <h2 className="text-4xl font-bold">~14.5 h</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span>Objectif mensuel</span>
                <span>80% atteint</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[80%]"></div>
              </div>
              <p className="text-[10px] text-indigo-100 italic">Basé sur 45 rapports générés en 30 jours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
