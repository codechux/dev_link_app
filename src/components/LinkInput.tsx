import React from "react";
import { FaGithub } from "react-icons/fa";

interface LinkInputProps {
  index: number;
  removeLink: (index: number) => void;
}

const LinkInput: React.FC<LinkInputProps> = ({ index, removeLink }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-md mb-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold text-gray-700">Link #{index + 1}</h4>
        <button className="text-red-500" onClick={() => removeLink(index)}>
          Remove
        </button>
      </div>
      <div className="flex items-center bg-white p-2 border border-gray-300 rounded-md mb-2">
        <FaGithub className="text-gray-500" />
        <select className="w-full ml-2 bg-transparent focus:outline-none">
          <option>GitHub</option>
          <option>LinkedIn</option>
          <option>Twitter</option>
        </select>
      </div>
      <input
        type="url"
        placeholder="e.g. https://www.github.com/johnappleseed"
        className="w-full bg-white p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default LinkInput;
