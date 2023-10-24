import React, {useState, useEffect} from "react";
import HotelCard from "./HotelCard";

function HotelList({hotels, setHotels}){

    

    
    const displayHotelList = hotels.map((hotel)=>{
        return <HotelCard id={hotel.id} key={hotel.id} name={hotel.name} location={hotel.location} price={hotel.price}/>
      })
      

return (

    <div> {displayHotelList}</div>
)





}

export default HotelList