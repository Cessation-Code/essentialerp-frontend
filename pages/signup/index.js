import React from "react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Logo01 from "../../public/icons/signup_page/signupicon01";

export default function SignUpPage() {
  const [com_name, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  if (status === "success") {
    console.log("Hello Motherfucker");
  }

  async function handleSubmit(event) {

    event.preventDefault();

    if (!isChecked) {
      setError('Agree with terms and conditions to proceed')
      return
    }

    if (password !== confirm_password) {
      setError("Passwords do not match.");
    } else {
      setError(null);
    }

    const registerData = {
      organisation_name: com_name,
      email: email,
      password: password
    }

    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/registerOrganisation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      const responseData = await response.json();
      if(response.status == 201){
        router.push({
          pathname: 'dashboard',
          query: { from: 'LoginPage', additionalData: [responseData.organisation.name, responseData.organisation.email] }
        })
      }else{
        setError(responseData.message)
      }
    } catch (error) {
      console.error('Error:', error);
    }

  }

  return (
    <div className="bg-[#C4D7F8] h-screen">
      <div className="flex flex-row pt-5">
        <div className="basis-1/5 z-50 text-center">
          <a className="text-lg font-semibold text-white">Essential</a>
          <a className="text-xl font-semibold text-[#022568]">ERP</a>
        </div>
      </div>

      <div className="flex flex-row justify-center pt-16">
        <Logo01 />
      </div>

      <div className="flex flex-row justify-center text-center pt-5 text-sm">
        <div className="flex flex-col">
          <div>Create an account with email</div>
          <div>
            Already have an account?{" "}
            <Link className="text-[#3e399c] underline" href={"/login"}>
              Login
            </Link>
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
              className="w-full px-3 py-1 border border-gray-400 rounded h-7"
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
              className="w-full px-3 py-1 border border-gray-400 rounded h-7"
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
              className="w-full px-3 py-1 border border-gray-400 rounded h-7"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={5}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-xs font-medium mb-2">Confirm Password:</label>
            <input
              type="password"
              id="confirm_password"
              className="w-full px-3 py-1 border border-gray-400 rounded h-7"
              value={confirm_password}
              onChange={(event) => setConfirmPassword(event.target.value)}
              minLength={5}
              required
            />
          </div>

          <div className="flex flex-row justify-center text-sm">
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label id="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-black dark:hover:text-300">
              I agree with the{" "}
              <Link href="terms_and_conditions" className="text-[#7622FF] underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <div className="flex flex-row text-center justify-center text-sm text-red-500 mb-4">
            {error}
          </div>

          <div className="flex flex-row justify-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Create Account
            </button>
          </div>

        </form>

      </div>


    </div>
  )
}