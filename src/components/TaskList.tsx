import Link from 'next/link';
import React, { FC } from 'react';
type TaskListProps = {
  tasks: string[];
  handleEditClick: (index: number) => void;
  handleDeleteClick: (index: number) => void;
};

const TaskList: FC<TaskListProps> = ({ tasks, handleEditClick, handleDeleteClick }) => {
  return (
    <div className="p-6 w-full flex justify-center overflow-auto">
      <ul className="w-full border-red-400 border-2 flex flex-col">
        {tasks.map((task, index) => (
          <li key={task + index} className="w-full flex flex-row">
            <Link href={`/task/${index}`} className="w-4/6">
              {task}
            </Link>
            <button className="w-1/6" onClick={() => handleEditClick(index)} type="button">
              edit
            </button>
            <button className="w-1/6" onClick={() => handleDeleteClick(index)} type="button">
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
