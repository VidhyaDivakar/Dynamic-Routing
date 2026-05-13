import { Routes, Route } from "react-router-dom";

import BlogIndex from "../pages/BlogIndex";
import BlogPost from "../pages/BlogPost";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}