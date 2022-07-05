import React from "react";
import "./colorbox.css";

class Colorbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="color-box"
        style={{
          backgroundColor: this.props.color
        }}
        onClick={() => {
          this.props.onClick(this.props.color);
        }}
      ></div>
    );
  }
}
export default Colorbox;
