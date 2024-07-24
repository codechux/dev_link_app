import AddLink from "@/components/AddLink";
import Header from "@/components/Header";
import LoadingUI from "@/components/LoadingUI";
import React from "react";

const LinkPage: React.FC = () => {
  return (
    <div className="m-6">
      <Header />
      <div className="flex gap-4 mt-4">
        <LoadingUI />
        <AddLink />
      </div>
    </div>
  );
};
export default LinkPage;
