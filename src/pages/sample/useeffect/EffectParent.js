import React from "react";
import Effect from "./Effect";

const EffectParent = () => {
  const [flag, setFlag] = React.useState(true);
  const [mount, setMount] = React.useState(true);

  // this calls on mount
  React.useEffect(() => {
    console.log("Parent MOUNTED");
  }, []);

  // on every update
  React.useEffect(() => {
    console.log("parent Mount + Update");
  });

  const handleFlag = () => {
    setFlag(!flag);
  };

  const handleMount = () => {
    setMount(!mount);
  };

  return (
    <>
      <h1>Hi, I am Effect parent</h1>
      <button onClick={handleFlag}>Click here to toggle lock</button>
      <button onClick={handleMount}>Click to UNMOUNT</button>
      <div>-----------------------</div>
      {mount && <Effect flag={flag} />}
    </>
  );
};

export default EffectParent;
