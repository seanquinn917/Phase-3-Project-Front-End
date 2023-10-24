import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function HotelDetails({hotels, setHotels}){

const {id} = useParams()

console.log(id)

const hotel = hotels.find(h=>h.id===parseInt(id))
console.log(hotel)
if(!hotel){
    return <h1>Loading...</h1>
}
return (

    <div>
      {hotel.name}
    </div>
)


}

export default HotelDetails