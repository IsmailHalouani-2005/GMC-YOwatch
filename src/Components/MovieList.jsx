import React from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'

const MovieList = props => {
    return(
        <div className="list">
            <div className="left">
                <i className="fas fa-chevron-left direction"></i>
            </div>
            <div className="movieCards">      
                {props.list.map( e => {
                    return <MovieCard title={e.title} description={e.description} posterURL={e.posterURL} rate={e.rate}/>
                })}
                
            </div>
            <div className="right">
                <i className="fas fa-chevron-right direction"></i>
            </div>
        </div>
    )
}
export default MovieList; 