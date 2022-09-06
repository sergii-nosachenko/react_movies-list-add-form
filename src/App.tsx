import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';

import { Movie } from './types/Movie';

import './App.scss';

import moviesFromServer from './api/movies.json';

export const App = () => {
  const [movies, setMovies] = useState(moviesFromServer);
  const [count, setCount] = useState(0);

  const handleAdd = (movie: Movie) => {
    setMovies(prevMovies => ([
      ...prevMovies,
      movie,
    ]));
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <NewMovie onAdd={handleAdd} key={count} />
      </div>
    </div>
  );
};