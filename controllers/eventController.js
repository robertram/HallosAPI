// Event Controller - Request/Response handling
const eventService = require('../services/eventService');

class EventController {
  // Get all events
  async getAllEvents(req, res) {
    try {
      const events = eventService.getAllEvents();
      res.status(200).json({
        success: true,
        data: events,
        count: events.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching events',
        error: error.message
      });
    }
  }

  // Get event by ID
  async getEventById(req, res) {
    try {
      const { id } = req.params;
      const event = eventService.getEventById(id);
      res.status(200).json({
        success: true,
        data: event
      });
    } catch (error) {
      const statusCode = error.message === 'Event not found' ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        message: error.message
      });
    }
  }

  // Create new event
  async createEvent(req, res) {
    try {
      const event = eventService.createEvent(req.body);
      res.status(201).json({
        success: true,
        message: 'Event created successfully',
        data: event
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  // Update event
  async updateEvent(req, res) {
    try {
      const { id } = req.params;
      const event = eventService.updateEvent(id, req.body);
      res.status(200).json({
        success: true,
        message: 'Event updated successfully',
        data: event
      });
    } catch (error) {
      const statusCode = error.message === 'Event not found' ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        message: error.message
      });
    }
  }

  // Delete event
  async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      const result = eventService.deleteEvent(id);
      res.status(200).json({
        success: true,
        message: result.message || 'Event deleted successfully'
      });
    } catch (error) {
      const statusCode = error.message === 'Event not found' ? 404 : 500;
      res.status(statusCode).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new EventController();

