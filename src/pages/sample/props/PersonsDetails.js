import React from "react";
import Person from "./Person";

const PersonDetails = (props) => {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((res1) => {
      console.log('res1', res1)
      setPeople(res1);
    })
  }, [])
  // logics
  return (
    <div>
      {people.map((data) => <Person name={data.name} email={data.email} gender={data.gender} />)}
    </div>
  );
};

export default PersonDetails;
