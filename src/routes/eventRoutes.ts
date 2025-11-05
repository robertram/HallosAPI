// Event Routes - Route definitions
import express from 'express';
import eventController from '../controllers/eventController';

const router = express.Router();

// GET /api/events - Get all events
router.get('/', eventController.getAllEvents.bind(eventController));

// GET /api/events/:id - Get event by ID
router.get('/:id', eventController.getEventById.bind(eventController));

// POST /api/events - Create new event
router.post('/', eventController.createEvent.bind(eventController));

// PUT /api/events/:id - Update event
router.put('/:id', eventController.updateEvent.bind(eventController));

// DELETE /api/events/:id - Delete event
router.delete('/:id', eventController.deleteEvent.bind(eventController));

export default router;

