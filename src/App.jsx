import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import InformationPage from "./pages/InformationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ReviewPage from "./pages/ReviewPage";
import BlogPage from "./pages/BlogPage";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
