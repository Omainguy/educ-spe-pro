
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Clock, Star, FileText } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="relative overflow-hidden bg-indigo-600 rounded-3xl p-8 lg:p-12 text-white shadow-xl shadow-indigo-200">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Optimisez votre temps éducatif.</h1>
          <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
            Consacrez plus de temps à l'humain et moins à la paperasse. Educ Spé Pro vous accompagne dans la rédaction de vos écrits professionnels avec justesse et rigueur.
          </p>
          <Link 
            to="/generator" 
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <Sparkles size={20} />
            Rédiger un nouvel écrit
          </Link>
        </div>
        {/* Abstract decor */}
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[200px] h-[200px] bg-indigo-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
            <Clock size={24} />
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-1">Récents</h3>
          <p className="text-slate-500 text-sm mb-4">12 écrits générés ce mois-ci.</p>
          <Link to="/generator" className="text-indigo-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Voir l'historique <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
            <Star size={24} />
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-1">Favoris</h3>
          <p className="text-slate-500 text-sm mb-4">4 templates personnalisés.</p>
          <Link to="/templates" className="text-indigo-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Gérer mes templates <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
            <FileText size={24} />
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-1">Styles</h3>
          <p className="text-slate-500 text-sm mb-4">3 profils de rédaction actifs.</p>
          <Link to="/styles" className="text-indigo-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Ajuster mon style <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-bold text-slate-900">Derniers documents générés</h2>
          <button className="text-sm text-indigo-600 font-medium hover:underline">Tout voir</button>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            { title: "Note d'incident - Ryan M.", date: "Il y a 2h", type: "Urgent", status: "Terminé" },
            { title: "Rapport de synthèse - Sarah L.", date: "Hier", type: "Routine", status: "Brouillon" },
            { title: "Projet Individuel - Kevin T.", date: "3 janv. 2024", type: "Projet", status: "Terminé" },
          ].map((doc, i) => (
            <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-medium text-slate-900">{doc.title}</p>
                  <p className="text-xs text-slate-500">{doc.date} • {doc.type}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                doc.status === 'Terminé' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
