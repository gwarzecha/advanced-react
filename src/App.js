import { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Toggle } from "./Utils";
import { Modal } from "./Elements";

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
    </div>
  );
}

export default App;
