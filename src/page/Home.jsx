import { useLanguageContext } from "../context/language-context";
import profilePic from "../assets/Photo.jpg";

// Components
import HomeLink from "../components/Home/HomeLink";
import HomeSkills from "../components/Home/HomeSkills";

const Home = () => {
  const { language } = useLanguageContext();
  return (
    <>
      <div className="container">
        <div className="homePage">
          <h1>{language === "fr" ? "Accueil" : "Home"}</h1>
          <section className="profile">
            <div>
              <p className="profileDesc">
                {language === "fr" ? "Bienvenue, je suis" : "Hello, I am"}
              </p>
              <p className="profileName">Grégoire Paulay</p>
              <p className="profileDesc">
                {language === "fr"
                  ? " Développeur Full-Stack Web et Mobile Junior"
                  : " Junior Full-Stack Web and Mobile Developer"}
              </p>
            </div>
            <img
              src={profilePic}
              alt="Photo de profile"
              className="profilePic"
            />
          </section>

          <HomeLink />
          <HomeSkills />
          {/* <section className="homeLink">
            <a href="https://github.com/Gregoire-Paulay">
              <button className="contact">
                <i className="fa-brands fa-github"></i>
                <p>GitHub</p>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/grégoire-paulay-142384285/">
              <button className="contact">
                <i className="fa-brands fa-linkedin"></i>
                <p>Linkedin</p>
              </button>
            </a>
            <button className="contact">
              <i className="fa-solid fa-envelope"></i>
              <p>gregoirepaulay.pro@gmail.com</p>
            </button>
          </section> */}

          {/* <section className="homeSkills">
            <h2>{language === "fr" ? "Compétences" : "Skills"}</h2>
            <div>
              <div>
                <h3>{language === "fr" ? "Langages" : "Languages"}</h3>
                <a href="">
                  <img src="" alt="" />
                  <p>HTML</p>
                </a>
                <a href="">
                  <img src="" alt="" />
                  <p>CSS</p>
                </a>
                <a href="">
                  <img src="" alt="" />
                  <p>JavaScript</p>
                </a>
                <a href="">
                  <img src="" alt="" />
                  <p>TypeScript</p>
                </a>
              </div>

              <div>
                <h3>Front-End</h3>
                <a href="">
                  <img src="" alt="" />
                  <p>React</p>
                </a>
                <a href="">
                  <img src="" alt="" />
                  <p>React Native</p>
                </a>
                <a href="">
                  <img src="" alt="" />
                  <p>TailWind / nativeWind</p>
                </a>
              </div>

              <div>
                <h3>Back-End</h3>
                <a href="">
                  <img src="" alt="" />
                  <p>Node.js</p>
                </a>
                <a href="">
                  <img src="" alt="" />
                  <p>MongoDB</p>
                </a>
              </div>

              <div>
                <h3>Other</h3>
                <a href="">
                  <img src="" alt="" />
                  <p>GitHub</p>
                </a>
                <a href="">
                  <img src="" alt="" />
                  <p>Abode Illustartor</p>
                </a>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default Home;
