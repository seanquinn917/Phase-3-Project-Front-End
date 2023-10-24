import React from "react";
import {Link} from 'react-router-dom'



function HotelCard({id, name, location, price}){



    

return (
    <div>
        <h1>name:{name} </h1>
        <Link to={`/hotels/${id}`}>details</Link>
    </div>
)



}
export default HotelCard