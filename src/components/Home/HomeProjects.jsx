import { useLanguageContext } from "../../context/language-context";
import { useThemeContext } from "../../context/theme-context";
import data from "../../assets/data/homeProjects.json";
import { useNavigate } from "react-router-dom";

const HomeProjects = () => {
  const { language } = useLanguageContext();
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  return (
    <section className="homeProject">
      <h2>{language === "fr" ? "Mes Projets" : "My Projects"}</h2>
      <div>
        {data.map((project) => {
          return (
            <div
              key={project.name}
              className={
                theme === "light"
                  ? "homeProjectDescLight"
                  : "homeProjectDescDark"
              }
            >
              <h3>{project.name}</h3>
              <p>
                {language === "fr"
                  ? project.descriptionFr
                  : project.descriptionEn}
              </p>

              <a href={project.link} className="siteLink">
                <i className="fa-solid fa-link"></i>
              </a>
              <div className="homeProjectGit">
                {project["github-front"] && (
                  <a href={project["github-front"]} className="contact">
                    <i className="fa-brands fa-github"></i>
                    Github front
                  </a>
                )}
                {project["github-back"] && (
                  <a href={project["github-back"]} className="contact">
                    <i className="fa-brands fa-github"></i>
                    Github back
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p
        onClick={() => {
          navigate("/Projects");
        }}
      >
        {language === "fr"
          ? "Pour voir plus de projets cliquer ici"
          : "For more projects click here"}
      </p>
    </section>
  );
};

export default HomeProjects;
