import React from "react";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../slider/Slider.css";
import EachImageWithText from "./EachImageWithText";

export default class Slider2 extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <EachImageWithText id={5} src={"model/model333.png"}/>,
        <EachImageWithText id={4} src={"model/model11.png"}/>,
        <EachImageWithText id={1} src={"/images/shoe/shoe1.jpg"}/>, 
      ],
    };
    this.onchange = this.onchange.bind(this);
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Carousel
          plugins={[
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <Dots
          value={this.state.value}
          onChange={this.onchange}
          number={this.state.slides.length}
        />
      </div>
    );
  }
}
