import React, { useState, useCallback } from "react";
import Button from "./Button";
const UseCallback = () => {
  const [count, setCount] = useState(0);



  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); 


 

  return (
  
    <div>
      <p>{count}</p>

      <Button handleClick={incrementCount} />
    </div>
  );
};

export default UseCallback;
