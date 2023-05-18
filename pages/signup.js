import React from "react";
import { useState } from 'react'
import Link from "next/link";

import Logo01 from "../public/icons/signupPage/signupicon01";

export default function SignUpPage() {
    const [com_name, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    if (status === 'success') {
        console.log("Hello Motherfucker");
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // setStatus('submitting');
        // try {
        //     await submitForm(email);
        //     setStatus('success');
        // } catch (error) {
        //     setStatus('typing');
        //     setError(error);
        // }


        if (!com_name || !email || !password || !confirm_password) {
            setError("Please fill out all fields.");
            return;
        }

        if (password !== confirm_password) {
            setError("Passwords do not match.");
            return;
        }

        // continue with account creation

    }

    return (
        <div className="bg-[#C4D7F8] h-screen">

            <div className="flex flex-row pt-5">
                <div className='basis-1/5 z-50 text-center'>
                    <a className='text-lg font-semibold text-white'>Essential</a>
                    <a className='text-xl font-semibold text-[#022568]'>ERP</a>
                </div>
            </div>

            <div className="flex flex-row justify-center pt-16">
                <Logo01 />
            </div>

            <div className="flex flex-row justify-center text-center pt-5 text-sm">
                <div className="flex flex-col">
                    <div>
                        Create an account with email
                    </div>
                    <div>
                        Already have an account? Login
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center">

                <form onSubmit={handleSubmit} className="w-full max-w-sm p-6">
                    <div className="mb-4">
                        <label htmlFor="text" className="text-xs font-medium mb-2">Company Name:</label>
                        <input
                            type="text"
                            id="com_name"
                            className="w-full px-3 py-1 border border-gray-400 rounded"
                            value={com_name}
                            onChange={(event) => setCompanyName(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-xs font-medium mb-2">Company Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-1 border border-gray-400 rounded"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-xs font-medium mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-1 border border-gray-400 rounded"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-xs font-medium mb-2">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm_password"
                            className="w-full px-3 py-1 border border-gray-400 rounded"
                            value={confirm_password}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-row justify-center text-sm">I agree with the&nbsp;
                        <Link href="terms-and-conditions">
                            <div className="text-[#7622FF] underline">Terms and Conditions</div>
                        </Link>
                    </div>

                    <div className="flex flex-row justify-center text-sm text-red-500 mb-4">{error}</div>

                    <div className="flex flex-row justify-center pt-5">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Create Account
                        </button>
                    </div>

                </form>

            </div>



        </div>
    )
}

function submitForm(email) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = email.toLowerCase() !== 'kk.opoku@outlook.com'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
                console.log("wrong mf")
            } else {
                resolve();
            }
        }, 1500);
    });
}