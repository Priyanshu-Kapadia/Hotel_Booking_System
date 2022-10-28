import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 25px;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Success = () => {
  const location = useLocation();
  const orderId = location.state.stripeData.order_id;
  // console.log(location);
 
  useEffect(() => {
    const createBooking = async () => {
      try {
        await axios.post("http://localhost:5000/api/booking/add", {
          userId: location.state.userId,
          hotel: {
            roomId: location.state.roomId,
            adults: location.state.options.adults,
            childrens: location.state.options.childrens,
            rooms: location.state.options.rooms,
            title: location.state.title,
          },
          amount: location.state.amount,
          dates: {
            startDate: location.state.dates[0].startDate,
            endDate: location.state.dates[0].endDate,
          },
          transactionId: orderId,
        });
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    createBooking();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        color: "white",
      }}
    >
      <p>Booking has been created successfully. </p>
      Your Booking number is {orderId}
      <Link to="/booking">
        <Button id="homepage">Go to BookingPage</Button>
      </Link>
    </div>
  );
};

export default Success;
