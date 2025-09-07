/* eslint-disable @next/next/no-img-element */
import { isAxiosError } from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { BsUpload } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../hooks/axiosConfig';
import { downloadImage } from '../hooks/convertImageToFile';

const EditTeam = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = React.useState({
    name: '',
    work: '',
  });

  const [imgsrc, setImgSrc] = React.useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const Max_Size = 1 * 1024 * 1024;
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > Max_Size) {
        return toast.error('File Size Larger Than 1MB');
      }
      setImgSrc(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!imgsrc) {
      return toast.error('Image Required');
    }

    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('work', data.work);
    formdata.append('image', imgsrc);

    try {
      const res = await axiosInstance.put(`/editourteam/${id}`, formdata);
      if (res.status === 200) {
        toast.success(res.data.message);
        getSingleTeam(id);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  const getSingleTeam = async (id: string | undefined) => {
    try {
      const res = await axiosInstance.get(`/getsingleourteam/${id}`);
      if (res.status === 200) {
        const imageFile = await downloadImage(res.data.data.teamImage);
        setData({
          name: res.data.data.name,
          work: res.data.data.work,
        });
        setImgSrc(imageFile);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  React.useEffect(() => {
    if (id) {
      getSingleTeam(id);
    }
  }, [id]);

  return (
    <div className="bg-white w-full h-[80vh] shadow-md flex flex-col gap-3">
      <h1 className="text-center mt-5 p-5 font-bold text-black-0 text-[20px] underline underline-offset-8">
        Edit Team Member
      </h1>

      <div className="flex justify-between w-[80%]">
        <div className="pl-20 flex flex-col gap-5">
          <input
            value={data.name}
            onChange={handleChange}
            type="text"
            name="name"
            className="rounded-md w-[500px] h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
            placeholder="Enter Name"
          />

          <input
            value={data.work}
            onChange={handleChange}
            type="text"
            name="work"
            className="rounded-md w-[500px] h-[60px] p-5 text-black bg-[#f1f3f9] outline-none"
            placeholder="Enter Work/Position"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="border border-dotted border-blue-600 w-[200px] h-[200px]">
            {imgsrc ? (
              <img
                src={URL.createObjectURL(imgsrc)}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="/no-photo.png"
                alt="No Upload"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <input
            onChange={handleImage}
            id="team-image"
            type="file"
            className="hidden"
            accept="image/*"
          />

          <label
            htmlFor="team-image"
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

      <div className="flex items-center justify-center gap-4 mt-5">
        <input
          type="submit"
          onClick={() => {
            setData({ name: '', work: '' });
            setImgSrc(null);
            navigate('/our-team');
          }}
          value="Cancel"
          className="bg-red-600 py-3 px-5 rounded-md cursor-pointer text-white"
        />

        <input
          type="submit"
          onClick={handleSubmit}
          value="Update"
          className="bg-green-800 py-3 px-5 rounded-md cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

export default EditTeam;
