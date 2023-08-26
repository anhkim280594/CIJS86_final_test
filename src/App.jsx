import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [viewMode, setViewMode] = useState('all');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const handleTabClick = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="App">
      <h1>#todo</h1><div>
        <div className="TabContainer">
          <div
            className={`Tab ${viewMode === 'all' ? 'active' : ''}`}
            onClick={() => handleTabClick('all')}
          >
            All
          </div>
          <div
            className={`Tab ${viewMode === 'active' ? 'active' : ''}`}
            onClick={() => handleTabClick('active')}
          >
            Active
          </div>
          <div
            className={`Tab ${viewMode === 'completed' ? 'active' : ''}`}
            onClick={() => handleTabClick('completed')}
          >
            Completed
          </div>
        </div>
      </div>
      <hr />
      <div className="addInput">
        <input
          type="text"
          placeholder="add details"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => {
          if ((viewMode === 'completed' && !task.completed) || (viewMode === 'active' && task.completed)) {
            return null;
          }
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(index)}
              />
              <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;




