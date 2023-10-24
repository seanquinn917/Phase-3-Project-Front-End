import '../App.css';

import RestaurantList from './RestaurantList';
import RestaurantCard from './RestaurantCard';
import RestaurantDetails from './RestaurantDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react';



function App() {
  const [restaurants, setRestaurants] = useState([])


  useEffect(()=> {
    fetch("http://localhost:9292/hotels")
    .then((r) => r.json())
    .then((data) => setRestaurants(data));
  }, []
  );
// console.log(restaurants)

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
