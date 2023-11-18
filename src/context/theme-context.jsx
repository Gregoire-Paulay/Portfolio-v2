import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(Cookies.get("mode") ? "night" : "light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Error !");
  }

  return context;
}
