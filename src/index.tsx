import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "Store/ContextProviders/AuthContext";
import { ThemeContextProvider } from "Store/ContextProviders/ThemeContext";
import { Provider } from "react-redux";
import { store } from "Store/RTKStore/Store";
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
