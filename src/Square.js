//import { useState } from 'react';
import "./Square.css";
function Square({ id, handleClick, value }) {
  //const [square,setsquare]=useState(Array(9).fill(null));

  //const [value,setValue]=useState(null);

  if (id === 4 || id === 7) {
    return (
      <>
        {<br />}
        <button className="square" onClick={() => handleClick(id)}>
          {value}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className="square" onClick={() => handleClick(id)}>
          {value}
        </button>
      </>
    );
  }
}
export default Square;
