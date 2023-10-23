import React from "react";
import {Link} from 'react-router-dom'



function HotelCard(props){

    const {id, name, location, price}= props


return (
    <div>
        <h1>{name} </h1>

        <Link to={`/hotel/${id}`}>Details</Link>
    </div>
)



}
export default HotelCard