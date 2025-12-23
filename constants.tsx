
import { EventType, MedicalEvent, Speaker, Session } from './types';

export interface MedicalEventExtended extends MedicalEvent {
  description: string;
  contactEmail: string;
  contactPhone: string;
  speakers: Speaker[];
  committee: string[];
  isArchived: boolean;
  sessions: Session[];
}

export const MOCK_EVENTS: MedicalEventExtended[] = [
  {
    id: '1',
    title: 'Global Summit on Neurology & Brain Disorders',
    type: EventType.CONFERENCE,
    category: 'Neurology',
    date: '15-18 Dec 2025',
    location: 'Zénith de Constantine',
    attendees: 1200,
    price: '5,000 DA',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    description: 'Join leading Algerian and international neurologists to discuss the latest advancements in treating neurodegenerative diseases.',
    contactEmail: 'neurology2025@medsymposium.dz',
    contactPhone: '+213 31 12 34 56',
    isArchived: false,
    committee: ['Dr. Amine K.', 'Pr. Sarah L.', 'Dr. Yacine B.'],
    speakers: [
      { name: 'Pr. Elena Rodriguez', role: 'Chief of Neurosurgery', image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200' },
      { name: 'Dr. Farid Mansouri', role: 'Neurology Researcher', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200' }
    ],
    sessions: [
      { time: '09:00', title: 'Opening Keynote: Future of Neuro-regeneration', room: 'Amphi A' },
      { time: '11:00', title: 'Alzheimer Case Studies in North Africa', room: 'Salle 102' }
    ]
  },
  {
    id: '2',
    title: 'Advanced Oncology & Precision Medicine 2025',
    type: EventType.SYMPOSIUM,
    category: 'Oncology',
    date: 'Feb 12-14, 2025',
    location: 'EHU Oran',
    attendees: 950,
    price: '8,500 DA',
    image: 'https://images.unsplash.com/photo-1579152276503-34e85743b171?auto=format&fit=crop&q=80&w=800',
    description: 'Focusing on targeted therapies and immunotherapies for solid tumors in clinical practice.',
    contactEmail: 'oncology.oran@medsymposium.dz',
    contactPhone: '+213 41 00 22 33',
    isArchived: false,
    committee: ['Pr. Belkacem Z.', 'Dr. Nadia H.'],
    speakers: [
      { name: 'Dr. Marcus Thorne', role: 'Oncology Lead', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200' }
    ],
    sessions: [
      { time: '10:00', title: 'Genomics in Breast Cancer Treatment', room: 'Main Auditorium' }
    ]
  },
  {
    id: '3',
    title: 'Hands-on Laparoscopic Surgery Workshop',
    type: EventType.WORKSHOP,
    category: 'Surgery',
    date: 'Mar 05, 2025',
    location: 'CHU Mustapha Bacha, Algiers',
    attendees: 50,
    price: '15,000 DA',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    description: 'Intensive practical training session on minimally invasive techniques for abdominal surgeries.',
    contactEmail: 'surgery.workshop@med.dz',
    contactPhone: '+213 21 66 55 44',
    isArchived: false,
    committee: ['Pr. Karim F.', 'Dr. Souad G.'],
    speakers: [
      { name: 'Pr. Ahmed Rezki', role: 'Master Surgeon', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200' }
    ],
    sessions: [
      { time: '08:00', title: 'Live Surgery Demonstration', room: 'Operating Theater A' }
    ]
  },
  {
    id: '5',
    title: 'National Cardiology Symposium 2024',
    type: EventType.SYMPOSIUM,
    category: 'Cardiology',
    date: 'Nov 05-08, 2024',
    location: 'CIC Abdelatif Rahal, Algiers',
    attendees: 850,
    price: '12,000 DA',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    description: 'A deep dive into interventional cardiology techniques, heart failure management, and future clinical trials in Algeria.',
    contactEmail: 'cardio2024@cic.dz',
    contactPhone: '+213 21 99 88 77',
    isArchived: true,
    committee: ['Pr. Karim M.', 'Dr. Nadia S.'],
    speakers: [
      { name: 'Dr. John Smith', role: 'Cardiology Consultant', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200' }
    ],
    sessions: [
      { time: '14:00', title: 'Interventional Cardiology Workshop', room: 'Lab 1' }
    ]
  },
  {
    id: '6',
    title: 'Future of Digital Health Workshop',
    type: EventType.WORKSHOP,
    category: 'Digital Health',
    date: 'Dec 01, 2024',
    location: 'Cyberparc de Sidi Abdellah',
    attendees: 3000,
    price: '3,500 DA',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    description: 'Hands-on workshop focusing on the integration of machine learning in patient diagnostics and Algerian telemedicine platforms.',
    contactEmail: 'digital@health.dz',
    contactPhone: '+213 23 00 11 22',
    isArchived: true,
    committee: ['Eng. Meriem B.', 'Dr. Omar T.'],
    speakers: [
      { name: 'Ali Benali', role: 'Health Tech Lead', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200' }
    ],
    sessions: [
      { time: '10:00', title: 'AI in Radiology', room: 'Tech Hub' }
    ]
  }
];

export const SPECIALTIES = [
  'Cardiology', 'Oncology', 'Neurology', 'Pediatrics', 
  'Dermatology', 'Psychiatry', 'Orthopedics', 'Gastroenterology',
  'Radiology', 'Endocrinology', 'Immunology', 'Surgery'
];
