import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const HotelSingle = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [room, setRoom] = useState([]);
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api${location.pathname}`
  );

  const tempData = [];
  useEffect(() => {
    const data2 = () => {
      {
        data &&
          data?.rooms?.map(async (item) => {
            const res = await axios.get(
              `http://localhost:5000/api/rooms/${item}`
            );
            tempData.push(res.data);
            setRoom([...room,tempData]);
          });
      }
    };
    data2();
  }, [data]);
  console.log(room);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {data && (
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src={data.photos}
                  alt=""
                  className="itemImg"
                  style={{ borderRadius: 0, height: 250, width: 250 }}
                />
                <div className="details">
                  <h1 className="itemTitle">{data.name}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Title:</span>
                    <span className="itemValue">{data.title}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Desc:</span>
                    <span className="itemValue">{data.desc}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">{data.address}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">City:</span>
                    <span className="itemValue">{data.city}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Price:</span>
                    <span className="itemValue">{data.cheapestPrice}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Distance:</span>
                    <span className="itemValue">{data.distance}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Rooms:</span>
                      {room[0]?.map((i) => (
                        <span className="itemValue" key={i._id}>{i.title}, </span>
                      ))}
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Type:</span>
                    <span className="itemValue">{data.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelSingle;
