import { useLanguageContext } from "../context/language-context";
import { useState } from "react";
import Cookies from "js-cookie";

const Language = () => {
  const { language, setLanguage } = useLanguageContext();
  const [languageButton, setLanguageButton] = useState(
    Cookies.get("language") ? "enButton" : "frButton"
  );

  return (
    <div>
      <button
        className={languageButton}
        onClick={() => {
          if (language === "fr") {
            const language = "en";
            Cookies.set("language", language, { expires: 15 });
            setLanguage("en");
            setLanguageButton("enButton");
          } else {
            Cookies.remove("language");
            setLanguage("fr");
            setLanguageButton("frButton");
          }
        }}
      >
        {languageButton === "frButton" ? (
          <p>
            <i className="fa-solid fa-language"></i> - fr
          </p>
        ) : (
          <p>
            <i className="fa-solid fa-language"></i> - en
          </p>
        )}
      </button>
    </div>
  );
};

export default Language;
