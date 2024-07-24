"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

const LinkInput: React.FC<{
  index: number;
  removeLink: (index: number) => void;
}> = ({ index, removeLink }) => {
  return (
    <div className="bg-white p-4 rounded-lg mb-4 border border-gray-300">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-gray-700">Link #{index + 1}</span>
        <button className="text-red-500" onClick={() => removeLink(index)}>
          Remove
        </button>
      </div>
      <div className="flex items-center mb-2">
        <FaGithub className="mr-2 text-gray-500" />
        <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none">
          <option>GitHub</option>
          <option>LinkedIn</option>
          <option>Twitter</option>
        </select>
      </div>
      <input
        type="url"
        placeholder="e.g. https://www.github.com/johnappleseed"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

const AddLink: React.FC = () => {
  const [links, setLinks] = useState<number[]>([]);

  const addLink = () => {
    setLinks([...links, links.length]);
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="w-2/3 bg-white px-6 py-4">
      <h2 className="text-2xl font-bold">Customize your links</h2>
      <p className="text-gray-600">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button
        className="my-4 px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white w-full"
        onClick={addLink}
      >
        + Add new link
      </button>

      {links.length === 0 ? (
        <div className="bg-[#FAFAFA] rounded-lg p-8 text-center h-[450px]">
          <Image
            src="/images/started.svg"
            alt="Get Started"
            className="mx-auto mb-4"
            width={250}
            height={160}
          />
          <h3 className="text-xl font-bold mb-2">Let&apos;s get you started</h3>
          <p className="text-gray-600">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      ) : (
        links.map((_, index) => (
          <LinkInput key={index} index={index} removeLink={removeLink} />
        ))
      )}

      <div className="flex border-t-2 pt-4 justify-end mt-4">
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddLink;
