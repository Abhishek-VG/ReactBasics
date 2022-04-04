import * as React from "react";

export default class DemoClass extends React.Component {
    constructor(props) {
        super(props); 
        console.log("CONSTRUCTOR")
    }  

    componentDidMount() {
        // useEffect with Sec.Arg []
        // API calls
        console.log("COMPONENT DID MOUNT")
    }
 
    shouldComponentUpdate() {
        console.log("SHOULD COMPONENT UPDATE")
        // decides whether this component to be rendered or not
        // if returns false, it wont re-render
        return false;
    }

    componentDidUpdate() {
        console.log("COMPONENT DID UPDATE")
    }

    render() {
        console.log("RENDER");
        return <div>Hello</div>
    }   
}
/*
    any logics to be written in lifecycle methods
    whatever u see on dom, is returned from render method

    super will call parent component constructor
    React.Component is parent class

    // Mount cycle
    constructor -> render -> componentDidMount

    // update cycle
    shoudComponentupdate -> render -> compoenntDidUpdate

    unmount cycle
*/