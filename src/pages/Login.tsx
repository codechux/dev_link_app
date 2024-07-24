"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "/public/images/logo.png"; // Ensure this path is correct
import { AiFillMail } from "react-icons/ai";
import { IoIosUnlock } from "react-icons/io";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [userSignIn, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors before validation
    setErrors({});

    // Basic validation
    let formErrors: { [key: string]: string } = {};
    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const res = await userSignIn(email, password);
      console.log("User signed in:", res);
      setEmail("");
      setPassword("");
      router.push("/devlink"); // Redirect to the desired page after successful login
    } catch (err) {
      console.error("Login error:", err);
      setErrors((prevErrors) => ({
        ...prevErrors,
        server: "Failed to login. Please check your credentials.",
      }));
    }
  };

  return (
    <>
      <Head>
        <title>Login - Devlinks</title>
      </Head>
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
        <div className="flex justify-center mb-10 md:mb-16">
          <Image src={Logo} alt="Devlinks Logo" width={150} height={150} />
        </div>
        <div className="w-full max-w-md p-6 md:p-8 bg-white border border-gray-300 rounded-md shadow-md">
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333] leading-tight md:leading-[70px]">
              Login
            </h2>
            <p className="text-sm md:text-[16px] text-[#737373]">
              Add your details below to get back into the app
            </p>
          </div>
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
                  placeholder="eg. alex@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#633CFF] focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block mb-1 text-sm md:text-[12px] font-medium text-[#333333]"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoIosUnlock className="text-[#737373]" />
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#633CFF] focus:border-transparent"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
            </div>
            {errors.server && (
              <p className="text-red-500 text-center text-sm mb-4">
                {errors.server}
              </p>
            )}
            <button
              type="submit"
              className={`w-full py-2 px-4 text-white bg-[#633CFF] rounded-md shadow-md hover:bg-[#5333CC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#633CFF] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!!loading}
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-center text-sm md:text-base text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#633CFF] hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
