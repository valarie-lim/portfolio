import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BackToTop from "./components/BackToTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import BlogFeed from "./components/BlogFeed.jsx";
import BlogPostDetail from "./components/BlogPostDetail.jsx";
import ScrollToHashElement from "./components/ScrollToHashElement";

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Header />

      <Routes>
        {/* Main portfolio page */}
        <Route path="/" element={<Home />} />

        {/* Standalone blog index page */}
        <Route path="/blog" element={<BlogFeed />} />

        {/* Dynamic single post reader page */}
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
      </Routes>

      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
