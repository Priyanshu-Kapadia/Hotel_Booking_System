import React from "react";
import "./Home.css"
import Banner from "./Home Components/Banner/Banner";
import Search from "./Home Components/Search Section/Search";
import HotelList from "./Home Components/HotelList";
import MailList from "./Home Components/Mail List/MailList";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Search/>
      <HotelList />
      <MailList />
      <Footer />
    </>
  );
};

export default Home;
