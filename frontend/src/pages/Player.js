import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Player() {
  const { id } = useParams();
  const [lecture, setLecture] = useState({});

  useEffect(() => {
    API.get(`/lectures/${id}`)
      .then(res => setLecture(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div>
      <h2>{lecture.title}</h2>
      <video width="600" controls>
        <source src={lecture.video_url} type="video/mp4" />
      </video>
    </div>
  );
}

export default Player;