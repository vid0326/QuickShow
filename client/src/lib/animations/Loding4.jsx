import React from 'react';
import './loding4.css'; // Import the CSS file

const Loding4 = () => {
  const text = "LOADING";

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className="flex text-6xl font-bold text-gray-700">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="animate-jitter-custom"
            // Randomizing the duration for each letter makes it look more natural
            style={{ animationDuration: `${0.5 + Math.random() * 0.5}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loding4;