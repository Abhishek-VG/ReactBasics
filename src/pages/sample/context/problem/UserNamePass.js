import React from "react";

const UserName = () => {
  return (
    <>
      <span>Main comp 1</span>
      <Component2 user={"Jerry"} />
    </>
  );
};

const Component2 = ({ user }) => {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 user={user} />
    </>
  );
};

const Component3 = ({ user }) => {
  return (
    <>
      <h2>Component  3</h2>
      <Component4 user={user} />
    </>
  );
};

const Component4 = ({ user }) => {
  return (
    <>
      <h2>Component 4</h2>
      <Component5 user={user} />
    </>
  );
};

const Component5 = ({ user }) => {
  return (
    <>
      <h2>Component 5</h2>
      <h1>{`Hello ${user} again!`}</h1>
    </>
  );
};

export default UserName;