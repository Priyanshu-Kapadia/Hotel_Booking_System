import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const RoomSingle = () => {
  const location = useLocation();
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api${location.pathname}`
  );
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
                    <span className="itemKey">Max People:</span>
                    <span className="itemValue">{data.maxPeople}</span>
                  </div>
                  {/* <div className="detailItem">
                    <span className="itemKey">Price:</span>
                    <span className="itemValue">{data.price}</span>
                  </div> */}
                  <div className="detailItem">
                    <span className="itemKey">Room Number:</span>
                    {data?.roomNumbers?.map((i)=> (
                      <span className="itemValue" key={i._id}>{i.number}, </span>
                    ))}
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

export default RoomSingle;
