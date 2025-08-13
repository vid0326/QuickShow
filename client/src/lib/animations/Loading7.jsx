import React from 'react';
import './loading7.css'; // Your CSS file

const Loading7 = () => {
  const text = "LOADING";

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <h1 className="animate-spotlight-custom text-7xl font-black text-gray-400">
        {text}
      </h1>
    </div>
  );
};

export default Loading7;