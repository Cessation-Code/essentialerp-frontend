import React from "react";
import AuthenticatedLayout from "../../../components/layouts/authenticated_layout/authenticated_layout";

const Employees = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Edem Jonathan",
    email: "unreshablekhon@example.com",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Kwame Koranteng",
    email: "kkopoku@example.com",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Big Chungus",
    email: "bigchungus@example.com",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
    name: "Dr. Nunoo",
    email: "drnunoo@example.com",
  },
];
const Manage_HR = () => {
  return (
    <AuthenticatedLayout>
      <div className="max-w-screen max-h-screen p-4 mt-16 mx-10 border-4 rounded-3xl">
        <div className="items-start justify-between sm:flex">
          <div>
            <h4 className="text-gray-800 text-xl font-semibold">Employees</h4>
            <p className="mt-2 text-gray-600 text-base sm:text-sm">
              Manage your employees access to the system.
            </p>
          </div>
          <button
          onClick={() => {
            
          }}
            href="javascript:void(0)"
            className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            New member
          </button>
        </div>
        <ul className="mt-12 divide-y">
          {Employees.map((item, idx) => (
            <li key={idx} className="py-5 flex items-start justify-between">
              <div className="flex gap-3">
                <img
                  src={item.avatar}
                  className="flex-none w-12 h-12 rounded-full"
                />
                <div>
                  <span className="block text-sm text-gray-700 font-semibold">
                    {item.name}
                  </span>
                  <span className="block text-sm text-gray-600">
                    {item.email}
                  </span>
                </div>
              </div>
              <button
              onClick={() => {
                
              }}
                href="javascript:void(0)"
                className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100"
              >
                Manage
              </button>
            </li>
          ))}
        </ul>
      </div>
    </AuthenticatedLayout>
  );
};

export default Manage_HR;
