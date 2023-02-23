import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "Services/AuthService";
import { AuthContext } from "Store/AuthContext";
import "Components/Login/Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const isSuccess = await AuthService.Login(userName, password);
    if (isSuccess) authContext.onLoginHandler();
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1>Sign In</h1>
      <label>Username</label>
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>Password</label>
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};
