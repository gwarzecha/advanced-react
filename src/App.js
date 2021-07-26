import { Fragment, Component, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Toggle } from "./Utils";
import { Modal } from "./Elements";
import { render } from "react-dom";
import User from './User';
import { UserContext } from './UserContext';



class UserProvider extends Component {
  state = {
    id: "123",
    name: "Garrett",
    email: "gwarzecha@email.com",
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

function App() {
  return(
    <UserProvider>
      <div className="App">
        <header></header>
        <User />
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
    </UserProvider>
  );
}

export default App;
