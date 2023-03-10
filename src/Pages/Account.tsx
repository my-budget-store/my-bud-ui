import "Styles/account.css";

export const Account = (props: any) => {
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
              <select onChange={props.ThemeIconHandler}>
                <option value=""></option>
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
