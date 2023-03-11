/** Renders Contact section
 *
 * Props: none
 * State: none
 *
 * Routes --> Contact
 */

function Contact() {
  return (
    <div className="Contact">
      <div className="container text-center ">
        <div className="p-5 mb-4 bg-light border rounded-3">
          <h1 className="mb-4 fw-bold">Contacts</h1>
        </div>
      </div>
      <div className="social_media_icons">
        <a id="linkedin" href="https://www.linkedin.com/in/diogofbotelho">
          Linkedin
        </a>
        <br/>
        <a id="github" href="https://github.com/diogo-botelho">
          Github
        </a>
        <br/>
        <a id="instagram" href="https://www.instagram.com/thisportuguese/">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Contact;
