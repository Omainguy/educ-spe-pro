
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Github } from 'lucide-react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 animate-in fade-in zoom-in duration-300">
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-200">
            <span className="text-white text-2xl font-bold italic">ESP</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Bienvenue sur Educ Spé Pro</h2>
          <p className="text-slate-500 mt-2">Connectez-vous pour accéder à vos écrits.</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                required 
                placeholder="Email professionnel" 
                defaultValue="j.dupont@social.fr"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                required 
                placeholder="Mot de passe" 
                defaultValue="password"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" />
              <span className="text-sm text-slate-600">Se souvenir</span>
            </label>
            <button type="button" className="text-sm text-indigo-600 font-bold hover:underline">Oublié ?</button>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 transition-all hover:scale-[1.01] active:scale-95"
          >
            <LogIn size={20} />
            Se connecter
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400">Ou continuer avec</span></div>
        </div>

        <button className="w-full py-3.5 border border-slate-200 rounded-2xl font-semibold flex items-center justify-center gap-2 text-slate-600 hover:bg-slate-50 transition-colors">
          <Github size={20} />
          Compte GIP / Etat
        </button>

        <p className="text-center text-sm text-slate-500">
          Pas encore de compte ? <button className="text-indigo-600 font-bold hover:underline">S'inscrire</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
