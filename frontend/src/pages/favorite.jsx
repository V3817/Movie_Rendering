import React from 'react';
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/moviecontext';
import '../css/Favorites.css';


function Favorite() {
  const { favorites } = useMovieContext();
  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h1> My Favorite Movies</h1>
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }     
  return (
    <div className="empty-favorites">
      <h1> No Favorite Movies yet</h1>
      <p>Your favorite movies will be displayed here.</p>
    </div>
  );
}

export default Favorite;
