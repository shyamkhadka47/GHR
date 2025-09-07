/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { BsUpload } from 'react-icons/bs';
import toast from 'react-hot-toast';
import axiosInstance from '../hooks/axiosConfig';
import { isAxiosError } from 'axios';
import { downloadImage } from '../hooks/convertImageToFile';

import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WhyChooseUs = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    photos: ['', '', ''],
  });

  const [images, setImages] = useState<(File | any | null)[]>([
    null,
    null,
    null,
  ]);
  const [id, setId] = useState<string | null>(null);
  const [hasData, setHasData] = useState(false);

  // Fetch existing Why Choose Us data
  const fetchWhyChooseUs = async () => {
    try {
      const res = await axiosInstance.get('/getallwhychooseus');
      const item = res?.data?.data?.[0];
      if (item) {
        setId(item._id);
        setData({
          title: item.title,
          description: item.description,
          photos: item.photos,
        });
        setHasData(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Effect for fetching data on initial mount
  useEffect(() => {
    fetchWhyChooseUs();
  }, []); // Empty dependency array, only run once on mount

  // Effect for downloading images when `data.photos` changes
  useEffect(() => {
    const loadImages = async () => {
      if (!data.photos.length) return; // Early return if no photos are set
      // const img1 = await downloadImage(data.photos[0]);
      // const img2 = await downloadImage(data.photos[1]);
      // const img3 = await downloadImage(data.photos[2]);
      // setImages([img1, img2, img3]);
      const donwloadpromises = data.photos.map((el) => downloadImage(el));
      const downloadedimages = await Promise.all(donwloadpromises);
      setImages(downloadedimages);
    };
    loadImages();
  }, [data.photos]); // Only re-run when `data.photos` changes

  const handleImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const Max_Size = 1 * 1024 * 1024;
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > Max_Size) {
        return toast.error('File size must be under 1MB');
      }
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDescriptionChange = (value: string) => {
    setData((prev) => ({ ...prev, description: value }));
  };

  const validateForm = () => {
    if (!data.title || !data.description) {
      toast.error('All fields are required');
      return false;
    }
    if (images.some((img) => !img)) {
      toast.error('Please upload all 3 images (under 1MB each)');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formdata = new FormData();
    formdata.append('title', data.title);
    formdata.append('description', data.description);
    images.forEach((img) => {
      if (img) formdata.append('photos', img);
    });

    try {
      const res = await axiosInstance.post('/addwhychooseus', formdata);
      toast.success(res.data.message);
      fetchWhyChooseUs();
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Something went wrong');
      }
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formdata = new FormData();
    formdata.append('title', data.title);
    formdata.append('description', data.description);
    images.forEach((img) => {
      if (img) formdata.append('photos', img);
    });

    try {
      const res = await axiosInstance.put(`/updatewhychooseus/${id}`, formdata);
      toast.success(res.data.message);
      fetchWhyChooseUs();
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Something went wrong');
      }
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        ['clean'],
      ],
    }),
    [],
  );

  return (
    <div className="w-full px-4 py-8">
      <Breadcrumb pageName="Why Choose Us" />
      <form onSubmit={hasData ? handleUpdate : handleSubmit}>
        <div className="rounded-lg border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Why Choose Us
            </h3>
          </div>

          <div className="p-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-black dark:text-white"
                >
                  Enter Title
                </label>
                <input
                  name="title"
                  id="title"
                  type="text"
                  value={data.title}
                  onChange={handleChange}
                  placeholder="Enter Title"
                  className="w-full rounded-md border border-gray-300 bg-gray-50 py-3 px-4 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Description
                </label>
                <div className="rounded-md  bg-white dark:border-strokedark dark:bg-meta-4">
                  <ReactQuill
                    className="h-[400px]"
                    theme="snow"
                    modules={modules}
                    value={data.description}
                    onChange={handleDescriptionChange}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Image Uploads */}
            <div className="w-full md:w-72 space-y-6 flex flex-wrap justify-center gap-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-40 h-40"
                >
                  <label className="block text-sm font-medium text-black dark:text-white">
                    Image {index + 1}
                  </label>
                  <div className="w-40 h-40 border-2 border-dashed border-blue-600 rounded-md overflow-hidden flex items-center justify-center">
                    <img
                      src={img ? URL.createObjectURL(img) : '/no-photo.png'}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <input
                    id={`image-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(index, e)}
                    className="hidden"
                  />
                  <label
                    htmlFor={`image-${index}`}
                    className="mt-2 flex flex-col items-center text-sm text-black dark:text-white cursor-pointer"
                  >
                    <BsUpload size={20} />
                    <span className="mt-1 font-medium">
                      Upload Image {index + 1}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-6 pt-4 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setImages([null, null, null])}
              className="rounded border border-gray-300 bg-white py-2 px-6 text-black hover:shadow-md dark:border-strokedark dark:text-white"
            >
              Cancel
            </button>
            <button className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90">
              {hasData ? 'Update' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WhyChooseUs;
