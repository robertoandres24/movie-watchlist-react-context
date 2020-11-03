import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from './MovieCard';

export const Watched = () => {
  const { watched } = useContext(GlobalContext)
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My watched movies</h1>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map(movie => (
              <MovieCard movie={movie} type='watched' />
            ))}
          </div>
        ) : (
            <h2 className='no-movies'>no movies in watched</h2>
          )}

      </div>
    </div>
  )
}
