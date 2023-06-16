import React, { useState } from 'react';

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    fullname: '',
    salary: '',
    email: '',
    phone: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Employees</h2>
          <p className="text-gray-500">The information can be edited</p>
        </div>
        <hr className="mb-4" />
        <div className="space-y-4">
          <div className="md:w-1/4">
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              ERP
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              value={values.fullname}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            <p className="text-xs text-red-500">Please specify the fullname</p>
          </div>
          <div className="md:w-1/4">
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              id="salary"
              name="salary"
              type="number"
              value={values.salary}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="md:w-1/4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="md:w-1/4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>
        <hr className="mt-4" />
        <div className="flex justify-end py-2">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

const Index = () => {
  return (
    <div>
      <AccountProfileDetails />
    </div>
  );
};

export default Index;
