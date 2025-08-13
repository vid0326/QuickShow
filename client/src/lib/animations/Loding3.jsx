import React from 'react';
import './loding3.css'; // Make sure to import your CSS file

const Loding3 = () => {
  const text = "LOADING";

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      {/* Apply the custom glow class here, alongside Tailwind's text styling */}
      <div className="animate-glow-custom text-6xl font-bold text-indigo-500">
        {text}
      </div>
    </div>
  );
};

export default Loding3;