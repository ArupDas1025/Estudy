import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");      // ✅ message state
  const [isError, setIsError] = useState(false);   // ✅ success/error flag

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password) {
      setMessage("All fields are required");
      setIsError(true);
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/register", form);

      // ✅ show success message
      setMessage(res.data.message);
      setIsError(false);

      // 👉 redirect after 1.5 sec
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      console.error(err);

      // ✅ show error message
      setMessage(err?.response?.data?.message || "Something went wrong");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>

      {/* ✅ Message display */}
      {message && (
        <p
          style={{
            color: isError ? "red" : "green",
            marginBottom: "10px",
            fontWeight: "bold"
          }}
        >
          {message}
        </p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <input
          placeholder="Name"
          value={form.name}
          required
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
        />

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
          type="submit"
          disabled={loading}
          style={{ padding: "10px 20px", marginRight: "10px" }}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          style={{ padding: "10px 20px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;