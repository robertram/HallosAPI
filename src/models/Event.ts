// Event Model - Simulated database with sample data
import { Event, CreateEventDto, UpdateEventDto } from '../types/Event';

class EventModel {
  private events: Event[];
  private nextId: number;

  constructor() {
    // Sample data - will be replaced with database connection later
    this.events = [
      {
        id: 1,
        title: 'Tech Conference 2024',
        description: 'Annual technology conference',
        date: '2024-06-15',
        location: 'San Francisco, CA',
        organizer: 'Tech Corp',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      },
      {
        id: 2,
        title: 'Web Development Workshop',
        description: 'Learn modern web development',
        date: '2024-07-20',
        location: 'New York, NY',
        organizer: 'Code Academy',
        createdAt: '2024-01-02T00:00:00Z',
        updatedAt: '2024-01-02T00:00:00Z'
      },
      {
        id: 3,
        title: 'Startup Networking Event',
        description: 'Network with entrepreneurs and investors',
        date: '2024-08-10',
        location: 'Austin, TX',
        organizer: 'Startup Hub',
        createdAt: '2024-01-03T00:00:00Z',
        updatedAt: '2024-01-03T00:00:00Z'
      }
    ];
    this.nextId = 4;
  }

  // Get all events
  findAll(): Event[] {
    return this.events;
  }

  // Find event by ID
  findById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  // Create new event
  create(eventData: CreateEventDto): Event {
    const newEvent: Event = {
      id: this.nextId++,
      ...eventData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.events.push(newEvent);
    return newEvent;
  }

  // Update event
  update(id: number, eventData: UpdateEventDto): Event | null {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) {
      return null;
    }
    
    this.events[index] = {
      ...this.events[index],
      ...eventData,
      id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString()
    };
    
    return this.events[index];
  }

  // Delete event
  delete(id: number): boolean {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) {
      return false;
    }
    
    this.events.splice(index, 1);
    return true;
  }
}

export default new EventModel();

