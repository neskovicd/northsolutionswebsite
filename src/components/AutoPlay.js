import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "../components/slickStyle.css"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div class="wrapper">
        <div class="textWrapper">
        <span class="txt">Some of our</span><span class="txtcolor">technologies</span></div>
        <div class = "slider">
        <Slider {...settings}>
          <div>
            <img src={require("../images/gatsby.png")}/>
          </div>
          <div>
            <img src={require("../images/react.png")}/>
          </div>
          <div>
            <img src={require("../images/reactnative.png")}/>
          </div>
          <div>
            <img src={require("../images/python.png")}/>
          </div>
          <div>
            <img src={require("../images/django.png")}/>
          </div>
          <div>
            <img src={require("../images/node.png")}/>
          </div>
          <div>
            <img src={require("../images/xcode.png")}/>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}