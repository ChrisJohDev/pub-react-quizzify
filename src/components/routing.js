import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Quizzes from "../pages/quizzes.js";
import Contact from "../pages/contact.js";
import Result from "../pages/result.js";
import Printable from "../pages/printable.js";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/quizzes" element={<Quizzes />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/result" element={<Result />} />
        <Route exact path="/printable" element={<Printable />} />
      </Routes>
    </Router>
  );
};

export default Routing;