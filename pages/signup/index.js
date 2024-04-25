import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UnauthenticatedLayout from "../../components/layouts/unauthenticated_layout/unauthenticated_layout";
import Logo from "../../components/logo";
import LoadingSpinner from "../../components/loadingSpinner";

export default function SignUpPage() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [stage, setStage] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isChecked) {
      setError("Agree with terms and conditions to proceed");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setLoading(true);

      const registerData = {
        organisation_name: companyName,
        email: email,
        password: password,
        phone_number: phone_number,
        firstName: firstName,
        lastName: lastName,
      };

      try {
        const response = await fetch(
          "https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/auth/registerOrganisation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
          }
        );
        const responseData = await response.json();
        if (response.status == 201) {
          // save token in local storage
          console.log(responseData);
          localStorage.setItem("token", responseData.token);
          localStorage.setItem(
            "username",
            responseData.employee.firstName + " " + responseData.employee.lastName
          );
          localStorage.setItem("organisation", responseData.employee.organisation_name);
          router.push({
            pathname: "dashboard",
            query: {
              prop1: responseData.employee.firstName,
              prop2: responseData.employee.lastName,
              prop3: responseData.employee.organisation_name,
            },
          });
        } else {
          setError(responseData.message);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
  }

  const handleNextStage = () => {
    if(!companyName || !email || !password || !confirmPassword){
      setError("Please fill in all the fields.");
      return;
    }else if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    } else {
      setStage(stage + 1);
    }
  };

  const handlePreviousStage = () => {
    setStage(stage - 1);
  };

  return (
    <UnauthenticatedLayout>
      <div className="flex flex-col h-screen w-full justify-center items-center bg-[#C4D7F8] min-h-screen">

        <div className="flex flex-col justify-center items-center bg-[#E4EFFF] rounded-xl p-10">

          <div className="flex flex-row justify-center">
            <Logo />
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
            {/* form starts here, in scaffolded in this row */}
            <form onSubmit={handleSubmit} className="w-full max-w-sm p-6">
              {/* first stage form */}
              {stage === 1 && (
                <div>
                  <div className="mb-4">
                    <label htmlFor="text" className="text-xs font-medium mb-2">
                      Company Name:
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className="w-full px-3 py-1 border border-gray-400 rounded h-7"
                      value={companyName}
                      onChange={(event) => {setCompanyName(event.target.value); setError("")}}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="text-xs font-medium mb-2">
                      Company Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-1 border border-gray-400 rounded h-7"
                      value={email}
                      onChange={(event) =>{ setEmail(event.target.value); setError("")}}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="text-xs font-medium mb-2"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-1 border border-gray-400 rounded h-7"
                      value={password}
                      onChange={(event) => {setPassword(event.target.value); setError("")}}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="text-xs font-medium mb-2"
                    >
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="w-full px-3 py-1 border border-gray-400 rounded h-7"
                      value={confirmPassword}
                      onChange={(event) => {
                        setConfirmPassword(event.target.value)
                        setError("")
                      }}
                      minLength={5}
                      required
                    />
                  </div>
                </div>
              )}

              {/* next stage form */}
              {stage === 2 && (
                <div>
                  <div className="flex flex-row mb-4 gap-4">
                    <div>
                      <label htmlFor="text" className="text-xs font-medium mb-2">
                        First Name:
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-1 border border-gray-400 rounded h-7"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="text" className="text-xs font-medium mb-2">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-1 border border-gray-400 rounded h-7"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div>
                      <label htmlFor="text" className="text-xs font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone_number"
                        className="w-full px-3 py-1 border border-gray-400 rounded h-7"
                        value={phone_number}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center text-sm">
                    <input
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      id="checkbox-1"
                      className="ml-2 text-xs font-medium text-gray-900"
                    >
                      I agree with the{" "}
                      <Link
                        href="terms_and_conditions"
                        className="text-[#7622FF] underline"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
              )}

              {/* error code block */}
              <div className="flex flex-row text-center justify-center text-xs font-semibold text-red-500 mb-4">
                {error}
              </div>

              <div className="flex flex-row justify-center">
                {/* show continue button on stage 1 */}
                {stage === 1 && (
                  <button type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => {
                      handleNextStage()
                    }}
                  >
                    Continue
                  </button>
                )}

                {/* show create account and previous button on stage 2 */}
                {stage === 2 && (
                  <div className="relative">
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <LoadingSpinner />
                      </div>
                    )}

                    <div
                      className={`${loading ? "invisible" : "visible"
                        } flex flex-row gap-5`}
                    >
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Create Account
                      </button>

                      <button
                        className="px-4 py-2 bg-red-700 text-white rounded hover:bg-green-600"
                        onClick={handlePreviousStage}
                      >
                        Previous
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>        </div>
      </div>
    </UnauthenticatedLayout>
  );
}
