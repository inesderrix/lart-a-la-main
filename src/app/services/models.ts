export interface Project {
  id: string;
  title: string;
  category: string;
  image: string | null;        // image principale (card)
  images?: string[];           // galerie complète (popup)
  description: string;         // court — pour la card
  materials: string;
  story?: string;              // long — pour la popup (comment, pourquoi, anecdotes)
}

export interface ParcoursItem {
  id: string;
  date: string;
  role: string;
  place: string | null;
  type: 'education' | 'experience';
}
