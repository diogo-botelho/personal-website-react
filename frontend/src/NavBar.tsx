import { Link } from "react-router-dom";
import { useState } from "react";

/** Renders NavLinks
 *
 * Props: none
 * State: none
 *
 * App -> NavBar
 */
function NavBar() {
  const [toggled, setToggle] = useState(false);

  const toggle = () => setToggle((toggled) => !toggled);

  // const currentUser = useContext(UserContext);

  return (
    <nav className="d-flex navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand me-auto" href="/">
          Diogo Botelho
        </a>
        <button
          onClick={toggle} // need an onClick to toggle
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navItems"
          aria-controls="navItems"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navItems"
          className={`navbar-collapse ${!toggled ? "collapse" : ""}`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggle}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={toggle}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggle}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
