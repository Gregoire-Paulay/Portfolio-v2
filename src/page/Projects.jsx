import { useLanguageContext } from "../context/language-context";
import { useThemeContext } from "../context/theme-context";
import data from "../assets/data/projects.json";

const Projects = () => {
  const { language } = useLanguageContext();
  const { theme } = useThemeContext();
  return (
    <main>
      <div className="container">
        <div className="projectsPage">
          <h1>Projets</h1>
          {language === "fr" ? (
            <p
              className={
                theme === "light" ? "projectHookLight" : "projectHookDark"
              }
            >
              Ici vous pouvez voir quelques uns des projets que j'ai pu
              réaliser. Au delà des fonctionnalités de l'application il me
              semble indispensable d'intéger certains concepts comme
              l'accessibilité, la sécurité ainsi qu'un contenu responsive au
              sein de mes créations. Excépté le projet TechSight, tout mes
              autres projets sont documentés dans mon{" "}
              <a href="https://github.com/Gregoire-Paulay">GitHub</a>.
            </p>
          ) : (
            <p
              className={
                theme === "light" ? "projectHookLight" : "projectHookDark"
              }
            >
              Here you can see some of the projects I was able to carry out.
              Beyond the functionalities of the application it seems essential
              for me to integrate certain concepts such as accessibility,
              security as well as responsive content within my creations. Except
              the TechSight project, all my other projects are documented in my{" "}
              <a href="https://github.com/Gregoire-Paulay">GitHub</a>
            </p>
          )}
          <nav className="projectNav">
            <a href="#Vinted">Vinted</a>
            <a href="#Marvel">Marvel</a>
            <a href="#TechSight">TechSight</a>
            <a href="#Poké-Info">Poké-Info</a>
          </nav>

          <div className="allProjects">
            {data.map((project) => {
              return (
                <div key={project.name} id={project.name}>
                  <h2>{project.name}</h2>
                  <img src={project.picture} alt="" />
                  <div className="techno">
                    {project.techno.map((techno) => {
                      return (
                        <div>
                          <img src={techno.logo} alt="Logo" />
                          <p>{techno.name}</p>
                        </div>
                      );
                    })}
                  </div>

                  {language === "fr" ? (
                    <p
                      className={
                        theme === "light"
                          ? "projectDescriptionLight"
                          : "projectDescriptionDark"
                      }
                    >
                      {project.descriptionFr}
                    </p>
                  ) : (
                    <p
                      className={
                        theme === "light"
                          ? "projectDescriptionLight"
                          : "projectDescriptionDark"
                      }
                    >
                      {project.descriptionEn}
                    </p>
                  )}

                  <div className="projectLinks">
                    {project["github-back"] && (
                      <a href={project["github-back"]}>
                        <button className="contact">
                          <i className="fa-brands fa-github"></i>
                          <p>Back-end</p>
                        </button>
                      </a>
                    )}
                    {project["github-front"] && (
                      <a href={project["github-front"]}>
                        <button className="contact">
                          <i className="fa-brands fa-github"></i>
                          <p>Front-end</p>
                        </button>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link}>
                        <button className="contact">
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          <p>Site {project.name}</p>
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
