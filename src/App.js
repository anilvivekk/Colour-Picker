import React from "react";
import Colorbox from "./components/Colorbox";
import "./components/colorbox.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colour: "grey"
    };
  }
  updateColor = (colorvalue) => {
    this.setState({ colour: colorvalue });
  };
  render() {
    return (
      <>
        <h1>Color Picker</h1>

        <Colorbox color={"red"} onClick={this.updateColor} />
        <Colorbox color={"green"} onClick={this.updateColor} />
        <Colorbox color={"blue"} onClick={this.updateColor} />
        <Colorbox color={"magenta"} onClick={this.updateColor} />
        <Colorbox color={"yellow"} onClick={this.updateColor} />

        <div
          className="box"
          style={{
            backgroundColor: this.state.colour
          }}
        >
          Vivek
        </div>
      </>
    );
  }
}
export default App;
