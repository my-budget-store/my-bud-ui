import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "context/themeContext";
import { store } from "redux/store";
import { AuthContextProvider } from "context/AuthContext";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from "constants/oidcConfig";
import "styles/index.css";
import { router } from "components/Routes/routes";

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
              <RouterProvider router={router}>
                <App />
              </RouterProvider>
            </AuthContextProvider>
          </AuthProvider>
        </Provider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
