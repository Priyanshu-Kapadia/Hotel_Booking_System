import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Single = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [booking, setBooking] = useState();
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api${location.pathname}`
  );
  useEffect(() => {
    const data2 = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/booking/find/${path}`
      );
      setBooking(res.data);
    };
    data2();
  }, []);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={data.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{data.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date Of Birth:</span>
                  <span className="itemValue">{data.dob}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">{data.city}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          {booking && <List datas={booking}/>
          }
          {/* <List datas={booking}/> */}
        </div>
      </div>
    </div>
  );
};

export default Single;
