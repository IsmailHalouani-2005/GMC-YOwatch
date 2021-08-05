import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MovieList from './Components/MovieList';

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

]);

  const formActive = () => {
    const theForm = document.querySelector('.theForm')
    const icon = document.querySelector('.icon')
    let bool = false

    if (bool == true) {
      theForm.style.transform = 'translateY(-100%)'
      theForm.style.visibility = 'hidden'
      icon.style.transform = "rotate(-45deg)"
      bool = false
    } else {
      theForm.style.transform = 'translateY(0%)'
      theForm.style.visibility = 'visible'
      icon.style.transform = "rotate(45deg)"
      bool = true
    }

      console.log('is Working', icon, theForm, bool)
  }

  var MovieForm = document.getElementById('MovieForm')
  MovieForm.addEventListener('submit', event => {
    event.preventDefault()
    const object = {
      id:movie.lenght+1,
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      posterURL: document.getElementById('posterURL').value,
      rate: document.getElementById('rate').value
    }
    if (movie.find(e => e.title == object.title && e.description == object.description && e.posterURL == object.posterURL && e.rate == object.rate)) {
      alert('this Movie already exist !')
    } else {
      setMovie(movie.push(object))
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <div className="top">
          <div className="Logo">
            <h1 id="Logo">YOwatch</h1>
          </div>
          <div className="addSearch">
            <div className="search">
              <input type="text" placeholder="Search..."/>
              <button type="submit" className="btnInput">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <div className="add">
              <i onClick={formActive} className="fas fa-plus icon"></i>
              <div className="theForm">
                <form className="form" id="MovieForm">
                  <input 
                    className="form-control"
                    name="title" 
                    type="text" 
                    placeholder="Title..."
                    id="title"
                  />
                  <textarea
                    className="form-control"
                    name="description" 
                    id="" cols="30" 
                    rows="10" 
                    placeholder="Description..."
                    id="description">
                  </textarea>
                  <input
                    className="form-control"
                    name="posterURL" 
                    type="url" 
                    placeholder="Post Image URL..."
                    id="posterURL"
                  />
                  <input
                    className="form-control"
                    name="rate"
                    type="number"
                    max="5"
                    min="0"
                    placeholder="Rate..."
                    id="rate"
                    />
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
                
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
