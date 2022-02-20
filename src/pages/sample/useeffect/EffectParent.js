import React from "react";
import Effect from "./Effect";

const EffectParent = () => {
  const [flag, setFlag] = React.useState(true);
  const [unmount, setMount] = React.useState(false);

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

  const handleUnmount = () => {
    setMount(!flag);
  };

  return (
    <>
      <h1>Hi, I am Effect parent</h1>
      <button onClick={handleFlag}>Click here to toggle lock</button>
      <button onClick={handleUnmount}>Click to UNMOUNT</button>
      <div>-----------------------</div>
      {!unmount && <Effect flag={flag} />}
    </>
  );
};

export default EffectParent;
