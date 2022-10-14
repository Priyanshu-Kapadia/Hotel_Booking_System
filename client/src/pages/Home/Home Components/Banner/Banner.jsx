import React from 'react'
import styled from "styled-components";
import HotelSlider from "../BannerSlider"

import './banner.css';

const Section = styled.section`
  height: ${`calc(100vh - 64px)`};
  position: relative;
`;
const Banner = () => {
  return (
    <Section className="section2 flex justify-center items-center">
      <div className="container mx-auto lg:mx-10 lg:p-5 p-8">
        <div className="flex flex-col-reverse  lg:grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex justify-center md:mx-10 mx-2 align-center flex-col">
            <p className="whitespace-normal font-cursive text-white font-bold uppercase lg:text-6xl text-4xl">
              Hotel Booking
            </p>
            <p className="text-amber-300 font-medium ">
              Deals from your favourite booking sites . This is the great
              website for the online booking it is safe and secure.
            </p>
          </div>
          <div className="">
            <HotelSlider />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Banner