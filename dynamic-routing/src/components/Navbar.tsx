import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav>
      <Link to="/blog">Blog</Link>{" | "}

      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>{" | "}
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  );
}