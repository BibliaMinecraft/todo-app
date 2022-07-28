import './App.css';
import { TodoList } from './components/TodoList';
import freeCodeCampLogo from "./images/freecodecamp-logo.png"

function App() {
  return (
    <div className="App">
      <div className='container-freecodecamp'>
        <img 
          src={freeCodeCampLogo} 
          className="container-freecodecamp__img"
          alt='FreeCodeCamp Logo' 
        />
      </div>
      <div className='container-todo'>
        <h1>Mis Tareas</h1>
          <TodoList />
      </div>
    </div>
  );
}

export default App;
