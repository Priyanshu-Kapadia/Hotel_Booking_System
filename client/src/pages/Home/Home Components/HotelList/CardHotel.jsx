import React from "react";
import "./CardHotel.css";
import useFetch from "../../../../hooks/useFetch";

const CardHotel = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotels/countByCity?cities=Surat,Navsari,Gandevi"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading Please Wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Surat</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/690329.webp?k=330403cfa8e49ee98d01a4808f169d520e49f24348154b8cb7f637497015802f&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Navsari</h1>
              <h1>{data[1]} properties</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/689874.webp?k=5a29b0d987e962b9ce2c78ae5dae52d02fb2ed959b1e2b00faf022306e103f8b&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Gandevi</h1>
              <h1>{data[2]} properties</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardHotel;
