import React from "react";
import Counter from "./Counter";

const CounterParent = () => {
    const [lock, setLock] = React.useState(true);

    // this calls on mount
    React.useEffect(() => {
        console.log("MOUNTED")
    }, []);

    // on every update
    React.useEffect(() => {
        console.log("Mount + Update")
    });

    const handleLock = () => {
        setLock(!lock);
    }
    return (
    <>
      <h1>Hi, I am parent</h1>
      <button onClick={handleLock}>Click here to toggle lock</button>
      <div>-----------------------</div>
      <Counter name={"Jyothi"} isClosed={lock} />
    </>
  );
};

export default CounterParent;
