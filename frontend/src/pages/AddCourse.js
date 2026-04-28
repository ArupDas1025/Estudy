import { useState } from "react";
import API from "../services/api";

function AddCourse() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    instructor_id: ""
  });

  const [message, setMessage] = useState("");

  const handleAddCourse = async () => {
    try {
      const res = await API.post("/courses", form);
      setMessage(res.data.message);

      setForm({
        title: "",
        description: "",
        price: "",
        image: "",
        instructor_id: ""
      });

    } catch (err) {
      setMessage(err?.response?.data?.message || "Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Add Course</h2>

      {message && <p>{message}</p>}

      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} />
      <input placeholder="Instructor ID" onChange={e => setForm({ ...form, instructor_id: e.target.value })} />

      <br /><br />
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
}

export default AddCourse;
