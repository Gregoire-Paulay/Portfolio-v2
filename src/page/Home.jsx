import { useLanguageContext } from "../context/language-context";

const Home = () => {
  const { language } = useLanguageContext();
  return (
    <main>
      {language === "fr" ? (
        <div className="container">Bonjour</div>
      ) : (
        <div className="container">Hello</div>
      )}
    </main>
  );
};

export default Home;
