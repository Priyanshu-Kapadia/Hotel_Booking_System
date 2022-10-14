import React from "react";
import styled from "styled-components";
import CityCarousel from "./CityCarousel";
import SearchBox from "./SearchBox";

const Section = styled.section`
  height: 100%;
  position: relative;
`;

const GlassMorphing = styled.div`
  /* backdrop-filter: blur(16px) saturate(180%); */
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

const Search = () => {
  return (
    <Section className="section2">
      <div className="container mx-auto lg:p-5 p-4">
        <div className="flex justify-center items-center">
          <GlassMorphing className="md:p-10 p-6 xl:w-4/6 w-full">
            <h2 className="font-sans-serif text-white text-3xl font-medium">Search</h2>
            <p className="text-white text-l py-3">
              Get Rewarded for your travels-unlock instant savings of 10% in
              Room Booking
            </p>
            <SearchBox />
          </GlassMorphing>
        </div>
        {/* <h2 className="font-sans-serif text-white text-3xl font-medium">Famous Cities</h2> */}
        {/* <CityCarousel /> */}
      </div>
    </Section>
  );
};

export default Search;
