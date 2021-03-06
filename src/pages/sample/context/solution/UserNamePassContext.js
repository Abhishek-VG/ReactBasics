import React from "react";

const UserNameContext = React.createContext();

const UserNameCont = () => {
  return (
    <UserNameContext.Provider value={"Jerima"}>
      <Component2 />
    </UserNameContext.Provider>
  );
};

const Component2 = () => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
};

const Component3 = () => {
  const user = React.useContext(UserNameContext);
  return (
    <>
      <h1>Component 3, {user}</h1>
      <Component4 />
    </>
  );
};

const Component4 = () => {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
};

const Component5 = () => {
  const user = React.useContext(UserNameContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
};

export default UserNameCont;
