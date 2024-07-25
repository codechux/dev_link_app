import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/Profile-dp.png";
import { AiTwotoneMail } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { TiArrowRight } from "react-icons/ti";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="max-w-[1440px] m-auto pb-[450px]">
      <div className="bg-btn border rounded-b-[32px] h-[357px]">
        <nav className="m-6 p-4 pl-6 bg-white flex justify-between">
          <button className="border border-btn font-semibold rounded-lg py-[11px] px-[27px] text-btn">
            <Link href="/devlink">Back to Editor</Link>
          </button>
          <button className="font-semibold rounded-lg py-[11px] px-[27px] text-white bg-btn">
            Share Link
          </button>
        </nav>

        <div className="text-center my-[78px] m-auto py-12 px-[56px] rounded-[24px] shadow-box bg-white w-[349px]">
          <div className="flex items-center flex-col gap-[56px]">
            <div className="flex items-center flex-col gap-[25px]">
              <Image
                src={profilePic}
                alt="Profile Picture"
                className="rounded-lg border-btn"
              />
              <div>
                <h1 className="text-[32px] text-heading font-bold">
                  Ben Wright
                </h1>
                <p className="text-[#737373]">ben@example.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="bg-[#1A1A1A] rounded-radius p-4 flex items-center justify-between">
                <div className="gap-1 text-white flex items-center">
                  <PiGithubLogoFill className="" />
                  <p>GitHub</p>
                </div>
                <TiArrowRight className="text-white" />
              </div>

              <div className="flex items-center justify-between bg-youtube rounded-radius w-full p-4">
                <div className="gap-1 text-white flex items-center">
                  <FaYoutube className="" />
                  <p>Youtube</p>
                </div>
                <TiArrowRight className="text-white" />
              </div>

              <div className="flex items-center justify-between bg-[#2D68FF] rounded-radius w-full p-4">
                <div className="gap-1 text-white flex items-center">
                  <FaLinkedin className="" />
                  <p>Linkedin</p>
                </div>
                <TiArrowRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
