import Slider from "react-slick";
import React from "react";

class SliderOne extends React.Component {
  render(){
    var settings = {
      className: "gallery",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
     <div className = "container">
    <Slider {...settings}>
    <div>
    <img src="https://picsum.photos/800/301/?random" alt="2" />
    </div>
    <div>
    <img src="https://picsum.photos/800/302/?random" alt="3" />
    </div>
    {/* <img src="https://picsum.photos/800/301/?random" alt="2" />,
      <img src="https://picsum.photos/800/302/?random" alt="3" />,
      <img src="https://picsum.photos/800/303/?random" alt="4" />,
      <img src="https://picsum.photos/800/304/?random" alt="5" />, */}
    </Slider>
    </div>
  );
}
}
export default SliderOne;
