import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "./Slider.css"

import Img1 from "../../../../assets/1.png";
import Img3 from "../../../../assets/3.png";

const SliderBody = styled.div`
`;

const HotelSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <SliderBody>
        <Slider {...settings}>
          <div>
            <img src={Img1} alt="" className="hi"/>
          </div>

          <div>
            <img src={Img3} alt="" className="hi" />
          </div>
        </Slider>
      </SliderBody>
    </>
  );
};

export default HotelSlider;
