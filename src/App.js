import { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Toggle, Portal, Modal } from "./Utils";

function App() {
  return (
    <div className="App">
      <header>
        
      </header>

      <Toggle>
        {({ on, toggle }) => (
          <>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>Here's a suuuuuuuper long string</h1>
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
