import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // 👈 get role

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav
      style={{
        padding: "10px",
        background: "#222",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* LEFT SIDE */}
      <div>
        <Link to="/" style={{ marginRight: 10, color: "#fff" }}>Home</Link>

        {/* ✅ Role-based menus */}
        {token && role === "student" && (
          <Link to="/student" style={{ marginRight: 10, color: "#fff" }}>
            My Courses
          </Link>
        )}

        {token && role === "teacher" && (
          <Link to="/teacher" style={{ marginRight: 10, color: "#fff" }}>
            My Function
          </Link>
        )}

        {token && role === "admin" && (
          <Link to="/admin" style={{ marginRight: 10, color: "#fff" }}>
            Admin Panel
          </Link>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div>
        {!token ? (
          <Link
            to="/login"
            style={{
              background: "green",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              background: "red",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;