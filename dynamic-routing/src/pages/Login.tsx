import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <div className="page">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}