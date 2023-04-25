import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "Store/AuthContext";
import { ThemeContextProvider } from "Store/ThemeContext";
import { Provider } from "react-redux";
import { store } from "Store/Store";
import "Styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
