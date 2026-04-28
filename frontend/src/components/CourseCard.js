import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button onClick={() => navigate(`/course/${course.id}`)}>
        View Course
      </button>
    </div>
  );
}

export default CourseCard;