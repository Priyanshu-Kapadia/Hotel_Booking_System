import React from 'react'
import CardHotel from './CardHotel'
import './hotelList.css'
import PropertyList from './PropertyList'

const HotelList = () => {
  return (
    <div className='homecontainer'>
        <CardHotel/>
        <h1 className="homeTitle">
          Browse by property type
        </h1>
        <PropertyList />
    </div>
  )
}

export default HotelList