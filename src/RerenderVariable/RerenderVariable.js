import React, { useEffect, useRef, useState } from "react";

const RerenderVariable = () => {
  const countRef = useRef(0);
  const [name, setName] = useState(0);

  

  useEffect(() => {
    //setCount(prevCount => prevCount + 1); 
    countRef.current += 1; 
  });
  return (
    <div>
      <h4>Rerende Variabler</h4>
      <input
        onChange={e => {
          setName(e.target.value);
        }}
      />
      {`Component render ${countRef.current} times`}
    </div>
  );
};

export default RerenderVariable;
