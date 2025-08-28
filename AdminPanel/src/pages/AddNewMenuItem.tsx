/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsUpload } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../hooks/axiosConfig';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';

const AddNewMenuItem = () => {
  const getallcategory = async () => {
    try {
      const res = await axiosInstance.get('/getallmenucategory');

      if (res.status == 200) {
        setCatData(res.data.data);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
    }
  };
  const navigate = useNavigate();
  const [catdata, setCatData]: any = React.useState();

  const [data, setData] = React.useState({
    name: '',
    price: '',
    description: '',
    category: '',
  });

  React.useEffect(() => {
    getallcategory();
  }, []);
  const [imgsrc, setImgSrc] = React.useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const size = 1 * 1024 * 1024;
    // if (!e.target.files[0] || imgsrc.size >= size) {
    //   return toast.error('Image Required Less Than 1 MB');
    // }
    if (e.target.files && e.target.files[0]) {
      return setImgSrc(e.target.files[0]);
    }
    if (e.target.files && e.target.files[0].size >= size) {
      return toast.error('Image Larger than 1Mb');
    }
    return toast.error('Image Required');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('title', data.name);
    formdata.append('description', data.description);
    formdata.append('price', data.price);
    formdata.append('menuCategory', data.category);
    if (imgsrc) {
      formdata.append('image', imgsrc);
    }
    try {
      const res = await axiosInstance.post('/addmenu', formdata);

      if ((res.status = 200)) {
        return toast.success(res.data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <div className="bg-white w-full  shadow-md flex flex-col gap-2 ">
      <h1 className="text-center mt-5  font-bold text-black-0 text-[20px] underline underline-offset-8">
        Add New Menu Item
      </h1>
      <div className="flex justify-between w-[80%] ">
        <div className="pl-20 flex flex-col gap-3 w-full max-w-[500px]">
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <select
              className="h-[40px] rounded-md outline-none bg-slate-100"
              name="category"
              value={data.category}
              onChange={(e) =>
                setData((prev: any) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            >
              <option>Select a Category</option>
              {catdata ? (
                catdata?.map((el: any, i: any) => (
                  <option key={i} value={el._id}>
                    {el.name}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-black">
              Title:
            </label>
            <input
              value={data.name}
              onChange={(e) => handleChange(e)}
              type="text"
              name="name"
              className="rounded-md w-full h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
              placeholder="Enter Name of Item"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="text-black">
              Price:
            </label>
            <input
              value={data.price}
              onChange={(e) => handleChange(e)}
              type="text"
              name="price"
              className="rounded-md w-full h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
              placeholder="Enter Price of Item"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-black">
              Short Description About Item:
            </label>
            <textarea
              value={data.description}
              onChange={(e: any) => handleChange(e)}
              rows={4}
              name="description"
              className="rounded-md w-full p-5 text-black bg-[#f1f3f9] outline-none resize-none"
              placeholder="Enter Description"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="border border-dotted border-blue-600 w-[200px] h-[200px]">
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
            id="slider-image"
            type="file"
            name="image"
            className="hidden"
          />
          <label
            htmlFor="slider-image"
            className="cursor-pointer font-bold text-black p-5"
          >
            <BsUpload
              className="ml-[40px] mb-[10px] text-black cursor-pointer"
              size={30}
            />
            Upload Image
          </label>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 py-5 ">
        <input
          type="submit"
          onClick={() => {
            setData({ name: '', description: '', price: '', category: '' });
            setImgSrc(null);
            navigate('/menu-item');
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

export default AddNewMenuItem;
