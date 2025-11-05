// Event type definitions
export interface Event {
  id: number;
  title: string;
  description?: string;
  date: string;
  location: string;
  organizer?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEventDto {
  title: string;
  description?: string;
  date: string;
  location: string;
  organizer?: string;
}

export interface UpdateEventDto {
  title?: string;
  description?: string;
  date?: string;
  location?: string;
  organizer?: string;
}

