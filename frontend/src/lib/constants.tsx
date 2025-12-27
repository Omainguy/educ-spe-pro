import {
    Home,
    FileText,
    Settings,
    Palette,
    BookOpen,
    User,
    Sparkles,
    Layout
} from 'lucide-react';

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

export const MOCK_STYLES = [
    { id: '1', name: 'Factuel & Administratif', description: 'Style neutre, précis et direct. Idéal pour les rapports officiels.' },
    { id: '2', name: 'Bienveillant & Éducatif', description: 'Met l\'accent sur le potentiel et les émotions de l\'usager. Ton empathique.' },
    { id: '3', name: 'Technique / Clinique', description: 'Utilise une terminologie psychopédagogique précise.' },
    { id: '4', name: 'Synthétique', description: 'Condensé, va à l\'essentiel. Parfait pour les transmissions rapides.' }
];

export const NAV_ITEMS = [
    { label: 'Accueil', path: '/', icon: <Home size={20} /> },
    { label: 'Générateur', path: '/generator', icon: <Sparkles size={20} /> },
    { label: 'Styles', path: '/styles', icon: <Settings size={20} /> },
    { label: 'Templates', path: '/templates', icon: <Layout size={20} /> },
    { label: 'Base de Savoir', path: '/knowledge', icon: <BookOpen size={20} /> },
    { label: 'Profil', path: '/profile', icon: <User size={20} /> },
];

export const MOCK_TEMPLATES = [
    { id: 't1', name: 'Trame Standard MECS', type: 'Rapport de synthèse', structure: 'Introduction, Evolution, Perspectives' },
    { id: 't2', name: 'Modèle Note d\'Incident', type: 'Note d\'incident', structure: 'Contexte, Fait générateur, Actions, Suites' },
    { id: 't3', name: 'PPA Enfance', type: 'PPA', structure: 'Identité, Besoins, Objectifs, Moyens' }
];
