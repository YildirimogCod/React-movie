import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { MovieCard } from './MovieCard'

export const WatchList = () => {
  const {watchlist} = useContext(GlobalContext)
  return (
    <div className='movie-page'>
     <div className='container'>
      <div className="header">
        <h1 className="heading">İzlenecek Filmler</h1>
        <div className="count-pill">
        {watchlist.length} {watchlist.length < 2 ? "Movie" : "Movies"}
        </div>
      </div>
      {watchlist.length > 0 && (
        <div className="movie-grid">
          {watchlist.map((movie)=>(
            <MovieCard movie={movie} type="watchlist"/>
          ))}
        </div>
      )}
     </div>
    </div>
  )
}
