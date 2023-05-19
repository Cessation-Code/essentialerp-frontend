import React, { useState } from "react";

import Logo01 from "../public/icons/loginPage/loginicon01";
import Link from "next/link";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="password"></label>
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        className="text-xs font-medium mb-2"
        onClick={togglePasswordVisibility}
      >
        &nbsp;&nbsp;&nbsp; {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      // Simulating authentication API request
      const response = await loginAPI(email, password);

      // Check authentication response
      if (response.success) {
        // Redirect to dashboard or update state for successful login
        // For example:
        // setLoggedIn(true);
        // history.push("/dashboard");
      } else {
        // Handle authentication failure
        setError(response.message);
      }
    } catch (error) {
      // Handle API request errors
      setError("An error occurred. Please try again later.");
    }
  };

  const loginAPI = (email, password) => {
    // Simulating authentication API request
    return new Promise((resolve, reject) => {
      // Simulating server response
      setTimeout(() => {
        if (email === "example@example.com" && password === "password") {
          resolve({ success: true, message: "Login successful." });
        } else {
          resolve({ success: false, message: "Invalid credentials." });
        }
      }, 1000);
    });
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
            <PasswordInput />
          </div>
          {error && <div>{error}</div>}

          <div className="flex flex-row justify-center pt-5">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
          <div className="flex flex-row justify-center pt-5">
            Don't have an account? &nbsp;{" "}
            <Link classname="text-[#6C63FF] underline" href="/signup">
              Sign Up!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
