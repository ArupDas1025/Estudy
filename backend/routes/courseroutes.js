const router = require("express").Router();
const auth = require("../middleware/auth");
const roleAuth = require("../middleware/role");

const {
  getCourses,
  getCourseById,
  enroll,
  getLecture,
  editCourses,
} = require("../controllers/coursecontroller");

router.get("/",auth,roleAuth(["admin", "teacher",'student']), getCourses);
router.put("/:id",auth,roleAuth(["admin", "teacher"]), editCourses);
// router.get("/:id", getCourseById);
// router.post("/enroll", auth, enroll);
// router.get("/lecture/:id", getLecture);

module.exports = router;