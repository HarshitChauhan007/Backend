const { Event } = require("../models/event.js");
const path = require("path");

// Create events
const createEvent = async (req, res) => {
    try {
        const { title, description, date, location, status } = req.body;

        // Check if a file was uploaded
        const image = req.file ? req.file.path : null;

        const event = await Event.create({
            title,
            description,
            date,
            location,
            status,
            image,
        });

        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({
            message: "Error creating event",
            error: error.message,
        });
    }
};

// update events
const updateEvent = async (req, res) => {
    try {
        const { title, description, date, location, status } = req.body;
        const event = await Event.findByPk(req.params.id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        // If new file is uploaded, use its path
        const updatedData = {
            title,
            description,
            date,
            location,
            status,
        };

        if (req.file) {
            updatedData.image = req.file.path;
        }

        await event.update(updatedData);

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            message: "Error updating event",
            error: error.message,
        });
    }
};

// get all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching events",
            error: error.message,
        });
    }
};

// get event by id
const getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching event",
            error: error.message,
        });
    }
};

// Delete an event by ID
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        await event.destroy();
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting event",
            error: error.message,
        });
    }
};

module.exports = {
    createEvent,
    updateEvent,
    getAllEvents,
    getEventById,
    deleteEvent,
};
