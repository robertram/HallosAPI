// Event Service - Business logic layer
import eventModel from '../models/Event';
import { CreateEventDto, UpdateEventDto } from '../types/Event';

class EventService {
  // Get all events
  getAllEvents() {
    return eventModel.findAll();
  }

  // Get event by ID
  getEventById(id: number) {
    const event = eventModel.findById(id);
    if (!event) {
      throw new Error('Event not found');
    }
    return event;
  }

  // Create new event
  createEvent(eventData: CreateEventDto) {
    // Validate required fields
    if (!eventData.title || !eventData.date || !eventData.location) {
      throw new Error('Title, date, and location are required');
    }

    return eventModel.create(eventData);
  }

  // Update event
  updateEvent(id: number, eventData: UpdateEventDto) {
    // Check if event exists
    const existingEvent = eventModel.findById(id);
    if (!existingEvent) {
      throw new Error('Event not found');
    }

    return eventModel.update(id, eventData);
  }

  // Delete event
  deleteEvent(id: number) {
    const existingEvent = eventModel.findById(id);
    if (!existingEvent) {
      throw new Error('Event not found');
    }

    const deleted = eventModel.delete(id);
    if (!deleted) {
      throw new Error('Failed to delete event');
    }

    return { message: 'Event deleted successfully' };
  }
}

export default new EventService();

