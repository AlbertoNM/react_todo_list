import react from "react";
import {TodoCounter} from './components/TodoCounter/TodoCounter';
import {TodoSearch} from './components/TodoSearch/TodoSearch';
import {TodoList} from './components/TodoList/TodoList';
import {TodoButton} from './components/TodoButton/TodoButton';
// import './App.css';

function App() {
  return (
    <react.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <TodoButton />
    </react.Fragment>
  );
}

export default App;
