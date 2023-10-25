import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RestaurantDetails({restaurants, setRestaurants,handleNewReview}){
  const {id} = useParams()
  
  const [formData, setFormData]=useState({
    comment: "",
    restaurant_id : id
  })

  function deleteReview(e){
    e.preventDefault();
      fetch(`http://localhost:9292/reviews/${id}`,{
        method: "DELETE",
      })
      // .then((r)=>r.json())
      // .then(()=>{
      //   const updatedRestaurants = [...restaurants]
      //   const targetRestaurant = updatedRestaurants.find((r)=>r.id===parseInt(id))
      //   targetRestaurant.reviews.filter((review)=> review.id!==parseInt(id) )
      //   setRestaurants(updatedRestaurants)
      //   })
      }
  


function handleChange(e){
e.preventDefault();
  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  })
  // console.log(e.target.value)
}

function handleSubmit(e){
e.preventDefault()

fetch("http://localhost:9292/reviews",{
  method:"POST",
  headers: {
    "content-type" : "application/json"
  },
  body:JSON.stringify({
    comment : formData.comment,
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


const restaurant = restaurants.find(r=>r.id===parseInt(id))


if(!restaurant){
    return <h1>Loading...</h1>
}
// console.log(restaurant.reviews[0].comment)
return (

    <div>
      {restaurant.name},  {restaurant.location}, {restaurant.price}
       <ul>Reviews:
        {/* <li>{restaurant.reviews[0].comment}</li>
        <li>{restaurant.reviews[1].comment}</li>
        <li>{restaurant.reviews[2].comment}</li>
        <li>{restaurant.reviews[3].comment}</li>
        <li>{restaurant.reviews[4].comment}</li> */}
     {restaurant.reviews.map((review) => (
    <li key={review.id}>{review.comment} <button onClick={deleteReview}>Delete Review</button></li>
  ))}
      </ul>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="comment" value={formData.comment} onChange={handleChange}></input>Add your review!
      </form>
    </div>
)


}

export default RestaurantDetails