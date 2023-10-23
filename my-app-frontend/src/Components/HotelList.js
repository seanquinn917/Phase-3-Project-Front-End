import React, {useState, useEffect} from "react";
import HotelCard from "./HotelCard";

function HotelList(){

    const [hotels, setHotels] = useState([])

    useEffect(()=> {
      fetch("http://localhost:9292/hotels")
      .then((r) => r.json())
      .then((data) => setHotels(data));
    }, []
    );
  console.log(hotels)
    
    const displayHotelList = hotels.map((hotel)=>{
        return <HotelCard id={hotel.id} key={hotel.id} name={hotel.name} location={hotel.location} price={hotel.price}/>
      })
      

return (

    <div> {displayHotelList}</div>
)





}

export default HotelList