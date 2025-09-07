/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Link } from 'react-router-dom';
import { useCheckLocalColor } from '../hooks/useCheckLocalColor';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import axiosInstance from '../hooks/axiosConfig';
import Modal from '../components/Modal';

const OurTeams = () => {
  const { color } = useCheckLocalColor();
  const [data, setData] = React.useState<any[]>([]);
  const [id, setId] = React.useState('');
  const [show, setShow] = React.useState(false);
  // const [flag, setFlag] = React.useState(0);

  const columns = [
    { title: 'SN' },
    { title: 'Name' },
    { title: 'Work' },
    { title: 'Image' },
  ];

  const getAllTeams = async () => {
    try {
      const res = await axiosInstance.get('/getallourteam');
      if (res.status === 200) {
        setData(res.data.data);
        toast.success(res.data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || 'Error fetching team data');
        setData([])
      }

    }
  };

  const handleDelete = async (teamId: string) => {
    try {
      const res = await axiosInstance.delete(`/deleteourteam/${teamId}`);
      if (res.status === 200) {
        toast.success(res.data.message);
        setShow(false);
        setId('');
        getAllTeams()
        // setFlag((prev) => prev + 1);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(
          error.response?.data.message || 'Error deleting team member',
        );
      
      }
    }
  };

  React.useEffect(() => {
    getAllTeams();
  }, []);

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
          <div className="bg-transparent text-white w-[200px] font-bold py-4 hover:bg-transparent" />
          <Link to="/add-new-team">
            <button
              className={`${
                color === 'dark' && 'hover:bg-white hover:text-black'
              } bg-green-900 text-white w-[200px] font-bold py-4 hover:bg-transparent hover:border-[2px] hover:border-green-600 hover:text-black absolute right-[0] top-5`}
            >
              Add New Team
            </button>
          </Link>
          <div className="mt-[20px]">
            <div className="max-w-[1020px] mx-auto">
              <div className="w-full flex justify-between items-center mb-5 mt-1 pl-3">
                <div>
                  <h3
                    className={`${
                      color === 'dark' && 'text-white'
                    } text-[25px] font-semibold text-black`}
                  >
                    View All Team Members
                  </h3>
                </div>
              </div>

              <div className="relative flex flex-col w-full h-full overflow-hidden text-black-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                  <thead className="py-4">
                    <tr>
                      {columns.map((col, i) => (
                        <th
                          key={i}
                          className="p-4 border-b border-slate-200 bg-green-900 border-r"
                        >
                          <p className="text-sm font-normal leading-none text-white">
                            {col.title}
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
                    {data && data.length > 0 ? (
                      data.map((member, index) => (
                        <tr
                          key={member._id}
                          className="hover:bg-slate-50 border-b border-slate-200"
                        >
                          <td className="p-4 py-5 border border-r">
                            {index + 1}
                          </td>
                          <td className="p-4 py-5 border border-r max-w-[300px]">
                            <p className="font-semibold text-sm text-black">
                              {member.name}
                            </p>
                          </td>
                          <td className="p-4 py-5 border border-r max-w-[300px]">
                            <p className="font-semibold text-sm text-black">
                              {member.work}
                            </p>
                          </td>
                          <td className="p-4 py-5 border border-r">
                            <div className="w-[50px] h-[50px] flex items-center justify-center">
                              <img
                                src={`${import.meta.env.VITE_BACKEND_URI}/${
                                  member.teamImage
                                }`}
                                className="w-full h-full object-cover rounded-full"
                                alt={member.name}
                              />
                            </div>
                          </td>
                          <td className="p-4 py-5 border border-r">
                            <div className="flex items-center justify-center gap-4">
                              <Link to={`/edit-team/${member._id}`}>
                                <button className="px-4 py-1 text-sm font-medium text-white bg-green-900 rounded">
                                  Edit
                                </button>
                              </Link>
                              <button
                                onClick={() => {
                                  setId(member._id);
                                  setShow(true);
                                }}
                                className="px-2 py-1 text-sm font-medium text-white bg-deleteButton rounded"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={columns.length + 1}
                          className="text-center p-5 text-gray-500"
                        >
                          No team members found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div className="flex justify-between items-center px-4 py-3">
                  <div className="text-sm text-black">
                    Showing <b>1-5</b> of {data && data.length}
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-black bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                      Prev
                    </button>
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                      1
                    </button>
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
    </>
  );
};

export default OurTeams;
