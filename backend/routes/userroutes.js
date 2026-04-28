const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { getUserCourses } = require("../controllers/user.controller");

router.get("/courses", auth, getUserCourses);

module.exports = router;