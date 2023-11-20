const ContactLink = () => {
  return (
    <section className="contactLink">
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
    </section>
  );
};

export default ContactLink;
