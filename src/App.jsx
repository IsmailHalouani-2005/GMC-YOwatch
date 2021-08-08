import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';

function App() {

  const [movie, setMovie] = useState([{
    id:1,
    title:'Joker',
    description:'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City...',
    posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD',
    rate: 4.5,
  },
  {
    id:2,
    title:'Moonlight',
    description:'Chiron, a young African-American boy, finds guidance in Juan, a drug dealer, who teaches him to carve his own path.',
    posterURL:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT53B_Wizqekgv5U9fetXZc_7FmMFzp5MpeEodcyTOiugrjV7iP',
    rate: 4,
  },
  {
    id:3,
    title:'Dumbo',
    description:'Dumbo is a 2019 American fantasy period adventure film directed by Tim Burton, with a screenplay by Ehren Kruger.',
    posterURL:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgqKle6T7nhrJVaWiWoMJO03SjB76TsusDiPmisew9ZcUUdhVh',
    rate: 4,
  },
]);

const [NewMovie, setNewMovie]= useState({
  id : movie.length + 1,
  title:'',
  description:'',
  posterURL:'',
  rate:'',
}
);

const [theBool, setTheBool] = useState(false)

  const formActive = () => {
    const theForm = document.querySelector('.theForm')
    const icon = document.querySelector('.thePlusIcon')

    if (theBool== true) {
      theForm.style.transform = 'translateY(-100%)'
      theForm.style.visibility = 'hidden'
      icon.style.transform = "rotate(-45deg)"
      setTheBool(false)
    } else  {
      theForm.style.transform = 'translateY(0%)'
      theForm.style.visibility = 'visible'
      icon.style.transform = "rotate(45deg)"
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
                            if (movie.find(e => e.title == NewMovie.title && e.description == NewMovie.description && e.posterURL == NewMovie.posterURL)) {
                              alert('this Movie already exist !')
                            }else if (NewMovie.title == "" || NewMovie.description == "" || NewMovie.posterURL == "") {
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
          <MovieList list={movie}/>
        </div>
      </header>
    </div>
  );
}

export default App;
