import React, { useState, useEffect } from 'react';
import TodoItem from './components/todoItem';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Burada fetch işlemi gerçekleştirilebilir.
    // Ancak, basit bir örnek için sabit veri kullanılmıştır.
    const initialData = {
      todo: [
        { text: 'Taste JavaScript,', done: false },
        { text: 'Code furiously', done: true },
        { text: 'Promote Mavo', done: false },
        { text: 'Give talks', done: false },
        { text: 'Write tutorials', done: true },
        { text: 'Have a life!', done: false },
      ],
    };

    setTodos(initialData.todo);
  }, []);

  const addTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.done);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    switch (activeFilter) {
      case 'active':
        return !todo.done;
      case 'completed':
        return todo.done;
      default:
        return true;
    }
  });
  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  useEffect(() => {
    const toggleAllLabel = document.querySelector('.toggle-all + label');
  
    const handleToggleAllClick = () => {
      // filteredTodos içinde en az bir tane done: false olan var mı?
      const isAtLeastOneUndone = filteredTodos.some(todo => !todo.done);
  
      // Yapılacak işlemleri buraya ekleyin
      // Örneğin, isAtLeastOneUndone durumuna göre tüm elemanların done durumunu güncelle
      const updatedTodos = todos.map(todo => ({ ...todo, done: isAtLeastOneUndone }));
  
      // Güncellenmiş todos'u state'e set et
      setTodos(updatedTodos);
    
    };
  
    toggleAllLabel.addEventListener('click', handleToggleAllClick);
  
    return () => {
      // Komponent unmount edildiğinde event listener'ı temizle
      toggleAllLabel.removeEventListener('click', handleToggleAllClick);
    };
  }, [filteredTodos, todos, setTodos]);
  

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (newTodo.trim() !== '') {
              addTodo(newTodo.trim());
              setNewTodo('');
            }
          }}
        >
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </form>
      </header>
      <section className="main">
        <input type="checkbox" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <TodoItem
            key={index}
            todo={todo}
            index={index}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            onEdit={editTodo}
          />
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">{todos.filter((todo) => {return !todo.done}).length} items left</span>
        <ul className="filters">
          <li>
            <a
              className={activeFilter === 'all' ? 'selected' : ''}
              onClick={() => setActiveFilter('all')}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={activeFilter === 'active' ? 'selected' : ''}
              onClick={() => setActiveFilter('active')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={activeFilter === 'completed' ? 'selected' : ''}
              onClick={() => setActiveFilter('completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </section>
  );
};

export default App;
