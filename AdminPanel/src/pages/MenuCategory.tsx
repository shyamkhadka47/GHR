
import { Link } from 'react-router-dom';
import CustomTable from '../components/Tables/CustomTable';
import { useCheckLocalColor } from '../hooks/useCheckLocalColor';

const MenuCategory = () => {
  const { color } = useCheckLocalColor();

  const columns = [{ key: 'categoryname', title: 'Name of Category' }];

  const data = [
    { categoryname: 'Fish' },
    { categoryname: 'Mutton' },
    { categoryname: 'Chicken' },
    { categoryname: 'Buff' },
    { categoryname: 'Momo' },
  ];

  return (
    <div>
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
            <CustomTable
              heading={`View All Menu Category`}
              column={columns}
              data={data}
              editbutton="Edit"
              deletebutton="Delete"
            />
            {/* <TableTwo
            heading={`View All MenuCategory's`}
           
            title1={'Question '}
           
            title3="Answers"
            editbutton='Edit'
            deletebutton='Delete'
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
