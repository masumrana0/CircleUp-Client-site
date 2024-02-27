import React, { useState } from "react";
import { FaPencil, FaPhotoFilm, FaVideo } from "react-icons/fa6";

const PostInputField = () => {
  const [inputStatus, setInputStatus] = useState(1);
  return (
    <div className=" bg-gray-50   h-[150px] rounded-xl border-2 overflow-hidden">
      <div className="w-[100%] text-xl  text-center flex justify-center  items-center   ">
        <div className={`w-[33.4%] flex justify-center `}>
          <button className="flex items-center gap-1">
            <FaPencil />
            <h3>Publish</h3>
          </button>
        </div>

        <div className="   bg-gray-300  shadow py-1 border-3 w-[66.7%] flex justify-center ">
          <div className="w-1/2   flex  justify-center    ">
            <button className=" flex  items-center gap-1">
              <FaPhotoFilm />
              <h3>Albums</h3>
            </button>
          </div>
          <div className="w-1/2   flex  justify-center     ">
            <button className="flex  items-center gap-1 ">
              <FaVideo />
              <h3>Video</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInputField;
