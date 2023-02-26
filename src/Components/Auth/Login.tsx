import AuthService from "Services/AuthService";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "Store/AuthContext";
import "Styles/Login.css";

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
      <br />
      <br />
      <br />
      <label className="big-label">Sign In</label>
      <br />
      <br />
      <br />
      <input
        type="text"
        className="text-input place-well"
        placeholder="Email/Phone Number"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        className="text-input place-well"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" className="submit-button place-well" />
    </form>
  );
};
