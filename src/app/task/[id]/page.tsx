'use client';
import React, { FC } from 'react';

type Task = {
  params: {
    id: string;
  };
};
const page: FC<Task> = ({ params }) => {
  const { id } = params;
  return <div>{id}</div>;
};

export default page;
