import React from "react";
import {Link} from 'react-router-dom'



function RestaurantCard({id, name, location, price, deleteRestaurant}){



    

return (
    <div>
        
        <h1>{name}, {location} </h1>
        <button onClick={deleteRestaurant}>Delete Restaurant</button>
        <Link to={`/restaurants/${id}`}>More Details</Link>
    </div>
)



}
export default RestaurantCard