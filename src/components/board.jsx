import './board.css'
import { useState } from 'react';



const init_board =[
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

const winningSets = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];
  

const Board = ({onSelectS, ACTsymbol}) =>{
    const [board, setboard] = useState(init_board);

    const modifyBoard = (row, col) => {
        setboard((prev) => {
          if (prev[row][col] !== null) {
            alert("You can't choose this field.");
            return prev;
          } else {
            const updated = [...prev.map((innerArr) => [...innerArr])];
            updated[row][col] = ACTsymbol;
            onSelectS();
            checkForWinner(updated, ACTsymbol);
            return updated;
          }
        });
      };

      function checkForWinner(board, player) {
        for (const set of winningSets) {
          const isWinner = set.every(([row, col]) => board[row][col] === player);
          if (isWinner) {
            setTimeout(() => {
              window.alert(`Player ${player} won`);
            }, 100);
            return true;
          }
        }
        return false;
      }
      

    return(
        <ol id="board">
            {board.map((row,rowindex)=>
            <li key={rowindex} id='li_row'>
                    {row.map((symbol,colindex)=>
                        <li key={colindex} id='li_col'>
                            <button id='button' onClick={()=>modifyBoard(rowindex,colindex)}>{symbol}</button>
                        </li> 
                    )}
            </li>)}

        </ol>
    )
}
export default Board;