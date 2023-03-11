/** Renders About section
 *
 * Props: none
 * State: none
 *
 * Routes --> About
 */

function About() {
  return (
    <div className="AboutMe">
      <div className="container text-center ">
        <div className="p-5 mb-4 bg-light border rounded-3">
          <h1 className="mb-4 fw-bold">Who am I?</h1>
        </div>
      </div>
      <p>
            Hi I'm Diogo. I am an aspiring Web Developer, currently preparing to
            do the Rithm School Web Development Bootcamp.
          </p>
          <p>I am also a Program Manager, Analyst and Outreach Specialist.</p>
    </div>
  );
}

export default About;
