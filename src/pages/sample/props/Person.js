import React from "react";

const Person = (props) => {
  const { name, email, gender, status } = props;
  // logics
  // return (
  //   <div>
  //     <div>
  //       I am a Person, from {name} | email = {email} | gender ={gender}
  //     </div>
  //     <br/>
  //   </div>
  // );
  return (
    <div className="d-flex p-3 bg-secondary text-white">
      <div className="p-2 bg-info">I am {name}</div>
      <div className="p-2 bg-warning">{email}</div>
      <div className="p-2 bg-primary">{gender}</div>
      <div className="p-2 bg-warning">{status.toString()}</div>
    </div>
  );
};

export default Person;
