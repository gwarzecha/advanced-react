import { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./ToggleRPC";
import Portal from './Portal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Toggle>
        {({ on, toggle }) => (
          <>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show / Hide</button>
          </>
        )}
      </Toggle>
      <Portal>
        <h1>Hello from the portal!</h1>
      </Portal>
    </div>
  );
}

export default App;
