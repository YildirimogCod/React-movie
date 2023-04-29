import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const ResultCard = ({movie}) => {
  const {watchlist,addMovieToWatchlist,watched,addMovieToWatched } = useContext(GlobalContext)
  const storedMovie = watchlist.find((o)=>o.id === movie.id)
  const storedMovieWatched = watched.find((o) => o.id === movie.id);
  return (
    <div className='result-card'>
        <div className="poster-wrapper">
          {
            movie.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.poster_path}`} />
            ) :  <div className='filler-poster'>

            </div>
          }
           
           
        </div>
        <div className="info">
            <div className="header">
                <h3 className='title'>{movie.title}</h3>
                <h4 className='release-date'>{
                movie.release_date ? movie.release_date.substring(0,4) : "bilgisi yok"
                }</h4>
                  <h4 className='release-date'>
                    IMDB: <b>{Math.round( movie.vote_average)}</b>   
                </h4>
            </div>
            <div className="controls">
              <button disabled={storedMovie} className='btn' onClick={()=>addMovieToWatchlist(movie)}>Add to Watchlist</button>
              <button
            className="btn"
            disabled={storedMovieWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
            </div>
            
        </div>
    </div>
  )
}
