'use client';
import Header from '@/components/Header';
import TaskList from '@/components/TaskList';
import { useState } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([
    'Task 1',
    'Task 2',
    'Task 3',
    'Task 4',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 8',
    'Task 9',
    'Task 10',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 8',
    'Task 9',
    'Task 10',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 8',
    'Task 9',
    'Task 10',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 8',
    'Task 9',
    'Task 10',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 8',
    'Task 9',
    'Task 10',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 8',
    'Task 9',
    'Task 10',
  ]);
  const [taskInput, setTaskInput] = useState('');

  const handleDeleteClick = (index: number) => {
    const newTaskList = tasks.filter((task, i) => i !== index);
    setTasks(newTaskList);
  };

  const handleEditClick = (index: number) => {
    const toEditTask = tasks[index];
    handleDeleteClick(index);
    setTaskInput(toEditTask);
  };

  const handleAddClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTaskList = [...tasks, taskInput];
    setTasks(newTaskList);
    setTaskInput('');
  };
  return (
    <form className="max-h-screen" onSubmit={(e) => handleAddClick(e)}>
      <Header />
      <div className="p-6 w-full flex justify-center sticky top-0 bg-white">
        <input
          type="text"
          id="taskInput"
          placeholder="Insira uma nova tarefa"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="border-slate-500 border-2 outline-blue-900 rounded-lg rounded-r-none p-2 border-r-0 w-full"
        />
        <button
          className="border-slate-500 bg-blue-900 p-2 border-2 border-l-0
				rounded-lg rounded-l-none w-10 text-white font-bold"
        >
          +
        </button>
      </div>
      <TaskList tasks={tasks} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} />
    </form>
  );
};
export default Home;
