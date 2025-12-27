
import React from 'react';
import { 
  FileText, 
  Settings, 
  Layout, 
  BookOpen, 
  Home, 
  User, 
  Sparkles,
  ClipboardList,
  History,
  AlertTriangle,
  Heart
} from 'lucide-react';
import { WritingStyle, ReportTemplate, KnowledgeEntry } from './types';

export const REPORT_TYPES = [
  "Rapport de synthèse annuel",
  "Note d'incident",
  "Compte-rendu d'observation",
  "Projet Personnalisé d'Accompagnement (PPA)",
  "Information préoccupante (IP)",
  "Signalement",
  "Compte-rendu de VAD (Visite à Domicile)"
];

export const INSTITUTIONS = [
  "MECS (Maison d'Enfants à Caractère Social)",
  "ITEP (Institut Thérapeutique Éducatif et Pédagogique)",
  "SESSAD",
  "ESAT",
  "FAM (Foyer d'Accueil Médicalisé)",
  "AEMO (Action Éducative en Milieu Ouvert)",
  "Foyer de vie"
];

export const MOCK_STYLES: WritingStyle[] = [
  { id: '1', name: 'Factuel & Administratif', description: 'Style neutre, précis et direct. Idéal pour les rapports officiels.' },
  { id: '2', name: 'Bienveillant & Éducatif', description: 'Met l\'accent sur le potentiel et les émotions de l\'usager. Ton empathique.' },
  { id: '3', name: 'Technique / Clinique', description: 'Utilise une terminologie psychopédagogique précise.' },
  { id: '4', name: 'Synthétique', description: 'Condensé, va à l\'essentiel. Parfait pour les transmissions rapides.' }
];

export const MOCK_TEMPLATES: ReportTemplate[] = [
  { id: 't1', name: 'Trame Standard MECS', type: 'Rapport de synthèse', structure: 'Introduction, Evolution, Perspectives', content: '...' },
  { id: 't2', name: 'Modèle Note d\'Incident', type: 'Note d\'incident', structure: 'Contexte, Fait générateur, Actions, Suites', content: '...' },
  { id: 't3', name: 'PPA Enfance', type: 'PPA', structure: 'Identité, Besoins, Objectifs, Moyens', content: '...' }
];

export const MOCK_KNOWLEDGE: KnowledgeEntry[] = [
  { id: 'k1', title: 'Loi 2002-2', category: 'Législation', content: 'Rénovation de l\'action sociale et médico-sociale.' },
  { id: 'k2', title: 'Concept de Contention', category: 'Pratique', content: 'Modalités d\'intervention en cas de mise en danger.' },
  { id: 'k3', title: 'Projet d\'Etablissement', category: 'Institutionnel', content: 'Valeurs et cadre de travail de l\'institution.' }
];

export const NAV_ITEMS = [
  { label: 'Accueil', path: '/', icon: <Home size={20} /> },
  { label: 'Générateur', path: '/generator', icon: <Sparkles size={20} /> },
  { label: 'Styles', path: '/styles', icon: <Settings size={20} /> },
  { label: 'Templates', path: '/templates', icon: <Layout size={20} /> },
  { label: 'Base de Savoir', path: '/knowledge', icon: <BookOpen size={20} /> },
  { label: 'Profil', path: '/profile', icon: <User size={20} /> },
];
