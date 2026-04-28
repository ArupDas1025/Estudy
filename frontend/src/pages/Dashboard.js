import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get("/user/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>My Courses</h2>
      {courses.map(c => (
        <div key={c.id}>{c.title}</div>
      ))}
    </div>
  );
}

export default Dashboard;