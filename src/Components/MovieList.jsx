import React from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'
import DescriptionLink from './Description'
import { Link, Route, Switch,useRouteMatch,Router } from 'react-router-dom'

const MovieList = ({data}) => {
    let match = useRouteMatch();

    return(
        <div className="list">
            <div className="left">
                <i className="fas fa-chevron-left direction"></i>
            </div>
            <div className="movieCards" >
                {data.map( e => {
                    return <Link to={`/details/${e.id}`} >
                            <MovieCard title={e.title} description={e.description} posterURL={e.posterURL} rate={e.rate}/>
                            </Link>
                })}
            </div>
            <div className="right">
                <i className="fas fa-chevron-right direction"></i>
            </div>
        </div>
    )
}


export default MovieList; 