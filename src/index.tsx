import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import { BrowserRouter } from "react-router-dom";
import "index.css";
import "Shared/Shared.css";
import { AuthContextProvider } from "Store/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
