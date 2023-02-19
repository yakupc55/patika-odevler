import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [checkAll, setCheckAll] = useState(false);
  const [isClearActive, setIsClearActive] = useState(false)
  const [inputText, setInputText] = useState("");
  const Buttons = ["All", "Active", "Completed"];
  const [activeButton, setActiveButton] = useState(0);
  const [todos, setTodos] = useState([
    {
      "text": "Learn JavaScript",
      "done": false,
      "show": true
    },
    {
      "text": "Learn React",
      "done": false,
      "show": true
    },
    {
      "text": "Have a life",
      "done": false,
      "show": true
    },
  ]);
  const [leftItem, setLeftItem] = useState(2);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { "text": inputText, "done": false, "show": true }]);
    setInputText("");
  };

  const togsAll = (e) => {
    e.preventDefault();
    // console.log("değişti");
    setCheckAll(!checkAll);

    todos.map((todo) => todo.done = !checkAll)
    // setLeftItem(checkAll? 0:todos.length)
  };

  const changeTodoCheck = (index) => {
    console.log(index);
    setTodos(todos.map((todo, id) => (id === index ? { ...todo, "done": !todo.done } : todo)));
    
  };
  useEffect(() => {
    var count = todos.filter(todo => todo.done === false).length
    setLeftItem(count)
    setIsClearActive(count===todos.length? false:true);
  
    changeFilter(activeButton)
    return () => {
    }
  }, [todos])

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, id) => id !== index));
  }

  const deleteAllfinishTodos = ()=>{
    setTodos(todos.filter((todo) => todo.done === false));
  }
  const changeFilter = (index) => {
    setActiveButton(index)
    if (index === 0) {
      todos.map((todo) => {
        todo.show = true
      });
    }
    else if (index === 1) {
      todos.map((todo) => {
        if (todo.done === false) {
          todo.show = true
        }
        else {
          todo.show = false
        }
      });
    }
    else {
      todos.map((todo) => {
        if (todo.done === true) {
          todo.show = true
        }
        else {
          todo.show = false
        }
      });
    }
  }
  return (
    <div>
      <div className="todoapp">
        <div className='header'>
          <h1>todos</h1>
          <form onSubmit={onSubmit}>
            <input value={inputText} className="new-todo" onChange={(e) => { setInputText(e.target.value) }} placeholder="What needs to be done?" autoFocus />
          </form>
        </div>
        <section className="main">
          <input checked={checkAll} onChange={togsAll} className="toggle-all" type="checkbox" />
          <label onClick={togsAll} htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            {todos.map((todo, i) => {
              if (todo.show) {

                return <li key={i} className={`${todo.done ? "completed" : ""}`}>
                  <div className="view">
                    <input checked={todo.done} onChange={(e) => { changeTodoCheck(i) }} className="toggle" type="checkbox" />
                    <label>{todo.text}</label>
                    <button onClick={() => { deleteTodo(i) }} className="destroy"></button>
                  </div>
                </li>
              }
            }


            )}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{leftItem} </strong>
            items left
          </span>

          <ul className="filters">
            {Buttons.map((buton, index) =>
              <li key={index}>
                <a href="#/" onClick={() => { changeFilter(index) }} className={`${activeButton === index ? "selected" : ""}`}>{buton}</a>
              </li>
            )}
          </ul>
          {isClearActive? <button onClick={deleteAllfinishTodos} className="clear-completed">
            Clear completed
          </button>: <></>}
          
        </footer>
      </div>
      <footer className="info">
        <p>Created by <a href="">Dmitry Sharabin , converted to React by Diyar Ceran</a></p>
      </footer>

    </div>

  );
}

export default App;
