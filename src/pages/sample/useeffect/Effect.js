import React from "react";

const Effect = ({ flag }) => {
  React.useEffect(() => {
    console.log("CHILD MOUNTED");
    return () => {
      console.log("UNMOUNT CALLED")
    }
  }, []);
  
  React.useEffect(() => {
    console.log("CHILD MOUNTED/UPDATED");
  });

  return <div>I am effect child isclosed = {flag.toString()}</div>;
};

export default Effect;
