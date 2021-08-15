import './Home.css';
import React, {useState} from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import ReactDom from 'react-dom';
import {Link, Route} from 'react-router-dom'

const Home = (props) => {
    const Pmovie = props.data;
    const PnewMovie = props.localData    
    const [movie, setMovie] = useState(Pmovie)
    const [NewMovie, setNewMovie] = useState(PnewMovie)
    
    const [theBool, setTheBool] = useState(false)

    const formActive = () => {
    const theForm = document.querySelector('.theForm')
    const icon = document.querySelector('.thePlusIcon')

    if (theBool== true) {
        theForm.style.transform = 'translateY(-100%)'
        theForm.style.visibility = 'hidden'
        icon.style.transform = "rotateZ(45deg)"
        setTheBool(false)
    } else  {
        theForm.style.transform = 'translateY(0%)'
        theForm.style.visibility = 'visible'
        icon.style.transform = "rotateZ(-45deg)"
        setTheBool(true)
    }

        // console.log('is Working', icon, theForm, theBool)
    }


    const  [SearchValue, setSearchValue] = useState("");

    return (
        <div className="App">
            <header className="App-header">
            <div className="top">
                <div className="Logo">
                <h1 id="Logo">YOwatch</h1>
                </div>
                <div className="addSearch">
                <div className="searching">
                    <div className="search">
                    <input type="search" placeholder="Search..." className="searchInput" onChange ={(e)=> setSearchValue(e.target.value)}/>
                    <button  className="btnInput">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                    <Filter value={SearchValue} movieList={movie}/>
                </div>
                <div className="add">
                    <i onClick={formActive} className="fas fa-plus thePlusIcon"></i>
                    <div className="theForm">
                        <input 
                        onChange={(e)=> {
                            console.log(e.target.value)
                            setNewMovie(Nmovie => ({
                            ...Nmovie,
                            title: e.target.value,
                            }))
                        }}
                        className="form-control"
                        name="title" 
                        type="text" 
                        placeholder="Title..."
                        id="title"
                        />
                        <textarea
                        onChange={(e)=> {
                            setNewMovie(Nmovie => ({
                            ...Nmovie,
                            description: e.target.value,
                            }))
                        }}
                        className="form-control"
                        name="description" 
                        id="" cols="30" 
                        rows="10" 
                        placeholder="Description..."
                        id="description">
                        </textarea>
                        <input
                        onChange={(e)=> {
                            setNewMovie(Nmovie => ({
                            ...Nmovie,
                            posterURL: e.target.value,
                            }))
                        }}
                        className="form-control"
                        name="posterURL" 
                        type="url" 
                        placeholder="Post Image URL..."
                        id="posterURL"
                        />
                        <input
                        onChange={(e)=> {
                            setNewMovie(Nmovie => ({
                            ...Nmovie,
                            trailerURL: e.target.value,
                            }))
                        }}
                        className="form-control"
                        name="trailerURL" 
                        type="url" 
                        placeholder="Trailer Video URL..."
                        id="trailerURL"
                        />
                        <input
                        onChange={(e)=> {
                            setNewMovie(Nmovie => ({
                            ...Nmovie,
                            rate: e.target.value,
                            }))
                        }}
                        className="form-control"
                        name="rate"
                        type="number"
                        max="5"
                        min="0"
                        placeholder="Rate..."
                        id="rate"
                        />
                        <button onClick={async(e) => {
                                if (movie.find(e => e.title == NewMovie.title && e.description == NewMovie.description && e.posterURL == NewMovie.posterURL && e.trailerURL == NewMovie.trailerURL)) {
                                    alert('this Movie already exist !')
                                }else if (NewMovie.title == "" || NewMovie.description == "" || NewMovie.posterURL == "" ) {
                                    alert('You should enter all the neccesary data !')
                                } else {
                                    await setMovie([...movie, NewMovie])
                                }
                                
                                console.log(movie)

                        }} 
                        className="btn btn-secondary">Submit</button>
                    
                    </div>
                </div>
                </div>
            </div>
            <div className="bottom">
            {/* <Route path={`${match.url}/:movieId`} render={ (props) => <MovieList data= {movie} {...props} />}/> */}
            <MovieList data={props.data}/>
            </div>
            </header>
        </div>
    );
}

export default Home;