const pool = require("../config/db");

exports.getUserCourses = async (req, res) => {
  const user_id = req.user.id;

  const result = await pool.query(`
    SELECT c.*
    FROM courses c
    JOIN enrollments e ON c.id = e.course_id
    WHERE e.user_id = $1
  `, [user_id]);

  res.json(result.rows);
};