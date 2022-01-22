import react from "react";
import {TodoCounter} from './components/TodoCounter/TodoCounter';
import {TodoSearch} from './components/TodoSearch/TodoSearch';
import {TodoList} from './components/TodoList/TodoList';
import {TodoItem} from './components/TodoItem/TodoItem';
import {TodoButton} from './components/TodoButton/TodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'llegar a challenger', completed: false },
];

function App() {
  
  const [todos, setTodos] = react.useState(defaultTodos);
  const [searchValue, setSearchValue] = react.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; 
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    });
  }

  return (
    <react.Fragment>
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
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
