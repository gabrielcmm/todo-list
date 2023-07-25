import Image from 'next/image';
import React from 'react';

const Header = () => {
  const user = 'Gabriel Martins';
  return (
    <header className="flex flex-row justify-between items-center p-4">
      <div>
        <h2>{`${user}'s`}</h2>
        <p>TODO List</p>
      </div>
      <Image src={'/profile.jpeg'} alt="Profile Picture" width={60} height={60} className="rounded-full" />
    </header>
  );
};

export default Header;
