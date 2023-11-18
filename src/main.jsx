import "./index.css";

import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
