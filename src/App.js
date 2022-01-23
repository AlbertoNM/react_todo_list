import react from "react";
import {TodoCounter} from './components/TodoCounter/TodoCounter';
import {TodoSearch} from './components/TodoSearch/TodoSearch';
import {TodoList} from './components/TodoList/TodoList';
import {TodoItem} from './components/TodoItem/TodoItem';
import {TodoButton} from './components/TodoButton/TodoButton';

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = react.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [
    item,
    saveItem
  ];

}

function App() {
  
  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }; 

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
    
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
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </TodoList>  
      <TodoButton />
    </react.Fragment>
  );
}

export default App;
