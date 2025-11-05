// Event Routes - Route definitions
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

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

module.exports = router;

