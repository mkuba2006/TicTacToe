import './board.css'
import { useState } from 'react';



const init_board =[
    [null,null,null],
    [null,null,null],
    [null,null,null],
];



const Board = () =>{
    const [board, setboard] = useState(init_board);

    const modifyboard = (row, col)=>{
        setboard(prevent=>{
            const updated = [...prevent.map(innerArr=>[...innerArr])];
            updated[row][col]='X';
            return updated;
        });
    };


    return(
        <ol id="board">
            {board.map((row,rowindex)=>
            <li key={rowindex} id='li_row'>
                    {row.map((symbol,colindex)=>
                        <li key={colindex} id='li_col'>
                            <button id='button' onClick={()=>modifyboard(rowindex,colindex)}>{symbol}</button>
                        </li> 
                    )}
            </li>)}

        </ol>
    )
}
export default Board;