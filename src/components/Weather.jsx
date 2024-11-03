import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoPartlySunny } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { FaCloud, FaCloudMoon } from "react-icons/fa";
import { RiMoonClearFill } from "react-icons/ri";
import {
  BsCloudRainHeavyFill,
  BsCloudDrizzleFill,
  BsCloudLightningRainFill,
  BsCloudSnowFill,
  BsFillCloudsFill,
} from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { LiaWaterSolid } from "react-icons/lia";

const Weather = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-bl from-slate-700 to-slate-900 bg-slate-900 p-8 max-w-[93%] w-full rounded-lg space-y-8  my-5">
      <h1 className="font-poppinsBold text-2xl text-green-400 text-center">
        Weather App
      </h1>
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="flex items-center justify-center space-x-3">
          <input
            type="text"
            placeholder="Search Location"
            className="font-poppinsRegular px-5 py-2 min-w-20 w-full max-w-fit border-none rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="p-2 rounded-full bg-white">
            <CiSearch className="text-2xl" />
          </div>
        </div>

        <div className="text-8xl text-yellow-400">
          <MdSunny />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-green-400 text-4xl font-poppinsRegular">25°c</h2>
          <p className="text-center text-green-400 text-xl font-poppinsRegular">
            City of Bislig
          </p>
        </div>

        <div className="flex justify-between max-w-96 w-full">
          <div className="place-items-center">
            <LiaWaterSolid className="text-3xl text-green-400" />
            <p className="font-poppinsRegular text-lg text-green-400">90 %</p>
            <p className="font-poppinsRegular text-green-400">Humidity</p>
          </div>
          <div className="place-items-center">
            <LuWind className="text-3xl text-green-400" />
            <p className="font-poppinsRegular text-lg text-green-400">
              20 km/h
            </p>
            <p className="font-poppinsRegular text-green-400">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
