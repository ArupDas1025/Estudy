import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Admin Dashboard 👑</h2>
      <p>Manage your platform</p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap"
      }}>
        
        {/* ➕ Add Course */}
        <div
          onClick={() => navigate("/admin/add-course")}
          style={cardStyle}
        >
          <h3>➕ Add Course</h3>
          <p>Create new course</p>
        </div>

        {/* 📋 View Courses */}
        <div
          onClick={() => navigate("/admin/courses")}
          style={cardStyle}
        >
          <h3>📋 Manage Courses</h3>
          <p>Edit / Delete courses</p>
        </div>

        {/* 👨‍🎓 Users */}
        <div
          onClick={() => navigate("/admin/users")}
          style={cardStyle}
        >
          <h3>👨‍🎓 Manage Users</h3>
          <p>Students / Teachers</p>
        </div>

      </div>
    </div>
  );
}

// reusable card style
const cardStyle = {
  width: "200px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  background: "#fff"
};

export default Admin;