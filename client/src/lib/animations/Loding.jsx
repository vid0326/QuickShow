import React from 'react';
import './Loding.css'; // Import the CSS file we'll create next

const Loding = () => {
  const text = "LOADING";

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className="wavy-text text-5xl font-semibold text-gray-700">
        {text.split('').map((letter, index) => (
          
          <span
            key={index}
            className="wavy-letter"
            // This inline style creates the staggered wave effect
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Use a non-breaking space for space characters to ensure they take up width */}
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loding;