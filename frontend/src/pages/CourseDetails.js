import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/courses/${id}`)
      .then(res => setCourse(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const enroll = async () => {
    await API.post("/enroll", { course_id: id });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={enroll}>Enroll</button>

      <h3>Lectures</h3>
      {course.lectures?.map(l => (
        <div key={l.id}>
          {l.title}
          <button onClick={() => navigate(`/player/${l.id}`)}>
            Watch
          </button>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;