import React from 'react';
import './MovieCard.css'

const MovieCard = props => {

    return(
        <div className="Card" style={{background: `url(${props.posterURL})`}}>
            <div className="text">
                <h1 className="title">{props.title}</h1>
                <p className="description">{props.description}</p>
                <span className="stars">
                    {(props.rate == 0.5) ?
                    <i class="fas fa-star-half"></i> :
                    (props.rate == 1) ?
                    <i class="fas fa-star"></i> :
                    (props.rate == 1.5) ? 
                    <div>
                        <i class="fas fa-star"></i> 
                        <i class="fas fa-star-half"></i> 
                    </div>:
                    (props.rate == 2) ?
                        <div>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div> :
                    (props.rate == 2.5) ?
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half"></i>
                    </div>:
                    (props.rate == 3) ?
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>:
                    (props.rate == 3.5) ? 
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half"></i>
                    </div>:
                    (props.rate === 4) ? 
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>:
                    (props.rate == 4.5) ? 
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half"></i>
                    </div>:
                    (props.rate == 5) ?
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>:
                    <p className="noRate">No one rated</p>}
                </span>
            </div>
        </div>
    )
}
export default MovieCard;