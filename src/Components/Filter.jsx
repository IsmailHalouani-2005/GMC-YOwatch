import React, { useState } from 'react';

const filter = props => {
    [title, setTitle]= useState(props.title)
    [rate, setRate]= useState(props.rate)
    
    return(
        <MovieCard title={title} rate={rate}/>
    )
}
filter.defaultProps = {
    title: '',
    rate: ''
}