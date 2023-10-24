import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function HotelDetails({hotels, setHotels}){

const {id} = useParams()

// console.log(id)

const hotel = hotels.find(h=>h.id===parseInt(id))






if(!hotel){
    return <h1>Loading...</h1>
}
console.log(hotel.reviews[0].comment)
return (

    <div>
      {hotel.name},  {hotel.location}
      <p>reviews: {hotel.reviews[0].comment}</p>
    </div>
)


}

export default HotelDetails