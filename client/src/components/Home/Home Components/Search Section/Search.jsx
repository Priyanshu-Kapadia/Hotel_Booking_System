import React from 'react'
import styled from "styled-components";
import CityCarousel from './CityCarousel';
import SearchBox from './SearchBox';

const Section = styled.section`
  height: 100vh;
  position: relative;
`;
const Search = () => {
  return (
    <Section className="section2">
      <div className='container mx-auto lg:p-5 p-8'>
        <h2 className="text-white text-3xl font-medium">Search</h2>
        <SearchBox />
        <h2 className="text-white text-3xl font-medium">Famous Cities</h2>
        <CityCarousel />
      </div>
    </Section>
  )
}

export default Search