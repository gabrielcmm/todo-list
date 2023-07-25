import Link from 'next/link';
import React from 'react';

const Task = () => {
  return (
    <div>
      <Link href={'/task/32'}>Task Random</Link>
    </div>
  );
};

export default Task;
