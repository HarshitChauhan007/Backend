const { register, login } = require("../controller/user.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const express = require("express");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/hanu").get((req, res) => res.json({ message: "Hello Hanu" }));

// Protected route example
router.route("/profile").get( authMiddleware, (req, res) => {
    res.json({ message: "Profile data", user: req.user });
});

module.exports = router;
