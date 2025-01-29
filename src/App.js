import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <nav>
            <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> |{" "}
            <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;