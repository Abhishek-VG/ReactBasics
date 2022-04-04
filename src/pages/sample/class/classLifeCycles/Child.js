import * as React from "react";

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("CHILD-CONSTRUCTOR");
  }

  componentDidMount() {
    // useEffect with Sec.Arg []
    // API calls
    console.log("CHILD-COMPONENT DID MOUNT");
  }

  shouldComponentUpdate() {
    console.log("CHILD-SHOULD COMPONENT UPDATE");
    // decides whether this component to be rendered or not
    // if returns false, it wont re-render
    return true;
  }

  componentDidUpdate() {
    console.log("CHILD-COMPONENT DID UPDATE");
  }

  componentWillUnmount() {
      console.log("CHILD-UNMOUNTING")
  }

  render() {
    console.log("CHILD-RENDER");
    return (
      <div>
        <div>---------------CHILD START---------------</div>
        <pre>

            -
            Count: {this.props.count}
        </pre>
        <div>---------------CHILD END---------------</div>
      </div>
    );
  }
}

