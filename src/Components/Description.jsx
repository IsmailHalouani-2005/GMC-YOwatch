import React from 'react';
import {useParams} from 'react-router-dom'
import './Description.css'

const Descirption = ({data}) => {
    // console.log(data)
    
    let {id} = useParams();
    var theMovie= data.find(p => p.id == id);
    if (theMovie) {
    return (
        <div className="DescriptionLink">
            <div className="backHome">
                <i class="fas fa-arrow-left"></i>
            </div>
            <div className="description-container">
                <div className="description">
                    <video className="trailer" height="500" width="500" controls>
                        <source src={theMovie.trailerURL} type="video/mp4" />
                    </video>
                    <h3 className="description-desc">{theMovie.description}</h3>
                </div>
            </div>
        </div>
    )}else {
        <h1>An error has accured, please try again!</h1>
    }
}
export default Descirption;