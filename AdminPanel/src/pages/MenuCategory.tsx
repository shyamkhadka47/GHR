import { Link } from 'react-router-dom';

import { useCheckLocalColor } from '../hooks/useCheckLocalColor';
import axiosInstance from '../hooks/axiosConfig';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import React from 'react';
import Modal from '../components/Modal';

const MenuCategory = () => {
  const { color } = useCheckLocalColor();
  const [data, setData]:any = React.useState();
  const [id, setId] = React.useState('');
  const [show, setShow] = React.useState(false);

  const getallmenucategory = async () => {
    try {
      const res = await axiosInstance.get('/getallmenucategory');
 
      if (res.status == 200) {
        setData(res.data.data);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  React.useEffect(() => {
    getallmenucategory();
  }, []);

  const columns = [{ title: 'SN' }, { title: 'Name' }];
  const handleDelete = async (so: any) => {
    try {
      const res = await axiosInstance.delete(`/deletemenucategory/${so}`);
      if (res.status == 200) {
        setShow(false);
        setId('');
        toast.success(res.data.message);
        getallmenucategory();
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <div>
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
          <div className=" bg-transparent text-white w-[200px] font-bold py-4 hover:bg-transparent "></div>
          <Link to="/add-new-menu-category">
            <button
              className={`${
                color == 'dark' && 'hover:bg-white hover:text-black'
              } bg-green-900 text-white w-[200px] font-bold py-4 hover:bg-transparent hover:border-[2px] hover:border-green-600 hover:text-black  absolute right-[0] top-5 `}
            >
              Add new Category
            </button>
          </Link>

          <div className="mt-[20px]">
            <div className="max-w-[1020px] mx-auto">
              <div className="w-full flex justify-between items-center mb-5 mt-1 pl-3">
                <div>
                  <h3
                    className={`${
                      color == 'dark' && 'text-white'
                    } "text-[25px] font-semibold text-black"`}
                  >
                    View All Menu Category
                  </h3>
                </div>
              </div>

              <div className="relative flex flex-col w-full h-full overflow-hidden text-black-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                  <thead className="py-4">
                    <tr>
                      {columns?.map((el, i) => (
                        <th
                          className="p-4  border-b border-slate-200 bg-green-900 border-r"
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
                    {data?.map((el: any, ind: any) => (
                      <tr
                        className="hover:bg-slate-50 border-b border-slate-200"
                        key={ind}
                      >
                        <td className="p-4 py-5 border border-r max-w-[450px]">
                          <p className="block font-semibold text-sm text-black">
                            {ind + 1}
                          </p>
                        </td>
                        <td className="p-4 py-5 border border-r max-w-[450px]">
                          <p className="block font-semibold text-sm text-black">
                            {el.name}
                          </p>
                        </td>

                        <td className="p-4 py-5 border border-r">
                          <p className=" font-semibold text-sm text-black flex items-center justify-center gap-4">
                            <Link to={`/edit-menu-category/${el._id}`}>
                              <button className="px-4 py-1 text-sm font-medium text-white bg-green-900 rounded">
                                Edit
                              </button>
                            </Link>
                            <button
                              className="px-2 py-1 text-sm font-medium text-white bg-deleteButton rounded"
                              onClick={() => {
                                setShow(true);
                                setId(el._id);
                              }}
                            >
                              Delete
                            </button>
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex justify-between items-center px-4 py-3">
                  <div className="text-sm text-black">
                    Showing <b>1-5</b> of 45
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                      Prev
                    </button>
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                      1
                    </button>
                    {/* <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                2
              </button>
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                3
              </button> */}
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
