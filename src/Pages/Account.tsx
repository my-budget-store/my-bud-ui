import { useContext } from "react";
import { ThemeContext } from "Store/ContextProviders/ThemeContext";
import "Styles/account.css";

export const Account = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <h1>Account Settings</h1>
      <div className="account-container">
        <span className="options-container">Personalization</span>
        <span className="vl" />
        <span className="values-container">
          <div>
            <span>Theme</span>
            <span>
              <select onChange={themeContext.themeIconHandler}>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
              </select>
            </span>
          </div>
        </span>
      </div>
    </>
  );
};
