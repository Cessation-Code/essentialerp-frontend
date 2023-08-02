import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import UnauthenticatedLayout from "../../components/layouts/unauthenticated_layout/unauthenticated_layout";
import LoadingSpinner from "../../components/loadingSpinner";
import Logo from "../../components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (response.status == 200) {
        // save token in local storage
        localStorage.setItem("token", responseData.token);
        localStorage.setItem(
          "username",
          responseData.employee.first_name + " " + responseData.employee.last_name
        );
        localStorage.setItem("organisation", responseData.employee.organisation_name);
        // route to dashboard page
        router.push({
          pathname: "dashboard",
          query: {
            prop1: responseData.employee.first_name,
            prop2: responseData.employee.last_name,
            prop3: responseData.employee.organisation_name,
          },
        });
      } else {
        setError("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred, kindly try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UnauthenticatedLayout>
      <div className="flex flex-col h-screen w-full justify-center items-center bg-[#C4D9F8]">
        <div className="flex flex-col justify-center items-center bg-[#E4EFFF] rounded-xl p-10">
          <div className="flex flex-row justify-center items-center">
            <Logo />
          </div>
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
              <div className="flex justify-between gap-2">
                <label htmlFor="password"></label>
                <input
                  className="px-3 py-1 w-full"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  
                />
                <button type="button" className="text-xs font-medium mb-2" onClick={togglePasswordVisibility}>
                  &nbsp;&nbsp;&nbsp;{showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/> } 
                  
                  
                </button>
              </div>
            </div>

            <div className="flex flex-row justify-center font-semibold text-xs text-red-600">
              {error && <div>{error}</div>}
            </div>

            <div className="flex flex-row justify-center pt-5">
              {loading ? (
                <LoadingSpinner />
              ) : (
                <button type="submit" className="px-5 py-1 bg-indigo-500 text-white text-sm rounded hover:bg-blue-600">
                  Login
                </button>
              )}
            </div>
            <div className="flex flex-row justify-center pt-5 text-sm">
              Don't have an account? &nbsp;{" "}
              <Link className="text-[#6C63FF] underline" href="signup">
                Sign Up!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </UnauthenticatedLayout>
  );
}
