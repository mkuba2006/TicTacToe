import User from "./components/user";
import Board from "./components/board";
import './app.css'
import { useState } from "react";




function App() {
  const [activePlayer, setPlayer]=useState('X');

  const handle = ()=>{
    setPlayer((current)=> current === 'X' ? 'O' : 'X');
  }

  return (
    <div>
      <div id="container">
        <User name={'Player 1'} symbol={'X'} isActive={activePlayer ==='X'}/>
        <User name={'Player 2'} symbol={'O'} isActive={activePlayer ==='O'}/>
      </div>
      <Board onSelectS={handle} ACTsymbol={activePlayer}/>
    </div>
  );
}

export default App;
