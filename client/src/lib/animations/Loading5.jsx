import React from 'react';
import './loading5.css'; // Import your CSS file

const Loading5 = () => {
  const text = "LOADING";

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className="flex text-6xl font-bold text-gray-700">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="opacity-0 animate-slide-fade-custom" // Use these classes
            style={{ animationDelay: `${index * 60}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading5;