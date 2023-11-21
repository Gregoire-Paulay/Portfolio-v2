import { useLanguageContext } from "../context/language-context";

// Components
import HomeProfile from "../components/Home/HomeProfile";
import HomeLink from "../components/Home/HomeLink";
import HomeSkills from "../components/Home/HomeSkills";
import HomeProjects from "../components/Home/HomeProjects";

const Home = () => {
  const { language } = useLanguageContext();
  return (
    <main>
      <div className="container">
        <div className="homePage">
          <h1>{language === "fr" ? "Accueil" : "Home"}</h1>
          <HomeProfile />
          <HomeLink />
          <HomeSkills />
          <HomeProjects />

          <div className="homeContacts">
            <h2>Contact</h2>
            <p>
              {language === "fr"
                ? "N'hésitez pas à me contacter par mail ou via mes réseaux sociaux."
                : "Feel free to contact me by email or through my social network."}
            </p>
            <HomeLink />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
