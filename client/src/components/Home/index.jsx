import React from "react";
import "./Home.css"
import Banner from "./Home Components/Banner/Banner";
import Search from "./Home Components/Search Section/Search";
import HotelList from "./Home Components/HotelList";
import MailList from "./Home Components/Mail List/MailList";

const Home = () => {
  return (
    <>
      <Banner/>
      <Search/>
      <HotelList />
      <MailList />
    </>
  );
};

export default Home;
