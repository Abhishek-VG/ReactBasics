import * as React from "react";

export default class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("CHILD-CONSTRUCTOR");
  }

  componentDidMount() {
    // useEffect with Sec.Arg []
    // API calls
    console.log("CHILD-COMPONENT DID MOUNT");
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log("CHILD-SHOULD COMPONENT UPDATE");
  //   // decides whether this component to be rendered or not
  //   // if returns false, it wont re-render
  //   // after should comp update 
  //   // nextProps mergers with this.props
  //   console.log(nextProps, this.props);
  //   if(nextProps.count % 2 ===0) {
  //     return true
  //   } else {
  //     return false;
  //   }
  // }

  // shouldComponentUpdate(nextProps) {
  //   // if in parent, a rerender is caused and that doesnt chnage any prop value 
  //   // to child, then child re render is useless
  //   console.log("CHILD-SHOULD COMPONENT UPDATE");
  //     console.log(nextProps, this.props);
  // if(nextProps.count === this.props.count) {
  //     return false
  //   } else {
  //     return true;
  //   }
  //  }

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

// pure component implements should component internally (shallow comapriosion)