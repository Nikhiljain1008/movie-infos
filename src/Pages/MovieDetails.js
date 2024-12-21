import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  

  useEffect(() => {
    async function fetchMovieDetails() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      setMovie(response.data);
    }
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
}

export default MovieDetails;
