import React, {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom";

function RestaurantList({restaurants, setRestaurants}){
const {id} = useParams()

const [newRestaurantForm, setNewRestaurantForm]=useState({
    name: "",
    location: "",
    price: ""
})


function change(e){
e.preventDefault()
setNewRestaurantForm({
    ...newRestaurantForm,
    [e.target.name]:e.target.value
}) 
console.log(e.target.value)
}



    function deleteRestaurant(e){
        e.preventDefault()
        fetch(`http://localhost:9292/restaurants/${id}`,{
            method:"DELETE"
        })
        .then((r)=>r.json())
        .then(()=> {
        const updatedRestaurants = [...restaurants]
        const targetRestaurant = updatedRestaurants.filter((r)=> r.id!==id)
        setRestaurants(targetRestaurant)
        })
    }

    

    function addNewRestaurant(e){
        e.preventDefault();
        fetch("http://localhost:9292/restaurants",{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({
                name:newRestaurantForm.name,
                location:newRestaurantForm.location,
                price: newRestaurantForm.price
            })
        })
        .then((r)=> r.json())
        .then((newRestaurant)=>setRestaurants([...restaurants, newRestaurant]))
    }

    
    const displayRestaurantList = restaurants.map((restaurant)=>{
        return <RestaurantCard deleteRestaurant={deleteRestaurant} id={restaurant.id} key={restaurant.id} name={restaurant.name} location={restaurant.location} price={restaurant.price} />
      })
      
      

return (

    <div> 
        <form onSubmit={addNewRestaurant}>Add a new Restaurant here:  
            <label>  Name</label>
            <input type="text" name="name" value={newRestaurantForm.name} onChange={change}/>
            <label> Location</label>
            <input type="text" name="location" value={newRestaurantForm.location} onChange={change}/>
            <label> Price Range</label>
            <input type="text" name="price" value={newRestaurantForm.price} onChange={change}/>
            <input type="submit" value="submit"/>
        </form>
        {displayRestaurantList}
        
        <ul>


        </ul>
    </div>
    
)





}

export default RestaurantList