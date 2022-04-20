import logo from './logo.svg';
import './Todo.css';

function Todo() {
  return (
    <div className="Todo">
      <header className="todo-header">
        <img src={logo} className="App-todo" alt="logo" />
        <p>
          Edit <code>src/Todo.js</code> and save to reload.
        </p>
        <a
          className="Todo-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
