import { useState } from "react";
import "./App.css";
import Square from "./Square";
let winner = "By now no-one is the";
let win=1;
const initialData = [
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
  { id: 9, value: "" },
];
const p1 = [
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
  { id: 9, value: "" },
];
const p2 = [
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
  { id: 9, value: "" },
];
const checkWinner = (player, symbol) => {
  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let condition of winningCondition) {
    const [a, b, c] = condition;
    if (
      player[a].value === symbol &&
      player[b].value === symbol &&
      player[c].value === symbol
    ) {
      symbol === "❌" ? (winner = "player1") : (winner = "player2");
      win=0;
    }
  }
};
function App() {
  const [board, setBoard] = useState(initialData);
  const [player1, setPlayer1] = useState(p1);
  const [player2, setPlayer2] = useState(p2);
  const [player, setPlayer] = useState("player1");
  function handleClick(id) {
    //console.log("aaya hai");
    const getid = board.find((b) => b.id === id);
    if (player === "player1") {
      getid.value = "❌";
      player1[id - 1].value = "❌";
      setPlayer1([...player1]);
      checkWinner(player1, "❌");
      setPlayer("player2");
    } else if (player === "player2") {
      getid.value = "𝐎";
      player2[id - 1].value = "𝐎";
      setPlayer2([...player2]);
      checkWinner(player2, "𝐎");
      setPlayer("player1");
    }
    setBoard([...board]);
  }
  if(win===1){
  return (
    <>
      <h1> TIC-TAC-TOE </h1>
      <div className="board">
        {
        board.map((s) => (
          <Square id={s.id} value={s.value} handleClick={handleClick}></Square>
        ))
}

        <h4>{winner} winner</h4>
        
        
      </div>
    </>
  );
}
else{
return(
<>
<h4>{winner} winner</h4>
</>

)
}}
export default App;
