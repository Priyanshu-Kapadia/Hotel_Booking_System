import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { format } from "date-fns";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import MailList from "./Home/Home Components/Mail List/MailList";
import Footer from "../components/Footer/Footer";

const BookCard = styled.div`
  background-color: white;
  margin: 15px;
  padding: 25px;
  border-radius: 10px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Options = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OptionList = styled.span`
  padding: 0 5px;
`;

const Booking = () => {
  const { user } = useContext(AuthContext);
  const userId = user._id;
  console.log(userId);
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/booking/find/${userId}`
  );

  console.log(data);

  return (
    <>
      <Navbar />
      <div className="container flex flex-col justify-center items-center">
        {data.map((item) => (
          <BookCard key={item._id}>
            <div>
              <Options>
                <OptionList>Adults : {item.hotel.adults}</OptionList>
                <OptionList>Childrens : {item.hotel.childrens}</OptionList>
                <OptionList>Rooms : {item.hotel.rooms}</OptionList>
              </Options>
              <h3 style={{ fontSize: 25 }}>{item.hotel.title}</h3>
            </div>
            <div>
              <h4 style={{ fontSize: 20, fontWeight: 500 }}>₹ {item.amount}</h4>
              <p>Check IN - {item.dates.startDate}</p>
              <p>Check OUT - {item.dates.endDate}</p>
            </div>
          </BookCard>
        ))}
      </div>
      <MailList />
      <Footer />
    </>
  );
};

export default Booking;
