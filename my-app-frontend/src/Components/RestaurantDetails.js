import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RestaurantDetails({restaurants, setRestaurants}){
  const [formData, setFormData]=useState({
    rating: " ",
    comment: " "
  })

const {id} = useParams()

function handleChange(e){
e.preventDefault();


}

const restaurant = restaurants.find(r=>r.id===parseInt(id))


if(!restaurant){
    return <h1>Loading...</h1>
}
// console.log(restaurant.reviews[0].comment)
return (

    <div>
      {restaurant.name},  {restaurant.location}, {restaurant.price}
      <p>Top Review: {restaurant.reviews[0].comment}</p>
      
      <form>
        <input type="text" name=""></input>Add your review!
      </form>
    </div>
)


}

export default RestaurantDetails