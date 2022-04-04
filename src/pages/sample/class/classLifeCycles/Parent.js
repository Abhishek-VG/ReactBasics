import * as React from "react";
import Child from "./Child";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log("PARENT-CONSTRUCTOR");
    this.state = {
      show: true, // const [show, setShow] = React.useState(true)
      count: 0,
      theme: {
        color: "black",
        backgroundColor: "white",
        type: "light",
      },
    };
    this.toggleChildView = this.toggleChildView.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount() {
    console.log("PARENT-COMPONENT DID MOUNT");
  }

  shouldComponentUpdate() {
    console.log("PARENT-SHOULD COMPONENT UPDATE");
    // decides whether this component to be rendered or not
    // if returns false, it wont re-render
    return true;
  }

  componentDidUpdate() {
    console.log("PARENT-COMPONENT DID UPDATE");
  }

  toggleChildView() {
    this.setState({
      show: !this.state.show,
    });
  }

  toggleTheme() {
    let theme;
    if (this.state.theme.type === "light") {
      theme = {
        color: "white",
        backgroundColor: "black",
        type: "dark",
      };
    } else {
      theme = {
        color: "black",
        backgroundColor: "white",
        type: "light",
      };
    }
    this.setState({ theme: theme });
  }

  render() {
    console.log("PARENT-RENDER", this.state);
    return (
      <div
        style={{
          color: this.state.theme.color,
          background: this.state.theme.backgroundColor,
        }}
      >
        <div>---------------PARENT START---------------</div>
        <button onClick={this.toggleChildView}>
          {this.state.show ? "Hide" : "Show"} child
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count +
        </button>
        <button onClick={this.toggleTheme}>Toggle theme</button>
        {this.state.show && <Child count={this.state.count} />}
        <div>---------------PARENT END---------------</div>
      </div>
    );
  }
}

// named export
export { Parent };

// in react class component, if u are writing any methid other than lifecycle
// u have to bind it into constructor (when this keyword is used)
