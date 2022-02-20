import "./App.css";
// import Person from './pages/sample/props/Person';
import CounterParent from "./pages/sample/state/CounterParent";
import UserName from "./pages/sample/context/problem/UserNamePass";
import EffectParent from "./pages/sample/useeffect/EffectParent";
import UserNameCont from "./pages/sample/context/solution/UserNamePassContext";

function App() {
  return (
    <div className="App">
      {/* <CounterParent /> */}
      {/* <UserName /> */}
      {/* <UserNameCont /> */}
      <EffectParent />
    </div>
  );
}

export default App;

{
  /* <Person name={"Jyothi"} age="21"/>
<Person name={"ABVG"} age="22"/>
<Person name={"Genny"} age="23"/> */
}
