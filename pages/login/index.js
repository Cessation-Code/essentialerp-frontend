import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo01 from "../../public/icons/login_page/loginicon01";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();


  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      email: email,
      password: password
    }

    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/loginOrganisation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const responseData = await response.json();

      if (response.status == 200) {
        router.push({
          pathname: 'dashboard',
          query: { from: 'LoginPage', additionalData: [responseData.organisation.organisation_name, responseData.organisation.email] }
        })
      } else {
        setError("Invalid Credentials")
      }
    } catch (error) {
      setError("An error occured, kindly try again");
    }

  };


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
          <div>Login with Company Email</div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-sm p-6">
          <div className="mb-4">
            <label htmlFor="email" className="text-xs font-medium mb-2">
              Company Email:
            </label>
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
            <label htmlFor="password" className="text-xs font-medium mb-2">
              Password:
            </label>
            <div>
              <label htmlFor="password"></label>
              <input className="px-3"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button type="button" className="text-xs font-medium mb-2" onClick={togglePasswordVisibility}>
                &nbsp;&nbsp;&nbsp;{showPassword ? "Hide " : "Show "} Password
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-center text-red-600">
            {error && <div>{error}</div>}
          </div>

          <div className="flex flex-row justify-center pt-5">
            <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-600">
              Login
            </button>
          </div>
          <div className="flex flex-row justify-center pt-5">
            Don't have an account? &nbsp;{" "}
            <Link className="text-[#6C63FF] underline" href="signup">
              Sign Up!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
