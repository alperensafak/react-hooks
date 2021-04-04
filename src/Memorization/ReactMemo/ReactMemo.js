import React, { useState } from "react";
import Button from "./Button";
const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    
    <div>
      <p>{count}</p>

      <Button
        handleClick={() => {
          setCount(count => count + 1);
        }}
      />
    </div>
  );
};

export default ReactMemo;
