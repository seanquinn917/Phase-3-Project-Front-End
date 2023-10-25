import '../App.css';

import RestaurantList from './RestaurantList';
import RestaurantCard from './RestaurantCard';
import RestaurantDetails from './RestaurantDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react';



function App() {
  const [restaurants, setRestaurants] = useState([])
  const [reviews, setReviews]=useState([])

  function handleNewReview(newReview){
      setReviews((prevReviews)=> [...prevReviews, newReview])
  }

  useEffect(()=> {
    fetch("http://localhost:9292/restaurants")
    .then((r) => r.json())
    .then((data) => setRestaurants(data));
  }, []
  );
console.log(restaurants)

return(
  <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/restaurants' element={<RestaurantList restaurants={restaurants} setRestaurants={setRestaurants}/>}/>
      <Route path='/restaurants/:id' element={<RestaurantDetails restaurants={restaurants} setRestaurants={setRestaurants} handleNewReview={handleNewReview}/>}/>
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
