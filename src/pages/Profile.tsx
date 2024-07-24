"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import LoadingUI from "@/components/LoadingUI";
import { db } from "@/app/firebase/config";
import { collection, addDoc } from "firebase/firestore";

const ProfileDetails: React.FC = () => {
  // State variables for form inputs
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Save data to Firestore
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        profilePic: profilePic,
      };
      console.log(data);

      await addDoc(collection(db, "profiles"), data);
      console.log(data);

      // Optionally, reset the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setProfilePic(null);

      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="m-6">
      <Header />
      <div className="flex gap-4 mt-4">
        <LoadingUI />
        <div className="w-2/3 bg-white p-6">
          <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
          <p className="text-gray-600 mb-6">
            Add your details to create a personal touch to your profile.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-6 bg-[#FAFAFA] justify-between p-6">
              <label>Profile picture</label>
              <div className="flex items-center gap-10">
                <div className="w-[193px] h-[193px] bg-[#EFEBFF] border border-gray-300 rounded flex flex-col items-center justify-center mb-2">
                  {profilePic ? (
                    <Image
                      src={profilePic}
                      alt="Profile Picture"
                      className="rounded-full"
                      width={193}
                      height={193}
                    />
                  ) : (
                    <Image
                      src="/images/upload-placeholder.svg"
                      alt="Upload Placeholder"
                      width={40}
                      height={40}
                    />
                  )}
                  {!profilePic && (
                    <label
                      htmlFor="profile-pic-upload"
                      className="text-[#633CFF] font-semibold cursor-pointer"
                    >
                      + Upload Image
                    </label>
                  )}
                  <input
                    type="file"
                    id="profile-pic-upload"
                    className="hidden"
                    onChange={handleProfilePicChange}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-left">
                Image must be below 1024x1024px. <br />
                Use PNG or JPG format.
              </p>
            </div>
            <div className="bg-[#FAFAFA] p-6 flex flex-col gap-4 ">
              <div className="flex items-center justify-between">
                <label className="block text-gray-600 mb-1">First name*</label>
                <input
                  type="text"
                  placeholder="e.g. John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border w-[550px] border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="block text-gray-600 mb-1">Last name*</label>
                <input
                  type="text"
                  placeholder="e.g. Appleseed"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border w-[550px] border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="e.g. email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border w-[550px] border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-[#633CFF] text-white px-6 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
