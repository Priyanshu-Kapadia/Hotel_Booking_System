import React from "react";
import CardHotel from "./CardHotel";
import styled from "styled-components";
import FeaturedProperties from "./FeaturedProperties";
import "./hotelList.css";
import PropertyList from "./PropertyList";


const Section = styled.section`
  height: 100%;
  position: relative;
`;

const HotelList = () => {
  return (
    <Section className="section2">
      <div className="container mx-auto lg:p-5 p-4">
        <div className="homecontainer">
          <CardHotel />
          <div className="homeTitle">
            <h1>Browse by property type</h1>
          </div>
          <PropertyList />
          <div className="homeTitle">
            <h1>Homes Guests Love</h1>
          </div>
          <FeaturedProperties />
        </div>
      </div>
    </Section>
  );
};

export default HotelList;
