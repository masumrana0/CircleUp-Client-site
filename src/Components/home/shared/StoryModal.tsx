"use client";
import { message } from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Modal } from 'antd';
import axios from "axios";

const img_hosting_token = "100d68a470e46ca6b971169172b3b2a5"


type FormValues = {
  id: string;
  password: string;
};
type modalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const StoryModal = ({ isOpen, closeModal }: modalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, serErrorMessage] = useState("")
  const router = useRouter();

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const submitHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const imageResponse = await axios.post(image_hosting_url, formData);

      if (imageResponse.data.success) {
        const imageUrl = imageResponse.data.data.display_url;

        console.log("imageUrl", imageUrl,);


        await axios.post('https://circleup-backend.vercel.app/api/v1/story/create-story', {
          about: data.about,
          image: imageUrl
        });

        message.success('submitted successfully');
        router.push('/');
      } else {
        message.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error:', error);
      message.error('Something went wrong');
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };


  const handleCancel = () => {
    closeModal();
  };

  return (
    <>
      <Modal visible={isOpen} onCancel={handleCancel} footer={null}>
        <div>
          {isModalOpen}
          <div className="w-full max-w-sm px-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
            <div>
              <form
                className="mx-auto max-w-screen-md"
                onSubmit={handleSubmit(submitHandler)}
              >
                <div className='lg:flex lg:gap-5'>
                  {/* Images Gallery part */}
                  <div className="card w-96 bg-base-100 shadow-xl p-4 mb-11">
                    <div className="">
                      <input
                        type="file"
                        className="w-full border-1 drop-shadow-md"
                        id="image"
                        autoFocus

                        {...register('image', {
                          required: 'Please upload image',
                        })}
                      />
                      {errors.image && (
                        <div className="text-red-500">{String(errors.image.message)}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-4 ">
                  <button className=" cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update Story</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default StoryModal;





// "use client";
// import React, { useState } from "react";
// import { Button, Modal } from "antd";

// const StoryModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal
//         title="Basic Modal"
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };

// export default StoryModal;
