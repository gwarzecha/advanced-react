import { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./ToggleRPC";
import Portal from "./Portal";
import Modal from "./Modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Toggle>
        {({ on, toggle }) => (
          <>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>Still in modal</h1>
            </Modal>
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
