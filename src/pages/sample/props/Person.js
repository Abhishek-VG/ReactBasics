import React from "react";

const Person = (props) => {
  const { name, age } = props;
  // logics
  return (
    <div>
      <span>
        I am a Person, from {name} {age}
      </span>
    </div>
  );
};

export default Person;
