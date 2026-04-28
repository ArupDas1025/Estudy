import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");     // ✅ message state
  const [isError, setIsError] = useState(false);  // ✅ success/error flag

  const navigate = useNavigate();

  const handleLogin = async () => {
    // ✅ validation
    if (!form.email || !form.password) {
      setMessage("All fields are required");
      setIsError(true);
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", form);

      // ✅ show success message
      setMessage(res.data.message);
      setIsError(false);

      // ✅ store token & role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      // 👉 redirect after short delay
      setTimeout(() => {
        if (res.data.role === "admin") {
          navigate("/admin");
        } else if (res.data.role === "teacher") {
          navigate("/teacher");
        } else {
          navigate("/student");
        }
      }, 1200);

    } catch (err) {
      console.error(err);

      // ✅ show error message
      setMessage(err?.response?.data?.message || "Login failed");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      {/* ✅ Message display */}
      {message && (
        <p
          style={{
            color: isError ? "red" : "green",
            fontWeight: "bold",
            marginBottom: "10px"
          }}
        >
          {message}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        required
        onChange={e => setForm({ ...form, email: e.target.value })}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        required
        onChange={e => setForm({ ...form, password: e.target.value })}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{ padding: "10px 20px", marginRight: "10px" }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <button
        onClick={handleRegister}
        style={{ padding: "10px 20px" }}
      >
        Register
      </button>
    </div>
  );
}

export default Login;