import { Routes, Route } from "react-router-dom";
import BlogIndex from "../pages/BlogIndex";
import BlogPost from "../pages/BlogPost";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import ProtectedRoute from "./ProtectedRoute";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

export default function BlogIndex() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      ...
    </motion.div>
  );
}
const location = useLocation();

<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    ...
  </Routes>
</AnimatePresence>

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