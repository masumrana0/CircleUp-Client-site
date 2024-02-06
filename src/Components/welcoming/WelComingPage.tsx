"use client";
import Image from "next/image";
import React from "react";
import welcomingpic from "/public/welcoming/joining-us.png";
import Link from "next/link";

const WelComingPage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-blend-multiply bg-black bg-opacity-85"
      style={{ backgroundImage: "url('/welcoming/welcome.jpg')" }}
    >
      <div className="flex min-h-screen justify-center items-center lg:gap-28 flex-wrap p-10">
        <div>
          <Image
            src={welcomingpic}
            width={600}
            height={500}
            alt="Picture of Welcoming"
          />
        </div>
        <div>
          <span className="lg:text-8xl text-5xl font-bold ">
            <h2 className="text-white text-center ">WelCome To </h2>
            <h2 className="text-violet-500 bg-black py-4 px-1 rounded-md bg-opacity-80">
              CircleUp!
            </h2>
          </span>
          <p className="font-semibold text-xl my-2 lg:my-4 text-gray-200">
            Connect with Friends,Chat with free!{" "}
          </p>
          <Link href="/auth">
            <button className="font-bold text-xl bg-violet-500 hover:bg-violet-800 transition-colors duration-300 px-8 p-2 text-white rounded">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelComingPage;
