import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get("/courses")
      .then(res => setCourses(res.data))
      .catch(() => {
        setCourses([
          {
            id: 1,
            title: "DBMS Mastery",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
            instructor: "Arup Sir"
          },
          {
            id: 2,
            title: "Computer Networks",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            instructor: "Rahul Sir"
          },
          {
            id: 3,
            title: "Aptitude & Reasoning",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
            instructor: "Sneha Ma’am"
          }
        ]);
      });
  }, []);

  return (
    <div>

      {/* 🔥 HERO SECTION */}
      <div style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "40px" }}>
          Learning Today <br /> Leading Tomorrow
        </h1>
        <p>India's #1 Online Learning Platform 🚀</p>

        {/* 📱 MOBILE INPUT */}
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter mobile number"
            style={{
              padding: "10px",
              width: "250px",
              borderRadius: "5px",
              border: "none"
            }}
          />
          <button style={{
            marginLeft: "10px",
            padding: "10px 20px",
            background: "orange",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Get App Link
          </button>
        </div>
      </div>

      {/* 📚 COURSES */}
      <div style={{ padding: "20px" }}>
        <h2>🔥 Featured Courses</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          {courses.map(course => (
            <div key={course.id} style={{
              width: "250px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <img
                src={course.image}
                alt={course.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <div style={{ padding: "10px" }}>
                <h4>{course.title}</h4>
                <p>👨‍🏫 {course.instructor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎯 EXPLORE BY EXAMS */}
      <div style={{ padding: "20px", background: "#f8f8f8" }}>
        <h2>🎯 Explore by Exams</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}>

          {/* GOVERNMENT */}
          <div style={cardStyle}>
            <h3>🏛 Government Exams</h3>
            <ul>
              <li>Banking</li>
              <li>SSC</li>
              <li>Railways</li>
              <li>Teaching</li>
              <li>FCI</li>
              <li>UGC NET</li>
            </ul>
          </div>

          {/* STATE */}
          <div style={cardStyle}>
            <h3>📍 State Exams</h3>
            <ul>
              <li>West Bengal</li>
              <li>Bihar</li>
              <li>Odisha</li>
              <li>UP</li>
              <li>Tamil Nadu</li>
            </ul>
          </div>

          {/* ENGINEERING */}
          <div style={cardStyle}>
            <h3>⚙️ AE / JE Exams</h3>
            <ul>
              <li>Civil</li>
              <li>Electrical</li>
              <li>Mechanical</li>
              <li>Computer Science</li>
            </ul>
          </div>

          {/* IT & CSE */}
          <div style={cardStyle}>
            <h3>💻 IT & CSE Exams</h3>
            <ul>
              <li>GATE CS</li>
              <li>ISRO</li>
              <li>DRDO</li>
              <li>Software Jobs</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 📖 SUBJECTS */}
      <div style={{ padding: "20px" }}>
        <h2>📖 Subjects</h2>

        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>

          <div>
            <h3>💻 CSE</h3>
            <ul>
              <li>DBMS</li>
              <li>Operating System</li>
              <li>Computer Networks</li>
              <li>Data Structures</li>
              <li>Algorithms</li>
              <li>Software Engineering</li>
              <li>OOP</li>
            </ul>
          </div>

          <div>
            <h3>📊 Data Science</h3>
            <ul>
              <li>Python</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Statistics</li>
              <li>Data Visualization</li>
            </ul>
          </div>

          <div>
            <h3>🧮 Math & Aptitude</h3>
            <ul>
              <li>Quantitative Aptitude</li>
              <li>Arithmetic</li>
              <li>Algebra</li>
              <li>Probability</li>
              <li>Reasoning</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 👨‍🏫 FACULTY */}
      <div style={{ padding: "20px", background: "#f8f8f8" }}>
        <h2>👨‍🏫 Our Faculty</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          {[
            { name: "Arghya Sir", subject: "Networking" },
            { name: "Suman Sir", subject: "DBMS" },
            { name: "Sampad Sir", subject: "Aptitude" }
          ].map((teacher, i) => (
            <div key={i} style={cardStyle}>
              <h4>{teacher.name}</h4>
              <p>{teacher.subject}</p>
            </div>
          ))}
        </div>
      </div>

      

    </div>
  );
}

/* 🔥 REUSABLE CARD STYLE */
const cardStyle = {
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  width: "250px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};



export default Home;