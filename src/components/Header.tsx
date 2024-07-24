"use client";
import React from "react";
import { FaLink } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Devlinks Logo"
          width={150}
          height={150}
        />
      </div>
      <nav className="flex space-x-4">
        <button
          onClick={() => router.push("/devlink")}
          className={`flex items-center py-2 px-4 rounded-md font-semibold ${
            pathname === "/devlink"
              ? "text-[#633CFF] bg-[#EFEBFF]"
              : "text-gray-600"
          }`}
        >
          <FaLink className="mr-2" /> Links
        </button>
        <button
          onClick={() => router.push("/profile")}
          className={`flex items-center py-2 px-4 rounded-md font-semibold ${
            pathname === "/profile"
              ? "text-[#633CFF] bg-[#EFEBFF]"
              : "text-gray-600"
          }`}
        >
          <AiOutlineUser className="mr-2" /> Profile Details
        </button>
      </nav>
      <button className="px-4 py-2 bg-tranparent border-2 border-[#633CFF] font-semibold text-[#633CFF] rounded-md">
        Preview
      </button>
    </header>
  );
};

export default Header;
