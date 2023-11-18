import User from "./components/user";
import Board from "./components/board";
import './app.css'




function App() {
  return (
    <div>
      <div id="container">
        <User name={'Player 1'} symbol={'X'}/>
        <User name={'Player 2'} symbol={'O'}/>
      </div>
      <Board/>
    </div>
  );
}

export default App;
