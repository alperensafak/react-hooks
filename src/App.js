import "./App.css";
import RerenderVariable from "./RerenderVariable/RerenderVariable";
import ForwardRef from "./ForwardRef/ForwardRef";
import React, { useEffect, useRef } from "react";
import UseMemo from "./Memorization/UseMemo/UseMemo";
import ReactMemo from "./Memorization/ReactMemo/ReactMemo";
import UseCallback from "./Memorization/UseCallback/UseCallback";
function App() {
  //doma erişmek
  const inputRef = useRef(null); // {current:<input...}
  const focusOnInput = () => {
    inputRef.current.focus();
  };
  // useEffect(() => {
  //   inputRef.current.focus();
  // }); 

  return (
    <div className="App">
      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={focusOnInput}>Focus</button>
      <RerenderVariable />
      <br />
      <h1>forwardRef</h1> <ForwardRef />
      <h1>useMemo</h1>
      <UseMemo />
      <h1>React.Memo</h1>
      <ReactMemo />
      <h1>useCallback</h1>
      <UseCallback />
    </div>
  );
}

export default App;
