import { useThemeContext } from "../context/theme-context";
import { useState } from "react";
import Cookies from "js-cookie";

const Theme = () => {
  const { theme, setTheme } = useThemeContext();
  const [themeButton, setThemeButton] = useState(
    Cookies.get("mode") ? "sun" : "moon"
  );

  return (
    <div>
      <button
        className={themeButton}
        onClick={() => {
          if (theme === "night") {
            Cookies.remove("mode");
            setTheme("light");
            setThemeButton("moon");
          } else {
            const mode = "night";
            Cookies.set("mode", mode, { expires: 15 });
            setTheme("night");
            setThemeButton("sun");
          }
        }}
      >
        {themeButton === "sun" ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </button>
    </div>
  );
};

export default Theme;
