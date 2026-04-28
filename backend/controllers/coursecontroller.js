const {pool} = require("../config/db");

exports.getCourses = async (req, res) => {
  console.log("Get Courses . .");
  const courses = await pool.query("SELECT * FROM courses");
  res.json(courses.rows);
};

exports.editCourses = async (req, res) => {
  const { title, description, price, image } = req.body;
  const { id } = req.params;

  await pool.query(
    "UPDATE courses SET title=$1, description=$2, price=$3, image=$4 WHERE id=$5",
    [title, description, price, image, id]
  );

  res.json({ message: "Course updated" });
}

exports.getCourseById = async (req, res) => {
  const { id } = req.params;

  const course = await pool.query(
    "SELECT * FROM courses WHERE id=$1",
    [id]
  );

  const lectures = await pool.query(
    "SELECT * FROM lectures WHERE course_id=$1",
    [id]
  );

  res.json({
    ...course.rows[0],
    lectures: lectures.rows,
  });
};

exports.enroll = async (req, res) => {
  const user_id = req.user.id;
  const { course_id } = req.body;

  await pool.query(
    "INSERT INTO enrollments(user_id, course_id) VALUES($1,$2)",
    [user_id, course_id]
  );

  res.json({ message: "Enrolled" });
};

exports.getLecture = async (req, res) => {
  const { id } = req.params;

  const lecture = await pool.query(
    "SELECT * FROM lectures WHERE id=$1",
    [id]
  );

  res.json(lecture.rows[0]);
};