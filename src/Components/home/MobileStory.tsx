import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

type IProps = {
  name: string;
  me?: boolean;
};

const MobileStory = ({ name, me }: IProps) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="relative w-12 h-12 rounded-full border-2  border-purple-700 flex justify-center items-center">
        {me ? (
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-400">
            <IoMdAddCircleOutline className="text-2xl text-white" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full  bg-gray-400"></div>
        )}
      </div>

      <p className="text-sm">{name}</p>
    </div>
  );
};

export default MobileStory;
