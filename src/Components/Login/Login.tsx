import { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "Services/AuthService";

export const Login = (props: any) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const isSuccess = await AuthService.Login(userName, password);
    if (isSuccess) props.onLogin();

    navigate("/", { replace: true });
  };

  return (
    <div className="active">
      <div className="login-form">
        <div className="form-box solid">
          <form onSubmit={handleSubmit}>
            <h1 className="login-text">Sign In</h1>
            <br></br>
            <label>Username</label>
            <br></br>
            <input
              type="text"
              value={userName}
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="text"
              value={password}
              placeholder="username"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};
