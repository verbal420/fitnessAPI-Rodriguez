const express = require("express");
const { register, login, getUserDetails } = require("../controllers/userController");
const auth = require("../auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/details", auth, getUserDetails);

module.exports = router;