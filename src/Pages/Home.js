import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../api";
import MovieCard from "../components/MovieCard";
import './Home.css'; // Importing CSS for styling

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    };
    fetchMovies();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to MovieStream</h1>
        <p>Discover the most popular movies trending today!</p>
      </div>

      {/* Trending Movies Section */}
      <h2 className="section-title">Trending Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
