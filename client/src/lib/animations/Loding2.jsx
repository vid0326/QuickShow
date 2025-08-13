import React, { useState, useEffect } from 'react';

const Loding2 = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through '.', '..', '...', and then reset
      setDots((prevDots) => (prevDots.length >= 3 ? '' : prevDots + '.'));
    }, 400); // Adjust speed here (in milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
      <div className='animate-spin rounded-full h-14 w-14 border-2 border-t-[var(--color-primary)]'></div>
      <div className='text-5xl font-semibold text-gray-700 ml-4 mt-2 w-48 text-left'>
        {/* We use a fixed-width container and left-align text to prevent layout shift */}
        Loading{dots}
      </div>
    </div>
  );
};

export default Loding2;