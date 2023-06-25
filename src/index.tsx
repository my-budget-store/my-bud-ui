import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "context/themeContext";
import { store } from "redux/store";
import { AuthContextProvider } from "context/AuthContext";
import App from "./App";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from "constants/oidcConfig";
import "styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <Provider store={store}>
          <AuthProvider {...oidcConfig}>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </AuthProvider>
        </Provider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
