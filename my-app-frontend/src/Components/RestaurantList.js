import React, {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({restaurants, setRestaurants}){

    

    
    const displayRestaurantList = restaurants.map((restaurant)=>{
        return <RestaurantCard id={restaurant.id} key={restaurant.id} name={restaurant.name} location={restaurant.location} price={restaurant.price}/>
      })
      

return (

    <div> {displayRestaurantList}</div>
)





}

export default RestaurantList