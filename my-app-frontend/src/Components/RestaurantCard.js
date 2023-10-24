import React from "react";
import {Link} from 'react-router-dom'



function RestaurantCard({id, name, location, price}){



    

return (
    <div>
        <h1>name:{name} </h1>
        <Link to={`/restaurants/${id}`}>details</Link>
    </div>
)



}
export default RestaurantCard