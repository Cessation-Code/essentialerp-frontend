import { useSelector } from 'react-redux';

export const Budget = (props) => {
  const { data, loading, error } = useSelector((state) => state.data);
  
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div className="shadow-md rounded-lg h-full bg-red-500" {...props}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-500 text-xs uppercase">Asset in Cash</p>
          <h4 className="text-black text-2xl">{data?.capital}</h4>
        </div>
        <div className="flex justify-end">
          <div className="bg-primary-main h-14 w-14 flex items-center justify-center">
            <i className="text-white w-6 h-6 ri-money-dollar-circle-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
