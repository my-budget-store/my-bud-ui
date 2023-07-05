import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "context/ThemeContext";
import { store } from "redux/store";
import { AuthContextProvider } from "context/AuthContext";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from "constants/oidcConfig";
import "styles/index.css";
import "styles/shared/dropdowns.css";
import { RouterProvider } from "react-router";
import { router as browserRouter } from "router/browserRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Provider store={store}>
        <AuthProvider {...oidcConfig}>
          <AuthContextProvider>
            <RouterProvider router={browserRouter} />
          </AuthContextProvider>
        </AuthProvider>
      </Provider>
    </ThemeContextProvider>
  </React.StrictMode>
);
