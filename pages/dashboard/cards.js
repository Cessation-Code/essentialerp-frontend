import React from 'react'


const Card = ({ title, value, percent, extra, main, size }) => {
    const { width, height } = size;

  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className=" bg-gray-200 rounded-xl shadow-md" >
      <div className="flex flex-col justify-center items-start p-5">
        <p className=" font-normal text-sm  mb-4 ">{title}</p>
        <p
          className={`${
            main
              ? "text-4xl font-bold text-zinc-900"
              : "font-normal text-base text-[#929292]"
          }`}
        >{value}
          
          
        </p>
        <div className="flex flex-row justify-center items-center">
          <div className=" bg-[#DCFFF5] rounded-xl px-4 py-2 my-36">
            <p className="text-xs text-[#20C997] font-semibold">{percent}</p>
          </div>
          {extra && (
            <div className="rounded-2xl px-2 py-1 my-5">
              <p className="text-xs text-gray-500 font-semibold">{extra}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card