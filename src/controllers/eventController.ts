// Event Controller - Request/Response handling
import { Request, Response } from 'express';
import eventService from '../services/eventService';

class EventController {
  // Get all events
  async getAllEvents(req: Request, res: Response): Promise<void> {
    try {
      const events = eventService.getAllEvents();
      res.status(200).json({
        success: true,
        data: events,
        count: events.length
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        success: false,
        message: 'Error fetching events',
        error: err.message
      });
    }
  }

  // Get event by ID
  async getEventById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const event = eventService.getEventById(id);
      res.status(200).json({
        success: true,
        data: event
      });
    } catch (error) {
      const err = error as Error;
      const statusCode = err.message === 'Event not found' ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        message: err.message
      });
    }
  }

  // Create new event
  async createEvent(req: Request, res: Response): Promise<void> {
    try {
      const event = eventService.createEvent(req.body);
      res.status(201).json({
        success: true,
        message: 'Event created successfully',
        data: event
      });
    } catch (error) {
      const err = error as Error;
      res.status(400).json({
        success: false,
        message: err.message
      });
    }
  }

  // Update event
  async updateEvent(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const event = eventService.updateEvent(id, req.body);
      res.status(200).json({
        success: true,
        message: 'Event updated successfully',
        data: event
      });
    } catch (error) {
      const err = error as Error;
      const statusCode = err.message === 'Event not found' ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        message: err.message
      });
    }
  }

  // Delete event
  async deleteEvent(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const result = eventService.deleteEvent(id);
      res.status(200).json({
        success: true,
        message: result.message || 'Event deleted successfully'
      });
    } catch (error) {
      const err = error as Error;
      const statusCode = err.message === 'Event not found' ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        message: err.message
      });
    }
  }
}

export default new EventController();

