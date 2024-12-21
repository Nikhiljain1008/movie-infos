import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../api";
import MovieCard  from "../components/MovieCard";



console.log(MovieCard); // Should log a function/component
console.log(getTrendingMovies); 
console.log ("nikhil jain")

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    };
    fetchMovies();
  }, []);

    console.log(movies)
  return (
    <div>
      <h1>Trending Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
