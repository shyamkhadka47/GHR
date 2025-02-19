/* eslint-disable @next/next/no-img-element */
import { isAxiosError } from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { BsUpload } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../hooks/axiosConfig';

const AddNewSlider = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    description: '',

    caption: '',
  });
  const [imgsrc, setImgSrc] = React.useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setImgSrc(e.target.files[0]);
    }
  };

  const handleSubmit =async (e: any) => {
    e.preventDefault();
    if(!imgsrc){
      return toast.error("Please Upload Image Less Than 1 MB")
    }
    const formdata= new FormData()
    formdata.append("description", data.description)
    formdata.append("caption", data.caption)
    formdata.append("image", imgsrc)
   try {
    const res= await axiosInstance.post("/addgallery", formdata)
    if(res.status==200){
      return toast.success(res.data.message)
    }
   } catch (error) {
    if(isAxiosError(error)){
      return toast.error(error.response?.data.message)
    }
   }
  };

  return (
    <div className="bg-white w-full h-[80vh] shadow-md flex flex-col  gap-3">
      <h1 className="text-center mt-5 p-5 font-bold text-black-0 text-[20px] underline underline-offset-8 ">
        Add New Gallery Image
      </h1>
      <div className="flex justify-between w-[80%]">
        <div className="pl-20 flex flex-col gap-5">
          <input
            value={data.description}
            onChange={(e) => handleChange(e)}
            type="text"
            name="description"
            className=" rounded-md w-[500px]  h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
            placeholder="Enter Descriptive Name of image"
          />
          <input
            value={data.caption}
            onChange={(e) => handleChange(e)}
            type="text"
            name="caption"
            className=" rounded-md w-[500px]  h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
            placeholder="Image Caption"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="border border-dotted border-blue-600 w-[200px] h-[200px] ">
            {imgsrc ? (
              <img
                src={URL.createObjectURL(imgsrc)}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            ) : (
              <img
                src="/no-photo.png"
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            )}
          </div>
          <input
            onChange={(e) => handleImage(e)}
            id="gallery-image"
            type="file"
            className="hidden"
          />
          <label
            htmlFor="gallery-image"
            className="cursor-pointer font-bold text-black p-5"
          >
            <BsUpload
              className=" ml-[40px] mb-[10px] text-black cursor-pointer"
              size={30}
            />
            Upload Image
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-5">
        <input
          type="submit"
          onClick={() => {
            setData({ caption: '', description: '' });
            setImgSrc(null);
            navigate('/gallery');
          }}
          value={'Cancel'}
          className="bg-red-600 py-3 px-5 rounded-md cursor-pointer text-white"
        />
        <input
          type="submit"
          onClick={handleSubmit}
          value={'Submit'}
          className="bg-green-800 py-3 px-5 rounded-md cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

export default AddNewSlider;
