import { Route, Routes } from "react-router-dom";
import Home from "./Home"

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
    </Routes>
  );
}

export default AllRoutes;
