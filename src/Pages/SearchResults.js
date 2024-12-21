import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard"; // Ensure the path to MovieCard is correct

const API_KEY = process.env.REACT_APP_API_KEY;; // Replace this with your actual API key

function SearchResults() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
          );
          setMovies(response.data.results);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      };
      fetchMovies();
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
}

export default SearchResults;
