import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RestaurantDetails({restaurants, setRestaurants, handleNewReview}){
  const {id} = useParams()
  
 

  const [newReviewData, setNewReviewData]=useState({
    comment: "",
    restaurant_id : id
  })

  const[updateRestaurant, setUpdateRestaurant]=useState({
    name: "",
    location: "",
    price: ""
})

function handleUpdateFormChange(e){
    e.preventDefault()
    setUpdateRestaurant({
        ...updateRestaurant,
        [e.target.name]:e.target.value
    }) 
   
    }



  function deleteReview(reviewId){
    
      fetch(`http://localhost:9292/reviews/${reviewId}`,{
        method: "DELETE",
      })
      .then((r)=>r.json())
      .then((deletedReview)=>{
        const updatedRestaurants = restaurants.map((restaurant)=> {
          if(restaurant.id === deletedReview.restaurant_id){
              const updatedRestaurant = {...restaurant, reviews:restaurant.reviews.filter((review)=> review.id !== deletedReview.id)}
              return updatedRestaurant
          } else return restaurant
        })  
        // const targetRestaurant = updatedRestaurants.find((r)=>r.id===parseInt(id))
        // targetRestaurant.reviews = targetRestaurant.reviews.filter((review)=> review.id !== deletedReview.id)
        setRestaurants(updatedRestaurants)
        });
      }
  


function handleChangeReview(e){
e.preventDefault();
  setNewReviewData({
    ...newReviewData,
    [e.target.name]:e.target.value
  })
}

function handleAddNewReview(e){
e.preventDefault()
fetch("http://localhost:9292/reviews",{
  method:"POST",
  headers: {
    "content-type" : "application/json"
  },
  body:JSON.stringify({
    comment : newReviewData.comment,
    restaurant_id : id,
  }),
})
  .then((r)=>r.json())
  .then((newReview)=> {
    const updatedRestaurants = [...restaurants];
    const targetRestaurant = updatedRestaurants.find((r)=> r.id === parseInt(id))
    targetRestaurant.reviews.push(newReview)
    setRestaurants(updatedRestaurants)
  })
}


function updateRestaurantInfo(e){
  // console.log(id)
  e.preventDefault()
  fetch(`http://localhost:9292/restaurants/${id}`,{
    method: "PATCH",
    headers: {
      'Content-type' : "application/json"
    },
    body: JSON.stringify({
      name: updateRestaurant.name,
      location: updateRestaurant.location,
      price: updateRestaurant.price
    }),
  })
  .then((r)=>r.json())
  .then((newinfo)=> {
    // console.log(newinfo.name)
    const updatedRestaurants = [...restaurants]
    
    const targetRestaurant = updatedRestaurants.find((r)=>r.id === parseInt(id))
    targetRestaurant.name= newinfo.name
    targetRestaurant.location = newinfo.location
    targetRestaurant.price = newinfo.price
    setRestaurants(updatedRestaurants)
    }
  
  )
    
}



const restaurant = restaurants.find(r=>r.id===parseInt(id))


if(!restaurant){
    return <h1>Loading...</h1>
}
// console.log(restaurant.reviews[0].comment)
return (

    <div>
      {restaurant.name},  {restaurant.location}, {restaurant.price} 

      <form onSubmit={updateRestaurantInfo}>
            <label>Did we get it wrong? Update restaurant info here!  </label>
            <label>Name</label>
            <input type="text" name="name" value={updateRestaurant.name} onChange={handleUpdateFormChange}/>
            <label> Location</label>
            <input type="text" name="location" value={updateRestaurant.location} onChange={handleUpdateFormChange}/>
            <label> Price Range</label>
            <input type="text" name="price" value={updateRestaurant.price} onChange={handleUpdateFormChange}/>
            <input type="submit" value="submit"/>
        </form>
       <ul>Reviews:
     {restaurant.reviews.map((review) => (
    <li key={review.id}>{review.comment}  <button onClick={()=>deleteReview(review.id)}>Delete Review</button></li>
  ))}
      </ul>
      
      <form onSubmit={handleAddNewReview}>
        <input type="text" name="comment" value={newReviewData.comment} onChange={handleChangeReview}></input>Add your review!
      </form>
      
    </div>
)


}

export default RestaurantDetails