import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../context/index";
import Header from "../header";
import Footer from "../footer";
import Home from "../home";
import Services from "../services";
import Queries from "../queries";
import About from "../about";

function RouteComp() {
  let { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Router>
        {window.location.pathname !== "/login" &&
        window.location.pathname !== "/" ? (
          <>
            <Header />
          </>
        ) : null}{" "}
        <Routes>
          <Route exact path="/home" key="home" element={<Home />} />
          <Route exact path="/services" key="services" element={<Services />} />
          <Route exact path="/queries" key="queries" element={<Queries />} />
          <Route exact path="/about" key="about" element={<About />} />
          <Route
            path="*"
            key="random"
            element={<Navigate to="/home" replace />}
          />
        </Routes>
        {window.location.pathname !== "/login" &&
        window.location.pathname !== "/" ? (
          <>
            <Footer />
          </>
        ) : null}{" "}
      </Router>
    </>
  );
}

export default RouteComp;
