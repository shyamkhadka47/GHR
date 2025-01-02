
import { isAxiosError } from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../hooks/axiosConfig';


const ViewUserquery = () => {
const {id}=useParams() 
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    name: '',
    email: '',
    phonenumber:"",
    description: '',
  });

  const getsinglequery=async()=>{
    try {
        const res = await axiosInstance.get(`/getsingleuserquery/${id}`)
        if(res.status==200){
            setData(res.data.data)
        }
    } catch (error) {
        if(isAxiosError(error)){
            return toast.error(error.response?.data.message)
        }
    }
  }

  React.useEffect(()=>{getsinglequery()},[])
 
  return (
    <div className="bg-white w-full shadow-md flex flex-col items-center justify-center  gap-3">
      <h1 className="text-center mt-5 p-5 font-bold text-black-0 text-[20px] underline underline-offset-8 ">
        User Query
      </h1>
      <div className="flex justify-between w-[80%]">
        <div className="pl-20 flex flex-col gap-5">
          <input
            value={data.name}
           
            type="text"
            name="title"
            className=" rounded-md w-[500px]  h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
            
          />
          <input
            value={data.email}
           
            type="text"
            name="slogan"
            className=" rounded-md w-[500px]  h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
            
          />
          <input
            value={data.phonenumber}
           
            type="text"
            name="slogan"
            className=" rounded-md w-[500px]  h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
           
          />
          <textarea
            value={data.description}
           rows={7}
           
            name="description"
            className=" rounded-md  p-5 text-black bg-[#f1f3f9] outline-none"
            placeholder="Enter Description"
          />
        </div>

      
      </div>
      <div className="flex items-center justify-center gap-4 mt-5 mb-5">
        <input
          type="submit"
          onClick={() => {
           
            navigate("/user-queries")
          }}
          value={'Back'}
          className="bg-blue-600 py-3 px-5 rounded-md cursor-pointer text-white"
        />
        
      </div>
    </div>
  );
};

export default ViewUserquery;
