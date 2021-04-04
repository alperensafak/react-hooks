import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

 
  const duplicateCount = useMemo(() => {
    [...new Array(10000000)].forEach(item => {});
    return count * 2;
  }, [count]);
  // const duplicateCount = duplicate();
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increase Counter
      </button>
      <p>{duplicateCount}</p>
      <input
        type="text"
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default UseMemo;
