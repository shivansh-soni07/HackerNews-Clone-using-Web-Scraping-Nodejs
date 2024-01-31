import React from "react";
import NavBar from "./Components/navbar.js";
import Footer from "./Components/footer.js";
import Login from "./Components/login.js";
import Logout from "./Components/logout.js";
import TopStories from "./Components/topStories.js";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function NewsPage() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/news" && <Logout />}
      <TopStories />
    </div>
  );
}
