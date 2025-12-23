
export enum EventType {
  CONFERENCE = 'Conference',
  SYMPOSIUM = 'Symposium',
  WORKSHOP = 'Workshop',
  WEBINAR = 'Webinar'
}

export type Role = 'Organizer' | 'Author' | 'Participant' | 'Workshop Animator';

export interface UserProfile {
  photo?: string;
  institution: string;
  researchField: string;
  biography: string;
  linkedin?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  profile: UserProfile;
}

export type Language = 'en' | 'fr';
export type Theme = 'light' | 'dark';

export interface Speaker {
  name: string;
  role: string;
  image: string;
}

export interface Session {
  time: string;
  title: string;
  room: string;
}

export interface MedicalEvent {
  id: string;
  title: string;
  type: EventType;
  category: string;
  date: string;
  location: string;
  attendees: number;
  price: string;
  image: string;
}

export interface FilterState {
  type: EventType | 'All';
  searchQuery: string;
  specialty: string | null;
  status: 'upcoming' | 'archived';
}
