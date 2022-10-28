import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar'
import MailList from '../Home/Home Components/Mail List/MailList'
import styled from 'styled-components'
import AllHotelCard from './components/AllHotelCard'

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 50px 0px;
  /* position: relative; */
`;

const AllHotel = () => {
  return (
    <>
      <Navbar/>
      <Section className='container'>
        <AllHotelCard/>
      </Section>

      <MailList/>
      <Footer/>
    </>
  )
}

export default AllHotel