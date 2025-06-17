import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';
import Card from './Card';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim() === '') return;
    
    const newTaskObj = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    
    setTasks(prevTasks => [...prevTasks, newTaskObj]);
    setNewTask('');
  };

  const toggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Card title="Task Manager" className="max-w-md mx-auto mt-8">
      <div className="space-y-4">
        {/* Add Task Form */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <Button onClick={addTask}>Add</Button>
        </div>
        
        {/* Filter Controls */}
        <div className="flex space-x-2">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            size="small"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'secondary'}
            size="small"
            onClick={() => setFilter('active')}
          >
            Active
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            size="small"
            onClick={() => setFilter('completed')}
          >
            Completed
          </Button>
        </div>
        
        {/* Task List */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredTasks.length === 0 ? (
            <li className="py-4 text-center text-gray-500 dark:text-gray-400">
              No tasks found
            </li>
          ) : (
            filteredTasks.map(task => (
              <li key={task.id} className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300 dark:border-gray-600"
                  />
                  <span
                    className={`ml-3 ${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-gray-200'}`}
                  >
                    {task.text}
                  </span>
                </div>
                <Button
                  variant="danger"
                  size="small"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </li>
            ))
          )}
        </ul>
        
        {/* Task Count */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {tasks.filter(t => !t.completed).length} tasks remaining
        </div>
      </div>
    </Card>
  );
};

export default TaskManager;