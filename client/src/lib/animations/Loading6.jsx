import React from 'react';
import './loading6.css'; // Import your CSS file

const Loading6 = () => {
  const text = "LOADING";

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <h1 className="animate-gradient-wave-custom text-7xl font-black">
        {text}
      </h1>
    </div>
  );
};

export default Loading6;