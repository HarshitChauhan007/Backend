const express = require("express");
const router = require("./userRouter.js");

const userRouter = require("./userRouter.js");

router.use("/users", userRouter);

module.exports = router;
