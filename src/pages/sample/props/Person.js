import React from "react";

const Person = (props) => {
  const { name, email, gender } = props;
  // logics
  return (
    <div>
      <div>
        I am a Person, from {name} | email = {email} | gender ={gender}
      </div>
      <br/> 
    </div>
  );
};

export default Person;
