/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCheckLocalColor } from '../hooks/useCheckLocalColor';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import axiosInstance from '../hooks/axiosConfig';
import Modal from '../components/Modal';

interface MenuItemData {
  _id: string;
  title: string;
  description: string;
  price: string;
  menuImage: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  menuCategory: {
    _id: string;
    name: string; // Category name here
    createdAt: string;
    updatedAt: string;
    items: string[];
  };
}

const AssociatedMenus = () => {
  const { catid } = useParams();
  const { color } = useCheckLocalColor();
  const [data, setData] = useState<MenuItemData[]>([]);
  const [id, setId] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [catname, setCatname] = useState<string | null>(null);

  // Fetch menu items data from API
  const getMenuItems = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('/getsinglemenucategory/' + catid);

      if (res.status === 200) {
        setCatname(res.data.data.name);
        setData(res.data.data.items); // Assuming the response is structured like { data: [ ... ] }
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || 'Something went wrong');
      } else {
        toast.error('Unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  // Column headers for the table
  const columns = [
    { title: 'SN' },
    { title: 'Title' },
    { title: 'Description' },
    { title: 'Price' },
    { title: 'Image' },
    { title: 'Category' }, // Added Category column
  ];

  // Handle Delete operation
  const handleDelete = async (slug: string) => {
    try {
      const res = await axiosInstance.delete(`/deletemenu/${slug}`);
      console.log(res);
      if (res.status === 200) {
        setShow(false);
        setId('');
        toast.success(res.data.message);
        getMenuItems(); // Reload the menu items data after deletion
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || 'Error deleting menu item');
      }
    }
  };

  // Table Row Component to avoid repetition
  const TableRow = ({
    menuItem,
    index,
  }: {
    menuItem: MenuItemData;
    index: number;
  }) => (
    <tr className="hover:bg-slate-50 border-b border-slate-200">
      <td className="p-4 py-5 border border-r text-center">{index + 1}</td>
      <td className="p-4 py-5 border border-r text-center">{menuItem.title}</td>
      <td className="p-4 py-5 border border-r text-center">
        {menuItem.description}
      </td>
      <td className="p-4 py-5 border border-r text-center">{menuItem.price}</td>
      <td className="p-4 py-5 border border-r text-center">
        <img
          src={`${import.meta.env.VITE_BACKEND_URI}/${menuItem.menuImage}`}
          alt={menuItem.title}
          className="w-[50px] h-[50px] object-cover"
        />
      </td>
      <td className="p-4 py-5 border border-r text-center">
        {catname || 'No Category'}
      </td>{' '}
      {/* Display Category */}
      <td className="text-center">
        <Link to={`/edit-menu-item/${menuItem.slug}`}>
          <button className="px-4 py-1 text-sm font-medium mr-1 text-white bg-green-900 rounded">
            Edit
          </button>
        </Link>
        <button
          className="px-2 py-1 text-sm font-medium text-white bg-deleteButton rounded"
          onClick={() => {
            setShow(true);
            setId(menuItem.slug);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );

  return (
    <>
      {show && (
        <Modal
          show={show}
          setshow={setShow}
          id={id}
          handleDelete={handleDelete}
        />
      )}
      <div className="mt-[-45px]">
        <div className="flex flex-col gap-5 relative">
          {/* <Link to="/add-new-menu">
            <button
              className={`${color === 'dark' ? 'hover:bg-white hover:text-black' : ''} bg-green-900 text-white w-[200px] font-bold py-4 hover:bg-transparent hover:border-[2px] hover:border-green-600 hover:text-black absolute right-[0] top-5`}
            >
              Add New Menu Item
            </button>
          </Link> */}

          <div className="mt-[20px]">
            <div className="max-w-[1020px] mx-auto">
              <div className="w-full flex justify-between items-center mb-5 mt-1 pl-3">
                <h3
                  className={`${
                    color === 'dark' ? 'text-white' : 'text-black'
                  } text-[25px] font-semibold`}
                >
                  View Menu Items
                </h3>
              </div>

              <div className="relative flex flex-col w-full h-full overflow-hidden text-black-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                  <thead className="py-4">
                    <tr>
                      {columns.map((el, i) => (
                        <th
                          className="p-4 border-b border-slate-200 bg-green-900 border-r"
                          key={i}
                        >
                          <p className="text-sm font-normal leading-none text-white">
                            {el.title}
                          </p>
                        </th>
                      ))}
                      <th className="p-4 border-b border-slate-200 bg-green-900 border-r">
                        <p className="text-sm font-normal leading-none text-white text-center">
                          Actions
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(data) && data.length > 0 ? (
                      data.map((menuItem, index) => (
                        <TableRow
                          key={menuItem._id}
                          menuItem={menuItem}
                          index={index}
                        />
                      ))
                    ) : (
                      <tr>
                        <td colSpan={columns.length}>No Menu Items Found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssociatedMenus;
