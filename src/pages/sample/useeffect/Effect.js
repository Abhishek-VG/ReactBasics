import React from "react";

const Effect = ({ flag }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("CHILD MOUNTED");
    // unmounted
    return () => {
      console.log("UNMOUNTED")
    }
  }, []);
  
  React.useEffect(() => {
    console.log("CHILD MOUNTED + UPDATED");
  });

  const handleIncr = () => {
    setCount(count + 1);
  }
  return <>
  <button onClick={handleIncr}>increment</button>
  <div>I am children count = {count}</div>
  <div>I am effect child flag = {flag.toString()}</div>
  </>;
};

export default Effect;
