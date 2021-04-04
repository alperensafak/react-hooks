import React, { useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput"

const ForwardRef = () => {
  const inputRef = useRef(null); // {current:<input...}
  const focusOnInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
       
     <CustomInput color = "blue" ref={inputRef}/>
     <button onClick={focusOnInput}>Click</button>
    </div>
  );
};

export default ForwardRef;
