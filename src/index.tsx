import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "Store/ContextProviders/ThemeContext";
import { Provider } from "react-redux";
import { store } from "Store/RTKStore/Store";
import "Styles/index.css";
import { AuthProvider } from "react-oidc-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const oidcConfig = {
  authority: "https://localhost:7121",
  client_id: "mybud",
  redirect_uri: "http://localhost:3000",
  response_type: "code",
  scope: "openid profile api1",
  post_logout_redirect_uri: "http://localhost:3000",
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <Provider store={store}>
          <AuthProvider {...oidcConfig}>
            <App />
          </AuthProvider>
        </Provider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
