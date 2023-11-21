import { useLanguageContext } from "../context/language-context";
import { useThemeContext } from "../context/theme-context";

const AboutMe = () => {
  const { language } = useLanguageContext();
  const { theme } = useThemeContext();
  return (
    <main>
      <div className="container">
        {language === "fr" ? (
          <div
            className={
              theme === "light" ? "aboutMeDescLight" : "aboutMeDescNight"
            }
          >
            <h1>À propos</h1>
            <p>
              Salut, je suis Grégoire Paulay, un développeur Full-Stack Web et
              Mobile Junior. Je suis un ancien géologue spécialisé dans le
              littoral qui à décider il y a plusieurs mois de se reconvertir
              dans le monde incroyable du développement web et mobile.
            </p>
            <p>
              Je viens de terminez ma formation chez
              <a href="https://www.lereacteur.io"> Le Reacteur</a> et suis
              actuellement à la recherche d'un stage de 6 mois pour obtenir mon
              titre RNCP lié à cette formation.
            </p>
            <p>
              Ce bootcamp intensif m'a permis d'acquérir des compétences solides
              en développement fullstack. J'ai pu apprendre à maitriser
              Javascript, Node.js, React et MongoDB. Grâce à une pédagogie axée
              sur la pratique, j'ai développé une base solide pour concevoir et
              déployer des applications web et mobiles. Le programme m'a
              également outillé pour résoudre des problèmes complexes, me
              concentrer en premier lieu sur le fonctionnel et m'adapter
              rapidement aux évolutions technologiques.
            </p>
          </div>
        ) : (
          <div
            className={
              theme === "light" ? "aboutMeDescLight" : "aboutMeDescNight"
            }
          >
            <h1>À propos</h1>
            <p>
              Hello, I'm Grégoire Paulay, a Junior Full-Stack Web and Mobile
              Developer. I am a former geologist specializing in the coast who
              decided in early 2023 to reconvert myself to the world of web and
              mobile development.
            </p>
            <p>
              I just finished my training at{" "}
              <a href="https://www.lereacteur.io"> Le Reacteur</a> and i am
              currently looking for a 6 month internship to obtain my RNCP title
              linked to my training.
            </p>
            <p>
              This intensive bootcamp allowed me to acquire solid skills in
              full-stack development. I was able to learn to master JavaScript,
              Node.js, React, React Native, MongoDB and TypeScript. Thanks to
              being focused on practice, i developed a solid foundation for
              designing and deploy web and mobile applications. The bootcamp
              also gave me tools to solve complex problems, focus first on the
              functional side and to adapt quickly to technological development.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default AboutMe;
