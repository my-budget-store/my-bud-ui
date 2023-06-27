import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "context/themeContext";
import { store } from "redux/store";
import { AuthContextProvider } from "context/AuthContext";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from "constants/oidcConfig";
import "styles/index.css";
import { router } from "routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Provider store={store}>
        <AuthProvider {...oidcConfig}>
          <AuthContextProvider>
            <App />
            <RouterProvider router={router} />
          </AuthContextProvider>
        </AuthProvider>
      </Provider>
    </ThemeContextProvider>
  </React.StrictMode>
);
