import '../App.css';

import RestaurantList from './RestaurantList';
import RestaurantDetails from './RestaurantDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



function App() {
  const [restaurants, setRestaurants] = useState([])
  

  

  useEffect(()=> {
    fetch("http://localhost:9292/restaurants")
    .then((r) => r.json())
    .then((data) => setRestaurants(data));
  }, []
  );





return(
  <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/restaurants' element={<RestaurantList restaurants={restaurants} setRestaurants={setRestaurants}/>}/>
      <Route path='/restaurants/:id' element={<RestaurantDetails restaurants={restaurants} setRestaurants={setRestaurants} />}/>
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
