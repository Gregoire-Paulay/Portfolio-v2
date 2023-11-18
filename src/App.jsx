import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useThemeContext } from "./context/theme-context";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import Language from "./components/language";

//Page
import Home from "./page/Home";

const App = () => {
  const { theme } = useThemeContext();
  return (
    <Router>
      <div className={theme}>
        <Header />
        <Theme />
        <Language />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
