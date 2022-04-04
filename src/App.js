import "./App.css";
import PersonDetails from "./pages/sample/props/PersonsDetails";
import CounterParent from "./pages/sample/state/CounterParent";
import UserName from "./pages/sample/context/problem/UserNamePass";
import EffectParent from "./pages/sample/useeffect/EffectParent";
import UserNameCont from "./pages/sample/context/solution/UserNamePassContext";
import React from "react";
// class
import ClassDemo from "./pages/sample/class/DemoClass";
// life cycles explained in below
import { Parent } from "./pages/sample/class/classLifeCycles/Parent";
function App() {
  return (
    <div className="App">
      {/* <CounterParent /> */}
      {/* <UserName /> */}
      {/* <UserNameCont /> */}
      {/* <EffectParent /> */}
      {/* <PersonDetails /> */}
      {/* <ClassDemo /> */}
      <Parent />
    </div>
  );
}

export default App;

{
  /* 
  <Person name={"ABVG"} age="22"/>
  <Person name={"Genny"} age="23"/>
*/
}
