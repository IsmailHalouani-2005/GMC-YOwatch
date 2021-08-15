import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import ReactDom from 'react-dom';
import {Link, Route,Switch, BrowserRouter, useRouteMatch} from 'react-router-dom'
import Home from './Components/Home';
import Descirption from './Components/Description.jsx';

function App() {


  const [movie, setMovie] = useState([{
    id:1,
    title:'Joker',
    description:'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City...',
    posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD',
    trailerURL:'https://www.youtube.com/watch?v=zAGVQLHvwOY',
    rate: 4.5,
  },
  {
    id:2,
    title:'Moonlight',
    description:'Chiron, a young African-American boy, finds guidance in Juan, a drug dealer, who teaches him to carve his own path.',
    posterURL:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT53B_Wizqekgv5U9fetXZc_7FmMFzp5MpeEodcyTOiugrjV7iP',
    trailerURL:'',
    rate: 4,
  },
  {
    id:3,
    title:'Dumbo',
    description:'Dumbo is a 2019 American fantasy period adventure film directed by Tim Burton, with a screenplay by Ehren Kruger.',
    posterURL:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgqKle6T7nhrJVaWiWoMJO03SjB76TsusDiPmisew9ZcUUdhVh',
    trailerURL:'',
    rate: 4,
  },
]);

  const [NewMovie, setNewMovie]= useState({
    id : movie.length + 1,
    title:'',
    description:'',
    posterURL:'',
    trailerURL:'',
    rate:'',
  });

  return(
    <BrowserRouter>
        <Switch>
            <Route path="/">
              <Home exact data={movie} localData={setNewMovie}/>
            </Route>
          <Route path="/details/:id" >
            <Descirption data={movie} />
              </Route>
        </Switch>
    </BrowserRouter>
  )

}

export default App;
