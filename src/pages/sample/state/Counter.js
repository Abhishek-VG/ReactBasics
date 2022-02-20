import React from "react";

const Counter = (props) => {
  const { name, isClosed } = props;
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      {!isClosed && <button onClick={handleIncrement}>Click me +</button>}
      {!isClosed && <button onClick={handleDecrement}>Click me -</button>}
      <span>
        Number of times clicked, {count} by {name}
      </span>
    </div>
  );
};

export default Counter;
