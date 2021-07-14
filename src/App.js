import logo from "./logo.svg";
import "./App.css";
import Toggle from "./ToggleRenderProps";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <nav>NavItem</nav>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        />
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <nav>NavItem</nav>}
              <button onClick={toggle}>Menu</button>
            </div>
          )}
        />
      </header>
    </div>
  );
}

export default App;
