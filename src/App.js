import logo from "./logo.svg";
import "./App.css";
import Toggle from "./ToggleRPC";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Toggle>
        {({ on, toggle }) => (
          <div>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show / Hide</button>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default App;
