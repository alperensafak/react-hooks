import React from 'react'

const Button = ({handleClick}) => {
    console.log("button - rerender");
    return (
       <button onClick={handleClick}>Sayacı Arttır</button>
    )
}
//referans equality ile hareket ediyor React.memo
//React memo her renderın da button da render ediliyor. BUnun içim =>
export default React.memo(Button);
