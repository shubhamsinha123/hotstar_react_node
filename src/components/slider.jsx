import Slider from "react-slick";
import React from "react";

class SliderOne extends React.Component {
  render() {
    var settings = {
      className: "gallery",
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    var multiimage = {
      // className: "gallery",
      dots: true,
      
      infinite: true,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div className="container">
        <h1 className="slider-head">1-Image Slider</h1>
        <Slider className = "one-slider" {...settings}>
          <div>
            <img src="https://picsum.photos/800/301/?random" alt="2" />
          </div>
          <div>
            <img src="https://picsum.photos/800/303/?random" alt="3" />
          </div>
          <div>
            <img src="https://picsum.photos/800/305/?random" alt="4" />
          </div>
          {/* <img src="https://picsum.photos/800/301/?random" alt="2" />,
      <img src="https://picsum.photos/800/302/?random" alt="3" />,
      <img src="https://picsum.photos/800/303/?random" alt="4" />,
      <img src="https://picsum.photos/800/304/?random" alt="5" />, */}
        </Slider>
        <h1 className="slider-head">Multi-Image Slider</h1>
        <Slider className = "multi-slider" {...multiimage}>
          <div><img src="https://picsum.photos/800/510/?random" alt="2" />
          <p>first image</p></div>
          <div><img src="https://picsum.photos/800/511/?random" alt="3" /></div>
          <div><img src="https://picsum.photos/800/512/?random" alt="5" /></div>
          <div><img src="https://picsum.photos/800/515/?random" alt="5" /></div>
          
        </Slider>
      </div>
    );
  }
}
export default SliderOne;
