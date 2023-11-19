import { useLanguageContext } from "../../context/language-context";
import profilePic from "../../assets/Photo.jpg";

const HomeProfile = () => {
  const { language } = useLanguageContext();
  return (
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
      <img src={profilePic} alt="Photo de profile" className="profilePic" />
    </section>
  );
};

export default HomeProfile;
