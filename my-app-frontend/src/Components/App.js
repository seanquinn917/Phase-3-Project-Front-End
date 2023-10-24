import '../App.css';

import HotelList from './HotelList';
import HotelCard from './HotelCard';
import HotelDetails from './HotelDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react';



function App() {
  const [hotels, setHotels] = useState([])


  useEffect(()=> {
    fetch("http://localhost:9292/hotels")
    .then((r) => r.json())
    .then((data) => setHotels(data));
  }, []
  );
// console.log(hotels)

return(
  <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/hotels' element={<HotelList hotels={hotels} setHotels={setHotels}/>}/>
      <Route path='/hotels/:id' element={<HotelDetails hotels={hotels} setHotels={setHotels} />}/>
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
