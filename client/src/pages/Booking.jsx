import React from "react";
import useFetch from "../hooks/useFetch";

const Booking = () => {
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/booking`
  );

  console.log(data);
  return 
  <>

  </>;
};

export default Booking;
