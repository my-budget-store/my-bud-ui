import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "Store/ContextProviders/AuthContext";
import { ThemeContextProvider } from "Store/ContextProviders/ThemeContext";
import { Provider } from "react-redux";
import { store } from "Store/RTKStore/Store";
import "Styles/index.css";
import configureStore from "Store/CustomStore/SearchValueStore";

configureStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          {/* RTK pattern */}
          {/* <Provider store={store}> */}
          {/* </Provider> */}

          {/* Context Api pattern */}
          {/* <SearchContextProvider> */}
          {/* </SearchContextProvider> */}
          <App />
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
