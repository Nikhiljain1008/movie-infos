import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import SearchResults from "./Pages/SearchResults";
//import Favorites from "./pages/Favorites";
//import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      {/* Global Navbar - visible on all pages */}
      <Navbar />

      {/* Main app content controlled by routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Homepage - trending movies */}
        <Route path="/movie/:id" element={<MovieDetails />} /> {/* Movie details */}
        <Route path="/search" element={<SearchResults />} /> {/* Search results */}
      </Routes>
    </Router>
  );
}

export default App;
