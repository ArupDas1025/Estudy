import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Student from "./pages/Students";
import Admin from "./pages/Admin";
import Teacher from "./pages/Teacher";

import AddCourse from "./pages/AddCourse";
import ManageCourses from "./pages/ManageCourses";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 👨‍🎓 Student */}
        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <Student />
            </ProtectedRoute>
          }
        />

        {/* 👨‍🏫 Teacher */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute role="teacher">
              <Teacher />
            </ProtectedRoute>
          }
        />

        {/* 👑 Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-course"
          element={
            <ProtectedRoute role="admin">
              <AddCourse />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/courses"
          element={
            <ProtectedRoute role="admin">
              <ManageCourses />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;