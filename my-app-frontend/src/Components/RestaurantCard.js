import React from "react";
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";


function RestaurantCard({id, name, location, setRestaurants}){
    


    
function deleteRestaurant(e){
    e.preventDefault();
    // console.log("did i get clicked?", id)
 
    fetch(`http://localhost:9292/restaurants/${id}`,{
        method: "DELETE",
    })
    .then((r) =>  r.json())
     .then(() => {
        setRestaurants(restaurants => {
            return restaurants.filter((restaurant) => restaurant.id !== id);
        })
    })
  }
  

return (
    <div>
        
        <h1>{name}, {location} </h1>
        <button onClick={deleteRestaurant}>Delete Restaurant</button>
        <Link to={`/restaurants/${id}`}>More Details</Link>
    </div>
)



}
export default RestaurantCard