import React from 'react';
import { useState } from 'react';
import Modal from '../../../components/layouts/modal_layout';

const ChangePasswordModal = ({ onClose, employee }) => {

    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    async function handleSubmit(employee_id) {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/v1/employee/changePassword', {
                // const response = await fetch('https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/product/createProduct', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    employee_id: employee_id,
                    password: password,
                })
            })
            if (response.ok) {
                setError("Password Changed Successfully!");
                setIsLoading(false);
                onClose();
            } else if (response.status === 401){
                setError("You are not authorized to perform this action!");
                setIsLoading(false);
            } else {
                setError(response.message);
                setIsLoading(false);
            }
        } catch (error) {
            setError("An Error Occured whiles changing password!");
            setIsLoading(false);
        }
    }

    return (
        <Modal header={'Change Password'} closeModal={onClose}>
            <div className='flex flex-col'>
                <label className='text-xs mb-1 text-gray-400'>Type New Password</label>
                <input
                    type='text'
                    id='newPassword'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full h-6 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm outline-none text-gray-700 px-3 transition-colors duration-200 ease-in-out'
                />
                {error && <p className='text-red-500 text-xs mt-2'>{error}</p>}
                {!isLoading && (<button type='submit' className='bg-indigo-500 text-white rounded-md px-4 py-2 mt-4 btn-sm' onClick={() => {
                    handleSubmit(employee)
                }}>Change Password</button>)}
            </div>
        </Modal>
    )
}

export default ChangePasswordModal;