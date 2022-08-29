import React from "react";
import styled from "styled-components";
import HotelSlider from "../HotelSlider";
import "./Home.css"

const Section = styled.section`
  height: ${`calc(100vh - 64px)`};
  width: 100vw;
  position: relative;
`;

const Home = () => {
  return (
    <Section className="section2 flex justify-content items-center overflow-hidden">
      <div className="container mx-auto lg:p-0 p-8">
        <div className="flex flex-col-reverse  lg:grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex justify-center align-center flex-col">
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
  );
};

export default Home;
