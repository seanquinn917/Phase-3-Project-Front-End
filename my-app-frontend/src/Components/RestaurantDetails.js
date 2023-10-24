import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RestaurantDetails({restaurants, setRestaurants}){

const {id} = useParams()

// console.log(id)

const restaurant = restaurants.find(r=>r.id===parseInt(id))


if(!restaurant){
    return <h1>Loading...</h1>
}
console.log(restaurant.reviews[0].comment)
return (

    <div>
      {restaurant.name},  {restaurant.location}
      <p>reviews: {restaurant.reviews[0].comment}</p>
    </div>
)


}

export default RestaurantDetails