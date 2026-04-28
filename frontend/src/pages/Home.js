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
    <div style={{ padding: "20px" }}>

      {/* 🔥 NEW HERO SECTION (ADDED) */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#fff",
        padding: "60px 20px",
        borderRadius: "10px",
        marginBottom: "30px"
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between"
        }}>

          {/* LEFT */}
          <div style={{ maxWidth: "500px" }}>
            <h1 style={{ fontSize: "40px" }}>
              Learning Today <br /> Leading Tomorrow
            </h1>

            <p style={{ marginTop: "10px" }}>
              Learn CSE, Data Science & Aptitude from India's top educators 🚀
            </p>

            {/* 📱 INPUT */}
            <div style={{ display: "flex", marginTop: "20px", gap: "10px" }}>
              <input
                type="text"
                placeholder="Enter mobile number"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none"
                }}
              />
              <button style={{
                background: "#22c55e",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer"
              }}>
                Get Link
              </button>
            </div>

            <button style={{
              marginTop: "15px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              Download App
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="learning"
            style={{ width: "350px", borderRadius: "10px" }}
          />
        </div>
      </div>



             {/* 🏆 EXPLORE BY EXAMS (NEW SECTION) */}
      <h2 style={{ marginTop: "50px" }}>Explore by Exams</h2>

        <div style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "20px"
        }}>
          {[
            "GATE",
            "",
            "",
            "Teaching",
            "  ",
            "",
            "",
            " "
          ].map((exam, i) => (
            <div key={i} style={{
              padding: "15px 20px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}>
              {exam}
            </div>
          ))}
        </div>

      {/* 📚 COURSES */}
      <h2>Featured Courses</h2>

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

      {/* 📖 SUBJECTS */}
      <h2 style={{ marginTop: "40px" }}>Subjects</h2>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>

        <div>
          <h3>💻 Computer Science</h3>
          <ul>
            <li>DBMS</li>
            <li>Operating System</li>
            <li>Computer Networks</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Software Engineering</li>
            <li>OOP</li>
            <li>Compiler Design</li>
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
          <h3>🧮 Aptitude</h3>
          <ul>
            <li>Arithmetic</li>
            <li>Algebra</li>
            <li>Geometry</li>
            <li>Probability</li>
            <li>Reasoning</li>
          </ul>
        </div>

      </div>

      {/* 👨‍🏫 FACULTY */}
      <h2 style={{ marginTop: "40px" }}>Our Faculty</h2>

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
          <div key={i} style={{
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            width: "200px",
            textAlign: "center"
          }}>
            <h4>{teacher.name}</h4>
            <p>{teacher.subject}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;