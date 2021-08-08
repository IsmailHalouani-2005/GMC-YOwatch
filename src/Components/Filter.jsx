import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = props => {

    const theMovie = (props.value == "") ? undefined :  props.movieList.find(movie => movie.title.toLowerCase().includes(props.value.toLowerCase()) )
    // console.log(theMovie)
    return (
        (theMovie) ? (
            <div className='Fitler'>    
                <div className="Filter-container">
                    <div className="Filter-Image">
                        <img src={theMovie.posterURL} className="searchImg"/>
                    </div>.
                    <div className="Filter-info">
                        <h1 className="title">{theMovie.title}</h1>
                        <p className="description">{theMovie.description}</p>
                        <span className="stars">
                            <strong>{theMovie.rate}</strong>
                            <i className="fas fa-star"/>
                        </span>
                    </div>
                </div>
            </div>
        ) : (
            <div className="Filter">
                <div className="Filter-container2">
                    No results found...
                </div>
            </div>
        )
    )

}
// Filter.defaultProps = {
//     title: 'All',
//     rate: 'All'
// }
Filter.propTypes = {
    rate : PropTypes.number,
    title: PropTypes.string,
}
export default Filter