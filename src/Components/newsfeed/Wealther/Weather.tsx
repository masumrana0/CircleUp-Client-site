/**
 * Title: 'realtime weather data dynamic implement by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 04-02-2024
 *
 */

import React, { useEffect, useState } from "react";
import { FaBookmark, FaLocationDot, FaRegBookmark } from "react-icons/fa6";

// async function getData() {
//   const res = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=Metric&appid=48d63514604fee054f540aec807e477d"
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
const Weather = async () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      " https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=Metric&appid=48d63514604fee054f540aec807e477d"
    )
      .then((res) => res.json())
      .then((data: any) => {
        setData(data);
        // console.log(data);
      });
  }, []);

  // Create a Date object with the current date and time
  const currentDate = new Date();

  // // Extracting components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const day = currentDate.getDay();

  // // Convert the numerical representation of the day into a string
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = daysOfWeek[day];
  const todayMonth = months[month];

  return (
    <div className="bg-blue-500 bg-opacity-20 p-4 rounded-md">
      <div className="flex flex-col justify-between items-center ">
        <h1 className="font_montserrat text-3xl">
          {Math.round(data?.main?.temp)}°C
        </h1>
        <h3>
          {data?.name}
          {/* Dhaka */}
        </h3>
        <span className="font_montserrat text-3xl">🌥️</span>
        <h1 className="font_montserrat text-2xl">
          {/* {data?.weather[0].main} */}
          Haze
        </h1>
        <div className="flex gap-4 my-2">
          <span className="text-md font-semibold">
            {Math.round(data?.main?.feels_like)}°C{" "}
          </span>
        </div>
        {/* Week */}
        {/* <div className="grid grid-cols-7 bg-gray-100 gap-2 p-2 rounded-md my-2">
          <div className="flex flex-col  justify-between items-center ">
            <h1 className=" font-light text-sm">MON</h1>
            <span className=" font-normal text-sm">☀️</span>
            <h1 className="font_raleway font-light text-sm">69</h1>
          </div>
          <div className="flex flex-col justify-between items-center ">
            <h1 className=" font-light text-sm">TUE</h1>
            <span className=" font-normal text-sm">🌥️</span>
            <h1 className="font_raleway font-light text-sm">69</h1>
          </div>
          <div className="flex flex-col justify-between items-center ">
            <h1 className=" font-light text-sm">WED</h1>
            <span className=" font-normal text-sm">🌦️</span>
            <h1 className="font_raleway font-light text-sm">69</h1>
          </div>
          <div className="flex flex-col justify-between items-center ">
            <h1 className=" font-light text-sm">THU</h1>
            <span className=" font-normal text-sm">🌦️</span>
            <h1 className="font_raleway font-light text-sm">63</h1>
          </div>
          <div className="flex flex-col justify-between items-center ">
            <h1 className=" font-light text-sm">FRI</h1>
            <span className=" font-normal text-sm">🌧️</span>
            <h1 className="font_raleway font-light text-sm">69</h1>
          </div>
          <div className="flex flex-col justify-between items-center ">
            <h1 className=" font-light text-sm">SAT</h1>
            <span className=" font-normal text-sm">🌥️</span>
            <h1 className="font_raleway font-light text-sm">50</h1>
          </div>
          <div className="flex flex-col justify-between items-center ">
            <h1 className=" font-light text-sm">SUN</h1>
            <span className=" font-normal text-sm">🌧️</span>
            <h1 className="font_raleway font-light text-sm">69</h1>
          </div>
        </div> */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-md text-gray-600 text-center">
            {dayName}, {date}th {todayMonth} {year}
            {/* Fri , 9th 2024 */}
          </h3>
          <h1 className="flex gap-1 justify-center items-center font-semibold ">
            {" "}
            <FaLocationDot className="text-sm" />
            <span className="text-center">BD , Dhaka</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Weather;
