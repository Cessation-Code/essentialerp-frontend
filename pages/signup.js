import React from "react";
import { useState } from 'react'

import Logo01 from "../public/icons/signupPage/signupicon01";

export default function SignUpPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('');
    const [error, setError] = useState(null);

    if (status === 'success') {
        console.log("Hello Motherfucker");
      }

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(email);
            setStatus('success');
        } catch (error) {
            setStatus('typing');
            setError(error);
        }
        // console.log("Hello Motherfucker");
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

            <div className="flex flex-row justify-center text-center pt-5">
                <div className="flex flex-col">
                    <div>
                        Create an account with email
                    </div>
                    <div>
                        Already have an account? Login
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center pt-5">

                <form onSubmit={handleSubmit} className="w-full max-w-sm p-6">

                    <div className="mb-4">
                        <label htmlFor="email" className="text-xs font-medium mb-2">Email:</label>
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

                    <div className="flex flex-row justify-center text-sm">I agree with the&nbsp;<div className="font-bold text-[#7622FF] underline">Terms and Conditions</div></div>

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