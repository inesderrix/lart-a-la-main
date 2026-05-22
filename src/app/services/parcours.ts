import { ParcoursItem } from './models';

export const PARCOURS_ITEMS: ParcoursItem[] = [
  { 
    id: 'alternance-g7',   
    date: 'Sept 2025 — Sept 2026', 
    role: 'Alternance Dev Front-end & UX/UI', 
    place: 'G7',
    type: 'experience'
  },
  { 
    id: 'stage-g7',        
    date: 'Avr — Juin 2025',        
    role: 'Stage Dev Front-end',             
    place: 'G7',
    type: 'experience'
  },
  { 
    id: 'stage-coiffure',  
    date: 'Juil — Août 2024',       
    role: 'Stage en Coiffure',               
    place: null,
    type: 'experience'
  },
  { 
    id: 'but-mmi',         
    date: '2023 — 2026',            
    role: 'BUT MMI',                         
    place: 'IUT de Marne-la-Vallée',
    type: 'education'
  },
  { 
    id: 'bac',            
    date: '2023',                   
    role: 'Bac Arts Plastiques & NSI',       
    place: 'Lycée Gustave Eiffel, Gagny',
    type: 'education'
  }
];
