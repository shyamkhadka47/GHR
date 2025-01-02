const Modal = ({ setshow, id, handleDelete }: any) => {
  return (
    <div className="w-[500px] h-[200px] absolute  translate-x-[50%] translate-y-[60%] z-9999 bg-blue-950 rounded-md flex flex-col items-center justify-center gap-5 shadow ">
      <div className="text-white capitalize text-[25px] font-bold">
        are you sure! Want to delete
      </div>
      <div className="flex justify-center items-center gap-3">
        <button
          className="p-3 rounded-md bg-green-600 text-white font-bold"
          onClick={() => setshow(false)}
        >
          Cancel
        </button>
        <button
          className="p-3 rounded-md bg-red-900 text-white font-bold"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Modal;
