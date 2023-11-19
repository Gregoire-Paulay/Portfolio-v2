import { useLanguageContext } from "../../context/language-context";

// Image
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import js from "../../assets/javascript.png";
import ts from "../../assets/typescript.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.jpeg";
import node from "../../assets/node-js.png";
import mongo from "../../assets/mongodb.png";
import ai from "../../assets/AI.png";

const HomeSkills = () => {
  const { language } = useLanguageContext();
  return (
    <section className="homeSkills">
      <h2>{language === "fr" ? "Compétences" : "Skills"}</h2>
      <div>
        <section>
          <h3>{language === "fr" ? "Langages" : "Languages"}</h3>
          <a href="https://developer.mozilla.org/fr/docs/Web/HTML">
            <img src={html} alt="logo HTML" />
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/CSS_basics">
            <img src={css} alt="logo CSS" />
          </a>
          <a href="https://www.javascript.com">
            <img src={js} alt="logo JS" />
          </a>
          <a href="https://www.typescriptlang.org/">
            <img src={ts} alt="logo TS" />
          </a>
        </section>

        <section>
          <h3>Front-End</h3>
          <a href="https://react.dev/">
            <img src={react} alt="Logo React" />
            <p>React</p>
          </a>
          <a href="https://reactnative.dev/">
            <img src={react} alt="Logo React" />
            <p>React Native</p>
          </a>
          <a href="https://tailwindcss.com/">
            <img src={tailwind} alt="Logo Tailwind" />
            <p>TailWind / NativeWind</p>
          </a>
        </section>

        <section>
          <h3>Back-End</h3>
          <a href="https://nodejs.org/fr">
            <img src={node} alt="Logo Node-js" />
          </a>
          <a href="https://www.mongodb.com/fr-fr">
            <img src={mongo} alt="Logo MongoDB" />
          </a>
        </section>

        <section>
          <h3>Other</h3>
          <a href="https://github.com/Gregoire-Paulay">
            <i className="fa-brands fa-github"></i>
            <p>Git & GitHub</p>
          </a>
          <a href="https://www.adobe.com/fr/products/illustrator.html">
            <img src={ai} alt="Logo Adobe illustrator" />
            <p>Abode Illustrator</p>
          </a>
        </section>
      </div>
    </section>
  );
};

export default HomeSkills;
