import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact</h1>
      <h2>Let's network</h2>

      <div className="contact-form-container">
        <form
          action="https://getform.io/f/06153dd2-f8e4-4fcb-96af-97b81456d2a0"
          method="POST"
          className="contact-form"
        >
          <input name="name" placeholder="Name" type="text" required></input>
          <input name="email" placeholder="Email" type="email" required></input>
          <textarea
            id="message"
            cols="50"
            rows="10"
            name="message"
            placeholder="Message"
            class="input-field"
            required
          ></textarea>

          <button type="submit" className="button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
