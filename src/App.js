import react from "react";
import {TodoCounter} from './components/TodoCounter/TodoCounter';
import {TodoSearch} from './components/TodoSearch/TodoSearch';
import {TodoList} from './components/TodoList/TodoList';
import {TodoItem} from './components/TodoItem/TodoItem';
import {TodoButton} from './components/TodoButton/TodoButton';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'llegar a challenger', completed: false },
];

function App() {
  return (
    <react.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
      </TodoList>  
      <TodoButton />
    </react.Fragment>
  );
}

export default App;
