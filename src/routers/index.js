const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter.js");
const eventRouter = require("./eventRouter.js");

router.use("/users", userRouter);
router.use("/events", eventRouter);

module.exports = router;
