import React, {useReducer } from 'react';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        { id: state.length, name: action.payload, completed: false },
      ];
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return (
    <div>
      <button onClick={() => addTask('New Task')}>Add Task</button>
      {tasks.map((task) => (
        <div key={task.id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button onClick={() => toggleTask(task.id)}>Toggle</button>
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default App;
