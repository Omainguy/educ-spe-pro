
export interface WritingStyle {
  id: string;
  name: string;
  description: string;
  isCustom?: boolean;
}

export interface ReportTemplate {
  id: string;
  name: string;
  type: string;
  structure: string;
  content: string;
}

export interface KnowledgeEntry {
  id: string;
  title: string;
  content: string;
  category: 'Législation' | 'Pratique' | 'Institutionnel' | 'Note Personnelle';
}

export interface UserProfile {
  name: string;
  role: string;
  institution: string;
  avatar: string;
}

export interface ReportData {
  type: string;
  institution: string;
  subject: string;
  description: string;
  styleId: string;
}
