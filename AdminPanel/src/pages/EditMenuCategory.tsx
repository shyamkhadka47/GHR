import { isAxiosError } from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../hooks/axiosConfig';

const EditMenuCategory = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName]: any = React.useState('');

  React.useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(`/getsinglemenucategory/${id}`);

        if (res.status == 200) {
          setName(res.data.data.name);
        }
      } catch (error) {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.message);
        }
      }
    })();
  }, [id]);

  // const handleAdd = () => {
  //   if (data.length < 5) {
  //     setData([...data, { name: '' }]);
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
  //   const { name, value } = e.target;
  //   // setData((prevData:any) =>
  //   //   prevData.map((item:any, index:number) =>
  //   //     index === i ? { ...item, [name]: value } : item,
  //   //   ),
  //   // );

  //   const onChangeval = [...data];
  //   onChangeval[i][name] = value;
  //   setData(onChangeval);
  // };
  // const handleDelete = (i: number) => {
  //   const deleted = [...data];
  //   deleted.splice(i, 1);
  //   setData(deleted);
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put(`/updatemenucategory/${id}`, {
        name,
      });
      if (res.status == 200) {
        toast.success(res.data.message);
        setName('');
        navigate('/menu-category');
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <div className="bg-white w-full h-[80vh] shadow-md flex flex-col items-center gap-3">
      <h1 className="text-center mt-5 p-5 font-bold text-black-0 text-[20px] underline underline-offset-8 ">
        Update Category
      </h1>

      {/* {data.length < 5 && (
        <button
          className="w-[100px] h-[50px] p-4 bg-green-800 text-white text-center rounded-lg"
          onClick={handleAdd}
        >
          {' '}
          Add
        </button>
      )} */}
      <div className="flex justify-between w-[80%]">
        <div className="pl-20 flex flex-col gap-5">
          {/* {data?.map(
            (
              el: { name: string | number | readonly string[] | undefined },
              i: number,
            ): any => ( */}
          <div className="flex gap-4 items-center justify-center">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className=" rounded-md w-[500px]  h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
              placeholder="Enter Category Name"
            />
            {/* <button
                  className="w-[100px] h-[50px] p-4 bg-red-600 text-white text-center rounded-lg"
                  onClick={(i: any) => handleDelete(i)}
                >
                  Delete
                </button> */}
          </div>
          {/* ),
          )} */}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-5">
        <input
          type="submit"
          onClick={() => {
            setName('');

            navigate('/menu-category');
          }}
          value={'Cancel'}
          className="bg-red-600 py-3 px-5 rounded-md cursor-pointer text-white"
        />
        <input
          type="submit"
          onClick={handleSubmit}
          value={'Update'}
          className="bg-green-800 py-3 px-5 rounded-md cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

export default EditMenuCategory;
