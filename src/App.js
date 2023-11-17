import User from "./components/user";
import './app.css'
function App() {
  return (
    <div id="container">
      <User name={'Player 1'} symbol={'X'}/>
      <User name={'Player 2'} symbol={'O'}/>
    </div>
  );
}

export default App;
