import { useEffect, useState } from "react";
import API from "../services/api";

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [message, setMessage] = useState("");

  // 👉 Fetch courses
  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // 👉 Delete course
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    try {
      await API.delete(`/courses/${id}`);
      setMessage("Course deleted");
      fetchCourses();
    } catch (err) {
      setMessage("Delete failed");
    }
  };

  // 👉 Start edit
  const handleEdit = (course) => {
    setEditingId(course.id);
    setEditForm(course);
  };

  // 👉 Update course
  const handleUpdate = async () => {
    try {
      await API.put(`/courses/${editingId}`, editForm);
      setMessage("Course updated");
      setEditingId(null);
      fetchCourses();
    } catch (err) {
      setMessage("Update failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Courses</h2>

      {message && <p style={{ color: "green" }}>{message}</p>}

      {courses.map(course => (
        <div key={course.id} style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "10px"
        }}>

          {editingId === course.id ? (
            <>
              <input
                value={editForm.title}
                onChange={e => setEditForm({ ...editForm, title: e.target.value })}
              />
              <input
                value={editForm.description}
                onChange={e => setEditForm({ ...editForm, description: e.target.value })}
              />
              <input
                value={editForm.price}
                onChange={e => setEditForm({ ...editForm, price: e.target.value })}
              />
              <input
                value={editForm.image}
                onChange={e => setEditForm({ ...editForm, image: e.target.value })}
              />

              <br /><br />
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <img src={course.image} alt="" width="150" />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>₹{course.price}</p>

              <button onClick={() => handleEdit(course)}>Edit</button>
              <button onClick={() => handleDelete(course.id)}>Delete</button>
            </>
          )}

        </div>
      ))}
    </div>
  );
}

export default ManageCourses;