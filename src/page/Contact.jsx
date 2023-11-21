import axios from "axios";
import { useState } from "react";
import { useLanguageContext } from "../context/language-context";
import ContactLink from "../components/Contact/contactLink";

const Contacts = () => {
  const { language } = useLanguageContext();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(
        "https://site--formulaire--hpyqm5px6d9r.code.run/form",
        { email, name, sujet, message }
      );
      console.log(response.data);
      setSuccess("Your message have been sent");
    } catch (error) {
      if (!email || !name || !sujet || !message) {
        setError("All fields must be complete");
      } else {
        setError("An error occurred");
      }
    }
  };

  const handleChange = (event, set) => {
    setError("");
    setSuccess("");
    set(event.target.value);
  };

  return (
    <main>
      <div className="container">
        <form className="message" onSubmit={handleSubmit}>
          <h1>Contacts</h1>
          <div>
            <label htmlFor="name">
              {language === "fr"
                ? "Veuillez saisir votre nom :"
                : "Please enter your name :"}
            </label>
            <input
              type="text"
              id="name"
              placeholder={language === "fr" ? "Votre nom" : "Your name"}
              onChange={(event) => {
                handleChange(event, setName);
              }}
            />
          </div>

          <div>
            <label htmlFor="email">
              {language === "fr"
                ? "Veuillez saisir votre email :"
                : "Please enter your email :"}
            </label>
            <input
              type="email"
              id="email"
              placeholder={language === "fr" ? "Votre email" : "Your email"}
              onChange={(event) => {
                handleChange(event, setEmail);
              }}
            />
          </div>

          <div>
            <label htmlFor="sujet">
              {language === "fr"
                ? "Veuillez saisir le sujet de votre message :"
                : "Please enter the subject of your message :"}
            </label>
            <input
              type="text"
              id="sujet"
              placeholder={language === "fr" ? "Votre sujet" : "Your subject"}
              onChange={(event) => {
                handleChange(event, setSujet);
              }}
            />
          </div>

          <div>
            <label htmlFor="message">
              {language === "fr"
                ? "Veuillez saisir votre message :"
                : "Please enter your message :"}
            </label>
            <textarea
              type="text"
              id="message"
              rows={10}
              cols={64}
              name="message"
              placeholder={language === "fr" ? "Votre message" : "Your message"}
              onChange={(event) => {
                handleChange(event, setMessage);
              }}
            />
          </div>
          <div className="sendMessage">
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <button type="submit">
              {language === "fr" ? "Envoyer" : "Send"}
            </button>
          </div>
        </form>
        <ContactLink />
      </div>
    </main>
  );
};

export default Contacts;
