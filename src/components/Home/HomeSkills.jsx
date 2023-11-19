import { useLanguageContext } from "../../context/language-context";

const HomeSkills = () => {
  const { language } = useLanguageContext();
  return (
    <section className="homeSkills">
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
    </section>
  );
};

export default HomeSkills;
