import React from 'react';
import { Link } from 'react-router-dom';


import { useCheckLocalColor } from '../hooks/useCheckLocalColor';


const Aboutus = () => {
  const { color } = useCheckLocalColor();

  return (
    <div className="mt-[-45px]">
      <div className="flex flex-col gap-5 relative">
        <div className=" bg-transparent text-white w-[200px] font-bold py-4 hover:bg-transparent "></div>
        <Link to="/addnewslider">
          <button
            className={`${
              color == 'dark' && 'hover:bg-white hover:text-black'
            } bg-green-900 text-white w-[200px] font-bold py-4 hover:bg-transparent hover:border-[2px] hover:border-green-600 hover:text-black  absolute right-[0] top-5 `}
          >
            Add New Slider
          </button>
        </Link>
        <div className="mt-[20px]">
       
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
