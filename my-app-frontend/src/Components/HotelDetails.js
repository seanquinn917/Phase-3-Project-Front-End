import React, { useEffect, useState } from "react";


function HotelDetails(){
const [hotelDetail, setHotelDetail] = useState([])


    useEffect(()=>{
        fetch(`http://localhost:9292/hotels/${params.id}`)
        .then(r=>r.json())
        .then(data =>setHotelDetail(data))
    }, [params.id])
const {name, location, price} = hotelDetail

return (

    <div>
        {name}, {location}, {price}

    </div>
)


}

export default HotelDetails