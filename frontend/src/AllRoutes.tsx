import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Project from "./Project"
import Contact from "./Contact"

/**Renders Routes
 *
 * Props: none
 * State: none
 * Context: none
 *
 * App -> Routes -> {
 *              HomePage
 *          }
 */
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AllRoutes;
