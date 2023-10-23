import '../App.css';
import React,{useEffect, useState} from 'react'



function App() {

  const [hotels, setHotels] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/hotels")
    .then((r) => r.json())
    .then((data) => setHotels(data));
  }, []
  );

  
  const displayHotelList = hotels.map((hotel)=>{
      return <ul>{hotel.name}, {hotel.location}</ul>
    })
    

return(
  <div>
      {displayHotelList}
  </div>
)
}

export default App;
