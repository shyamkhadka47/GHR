/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { BsUpload } from 'react-icons/bs';
import toast from 'react-hot-toast';
import axiosInstance from '../hooks/axiosConfig';
import { isAxiosError } from 'axios';
import { downloadImage } from '../hooks/convertImageToFile';
import JoditEditor from 'jodit-react';
import '../css/about.css';

const Aboutus = () => {
  const getaboutus = async () => {
    try {
      const res = await axiosInstance.get(`/getaboutus`);

      if (res?.data?.data.length < 1) {
        return setHasData(false);
      }

      if (res.status == 200) {
        setHasData(true);
        setData({
          title: res?.data?.data[0]?.title,
          content: res?.data?.data[0]?.content,
          aboutImage: res?.data?.data[0]?.aboutImage,
        });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  const [data, setData] = React.useState({
    title: '',
    content: '',
    aboutImage: '',
  });
  const [blogo, setblogo] = React.useState<File | null>(null);

  const [hasData, setHasData] = React.useState(false);
  React.useEffect(() => {
    const getFile = async () => {
      const file = await downloadImage(data?.aboutImage);
      setblogo(file);
    };
    getFile();
    getaboutus();
  }, [data?.aboutImage]);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const Max_Size = 1 * 1024 * 1024;
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > Max_Size) {
        return toast.error('File Size Larger Than 1MB');
      }
      setblogo(e.target.files[0]);
    }
  };

  const handleChange = (e: any) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogo) {
      return toast.error('Please Upload Image Less Than 1Mb');
    }
    const formdata = new FormData();
    formdata.append('title', data.title);
    formdata.append('content', data.content);
    formdata.append('image', blogo);
    try {
      const res = await axiosInstance.post('/addaboutus', formdata);
      if (res.status == 200) {
        return toast.success(res.data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
    }
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    if (!blogo) {
      return toast.error('Please Upload Image Less Than 1MB');
    }
    const formdata = new FormData();
    formdata.append('title', data.title);
    formdata.append('content', data.content);
    formdata.append('image', blogo);
    try {
      const res = await axiosInstance.put('/updateaboutus', formdata);

      if (res.status == 200) {
        toast.success('About Us Updated SuccessFully');
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
    getaboutus();
  };

  const config = useMemo(
    () => ({
      height: 400,
      readonly: false,
      placeholder: '',
    }),
    [],
  );

  return (
    <>
      <div className="w-full px-4 py-8">
        <Breadcrumb pageName="About Us" />

        <form onSubmit={handleSubmit}>
          {/* Unified Card */}
          <div className="rounded-lg border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
            {/* Header */}
            <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                About Company
              </h3>
            </div>

            {/* Flex Layout */}
            <div className="p-6 flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="flex-1 space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium text-black dark:text-white"
                  >
                    Enter Title
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 bg-gray-50 py-3 px-4 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                    type="text"
                    name="title"
                    id="title"
                    value={data.title || ''}
                    onChange={handleChange}
                    placeholder="Enter Title"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    Content
                  </label>
                  <div className="rounded-md border border-gray-300 bg-white dark:border-strokedark dark:bg-meta-4">
                    <JoditEditor
                      config={config}
                      value={data.content}
                      onChange={(content) =>
                        setData((prev) => ({ ...prev, content }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-64 flex flex-col items-center">
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  About Image
                </label>
                <div className="w-52 h-52 border-2 border-dashed border-blue-600 rounded-md overflow-hidden">
                  <img
                    src={blogo ? URL.createObjectURL(blogo) : '/no-photo.png'}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                <input
                  id="slider-image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />
                <label
                  htmlFor="slider-image"
                  className="mt-4 flex flex-col items-center text-sm text-black dark:text-white cursor-pointer"
                >
                  <BsUpload size={24} />
                  <span className="mt-1 font-medium">Upload Image</span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 pb-6 pt-4 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setblogo(null)}
                className="rounded border border-gray-300 bg-white py-2 px-6 text-black hover:shadow-md dark:border-strokedark dark:text-white"
              >
                Cancel
              </button>
              {!hasData ? (
                <button
                  type="submit"
                  className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Aboutus;
