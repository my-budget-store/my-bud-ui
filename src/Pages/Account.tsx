import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import accountStyles from "styles/account.module.css";

export default function Account() {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <h1>Account Settings</h1>
      <div className={accountStyles["account-container"]}>
        <span className={accountStyles["options-container"]}>
          Personalization
        </span>
        <span className={accountStyles["vl"]} />
        <span className={accountStyles["values-container"]}>
          <div>
            <span>Theme</span>
            <span>
              <select onChange={themeContext.themeIconHandler}>
                <option value=""></option>
                <option value="dark">Dark</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
              </select>
            </span>
          </div>
        </span>
      </div>
    </>
  );
}
