import React from 'react';
import './loading8.css'; // Your CSS file

const Loading8 = () => {
  const text = "LOADING";

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className="flex text-6xl font-bold text-gray-700">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="opacity-0 animate-unfold-custom"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading8;