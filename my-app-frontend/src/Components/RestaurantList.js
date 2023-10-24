import React, {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({hotels, setHotels}){

    

    
    const displayRestaurantList = restaurants.map((hotel)=>{
        return <RestaurantCard id={restaurant.id} key={restaurant.id} name={restaurant.name} location={restaurant.location} price={restaurant.price}/>
      })
      

return (

    <div> {displayRestaurantList}</div>
)





}

export default RestaurantList