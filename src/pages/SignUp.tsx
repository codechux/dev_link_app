"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { AiFillMail } from "react-icons/ai";
import { IoIosUnlock } from "react-icons/io";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const CreateAccountPage: React.FC = () => {
  // State variables for form inputs and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [createUser, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let formErrors: { [key: string]: string } = {};

    // Basic validation checks
    if (!email) {
      formErrors.email = "Email is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long";
    }
    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    // If there are errors, update the state and return
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Proceed with form submission logic if validation passes
    try {
      const res = await createUser(email, password);
      if (res?.user) {
        console.log("Account created successfully", res.user);
        // Reset form and errors after successful submission
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors({});
        router.push("/devlink");
      } else {
        console.log("Unexpected response", res);
        setErrors({
          general: "An unexpected error occurred. Please try again.",
        });
      }
    } catch (error: any) {
      console.error(error);

      if (error.message) {
        setErrors({ ...errors, general: error.message });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Create Account - Devlinks</title>
      </Head>
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo.png"
            alt="Devlinks Logo"
            width={150}
            height={150}
          />
        </div>
        <div className="w-full max-w-md p-6 md:p-8 bg-white border border-gray-300 rounded-md shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333] leading-tight md:leading-[70px]">
            Create account
          </h2>
          <p className="text-sm md:text-[16px] text-[#737373] mb-6 md:mb-8">
            Let’s get you started sharing your links!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-1 text-sm md:text-[12px] font-medium text-[#333333]"
                htmlFor="email"
              >
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AiFillMail className="text-[#737373]" />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. alex@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#633CFF] focus:border-transparent`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-sm md:text-[12px] font-medium text-[#333333]"
                htmlFor="create-password"
              >
                Create password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoIosUnlock className="text-[#737373]" />
                </div>
                <input
                  type="password"
                  id="create-password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-10 px-3 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#633CFF] focus:border-transparent`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-1 text-sm md:text-[12px] font-medium text-[#333333]"
                htmlFor="confirm-password"
              >
                Confirm password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoIosUnlock className="text-[#737373]" />
                </div>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="At least 8 characters"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full pl-10 px-3 py-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#633CFF] focus:border-transparent`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
            {errors.general && (
              <p className="text-red-500 text-xs mt-1">{errors.general}</p>
            )}
            <p className="block text-sm md:text-[12px] font-medium text-[#737373] my-5">
              Password must contain at least 8 characters
            </p>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-[#633CFF] rounded-md shadow-md hover:bg-[#633CFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#633CFF]"
              disabled={!!loading}
            >
              {loading ? "Creating account..." : "Create new account"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-[#737373]">
            Already have an account?{" "}
            <Link href="/" className="text-[#633CFF] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CreateAccountPage;
