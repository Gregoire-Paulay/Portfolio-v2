import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../context/language-context";

const Header = () => {
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  return (
    <header>
      <div className="container">
        <div className="header-nav">
          <button
            className="nav-first"
            onClick={() => {
              navigate("/");
            }}
          >
            {language === "fr" ? " Accueil" : " Home"}
          </button>
          <button
            onClick={() => {
              navigate("/AboutMe");
            }}
          >
            {language === "fr" ? " À propos" : " About Me"}
          </button>
          <button
            onClick={() => {
              navigate("/Projects");
            }}
          >
            {language === "fr" ? " Projets" : " Projects"}
          </button>
          {/* <button> {language === "fr" ? " Formations" : " Courses"}</button> */}
          <button
            className="nav-last"
            onClick={() => {
              navigate("/Contacts");
            }}
          >
            Contacts
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
