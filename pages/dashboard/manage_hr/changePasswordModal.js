import React from 'react';
import { useState } from 'react';
import Modal from '../../../components/layouts/modal_layout';

const [error, setError] = useState('');


async function handleSubmit(employee_id) {
    console.log(employee_id);
    try{
        const response = await fetch('http:localhost:8000/api/v1/employee/changePassword', {
            // const response = await fetch('https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/product/createProduct', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                employee_id: employee_id,
            })
        })
    } catch (error) {
        setError("An Error Occured whiles creating expense!");
    }
}


const ChangePasswordModal = ({ onClose, employee }) => {
    return (
        <Modal header={'Change Password'} closeModal={onClose}>
            <div className='flex flex-col'>
                <label className='text-xs mb-1 text-gray-400'>Type New Password</label>
                <input
                    type='text'
                    id='newPassword'
                    className='w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out'
                />
                <button type='submit' className='bg-indigo-500 text-white rounded-md px-4 py-2 mt-4 btn-sm' onClick={handleSubmit(employee)}>Change Password</button>
            </div>
            <div className='flex flex-col'>
                {error && <p className='text-red-500 text-xs mt-2'>{error}</p>}
            </div>
        </Modal>
    )
}

export default ChangePasswordModal;