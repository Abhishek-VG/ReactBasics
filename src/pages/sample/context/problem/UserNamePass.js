import React from "react";

const UserName = () => {
  return (
    <>
      <Component2 user={"Jerry"} />
    </>
  );
};

const Component2 = ({ user }) => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
};

const Component3 = ({ user }) => {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
};

const Component4 = ({ user }) => {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
};

const Component5 = ({ user }) => {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
};

export default UserName;