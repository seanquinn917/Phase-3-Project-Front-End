import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react'

function App() {
const [hotels, setHotels] = useState([])

useEffect(()=> {
  fetch("http://localhost:9292/hotels")
  .then((r) => r.json())
  .then((data) => setHotels(data));
}, []
)

const displayHotelList = hotels.map((hotel)=>{
  return <ul>{hotel.name}, {hotel.location}</ul>
})


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {displayHotelList}
      </header>
      
    </div>
  );
}

export default App;
