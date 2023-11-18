import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const LanguageContext = createContext(null);

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState(
    Cookies.get("language") ? "fr" : "en"
  );
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Error !");
  }

  return context;
}
