import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';

function App() {
  return (
    <TaskProvider>
      <div style={{ margin: '20px' }}>
        <h1>Task-Flow | A Smart Task Manager</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
