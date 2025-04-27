const {
    createEvent,
    updateEvent,
    getAllEvents,
    getEventById,
    deleteEvent,
} = require("../controller/event");
const upload = require("../middlewares/multer");

const express = require("express");
const router = express.Router();

router.route("/create").get(upload.single("file"), createEvent);
router.route("/update/:id").patch(upload.single("file"), updateEvent);
router.route("/getAll").post(getAllEvents);
router.route("/getById/:id").post(getEventById);
router.route("/delete/:id").post(deleteEvent);

module.exports = router;
