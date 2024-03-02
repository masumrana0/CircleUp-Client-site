"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FaPencil, FaPhotoFilm, FaVideo, FaX } from "react-icons/fa6";
import { AiTwotoneCamera } from "react-icons/ai";
import { HiFaceSmile } from "react-icons/hi2";
import Avatar from "../shared/Avatar";
import FeedPostCard from "../home/shared/FeedPostCard";
import { useProfileCommonDataQuery } from "@/Redux/api/profileApi";

const PostInputField = () => {
  const [isCollapse, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // redux
  const { data } = useProfileCommonDataQuery(null);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
    ("hello");
  };

  return (
    <div
      onClick={() => setOpen(true)}
      className={`bg-gray-50 shadow     h-[120px]  rounded-xl border-2 overflow-hidden`}
    >
      {/* header  */}
      <div>
        <div className="w-[100%] lg:text-md  text-sm text-center flex justify-center  items-center   ">
          <div className={`w-[33.4%] flex justify-center `}>
            <button className="flex items-center gap-1">
              <FaPencil />
              <h3>Publish</h3>
            </button>
          </div>

          <div className=" bg-gray-300  shadow py-1 border-3 w-[66.7%] flex justify-center ">
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

        <div
          className="p-5 flex items-center   "
          onClick={() => setCollapse(true)}
        >
          <Avatar src={data?.profilePicture} />
          <div className="w-full">
            <form>
              <input
                name="commentbox"
                className="outline-none bg-gray-50  w-full p-2 text-sm    rounded-md "
                placeholder=" What are you thinking about?"
              />

              <div className="float-right">
                <HiFaceSmile />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        {/* {isCollapse && (
          <div>
            <div className="h-[19rem]"></div>
            <div className="    ">
              <div className="bg-gray-100 ">
                <label className=" flex items-center gap-1 ">
                  <AiTwotoneCamera />
                  <h3>Media</h3>
                  <input className="hidden" type="file" multiple />
                </label>
              </div>
              <div className=" w-full">
                <button className="bg-[#5596e6] text-white font-bold text-2xl w-full  ">
                  Publish
                </button>
              </div>
            </div>
          </div>
        )} */}
      </div>

      {/* <Modal
        width={840}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          <div>
            <Avatar src={data?.profilePicture} />
          </div>
        </div>
      </Modal> */}

      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};

export default PostInputField;
