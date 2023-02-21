import { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "Services/AuthService";

export const Login = (props: any) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const isSuccess = await AuthService.Login(userName, password);
    if (isSuccess) props.onLogin();
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1>Sign In</h1>
      <label>Username</label>
      {newFunction("username",userName, setUserName)}
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
function newFunction(
  placeHolderText: string,
  inputValue: string,
  setInputValueContext: any
) {
  const newLocal = "username";
  return (
    <input
      type="text"
      placeholder={placeHolderText}
      value={inputValue}
      onChange={(e) => setInputValueContext(e.target.value)}
    />
  );
}
