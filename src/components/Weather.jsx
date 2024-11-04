import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoPartlySunny } from "react-icons/io5";
import { MdSunny, MdLocationPin } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
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

function Weather() {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [error, setError] = useState(false);

  const allIcons = {
    "01d": <MdSunny />,
    "01n": <RiMoonClearFill />,
    "02d": <IoPartlySunny />,
    "02n": <FaCloudMoon />,
    "03d": <FaCloud />,
    "03n": <FaCloud />,
    "04d": <BsFillCloudsFill />,
    "04n": <BsFillCloudsFill />,
    "09d": <BsCloudRainHeavyFill />,
    "09n": <BsCloudRainHeavyFill />,
    "10d": <BsCloudDrizzleFill />,
    "10n": <BsCloudDrizzleFill />,
    "11d": <BsCloudLightningRainFill />,
    "11n": <BsCloudLightningRainFill />,
    "13d": <BsCloudSnowFill />,
    "13n": <BsCloudSnowFill />,
    "50d": <BsCloudSnowFill />,
    "50n": <BsCloudSnowFill />,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        const icon = allIcons[data.weather[0].icon] || <MdSunny />;
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon,
        });
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log("ERROR:", error);
      setError(true);
    }
  };

  useEffect(() => {
    search("Bislig");
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search(inputRef.current.value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-bl from-slate-700 to-slate-900 bg-slate-900 p-8 max-w-[93%] sm:max-w-md w-full rounded-lg space-y-10 mx-5">
      <h1 className="font-poppinsBold text-3xl text-green-400 text-center">
        Weather App
      </h1>
      <div className="flex flex-col items-center justify-center space-y-10 md:max-w-md w-full">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center justify-center bg-white rounded-full">
            <div className="pl-3 pb-[2px]">
              <VscLocation className="text-xl text-slate-400" />
            </div>

            <input
              ref={inputRef}
              type="text"
              placeholder="Location"
              onFocus={() => (inputRef.current.value = "")}
              onKeyDown={handleKeyDown}
              className="font-poppinsRegular py-2 pr-2 pl-1 min-w-20 w-full max-w-44 border-none rounded-full focus:outline-none"
            />

            <div
              onClick={() => search(inputRef.current.value)}
              className="py-2 px-4 rounded-r-full bg-green-400 cursor-pointer active:bg-green-300"
            >
              <CiSearch className="text-2xl" />
            </div>
          </div>

          <p
            className={`text-red-500 font-poppinsRegular text-sm ${
              error ? "opacity-100" : "opacity-0"
            }`}
          >
            Location not found!
          </p>
        </div>

        <div className="text-8xl text-yellow-400">{weatherData.icon}</div>

        <div className="flex flex-col items-center">
          <h2 className="text-green-400 text-5xl font-poppinsRegular">
            {weatherData.temperature}°c
          </h2>
          <p className="text-center text-green-400 text-xl font-poppinsRegular">
            {weatherData.location}
          </p>
        </div>

        <div className="flex justify-between w-full md:px-5">
          <div className="place-items-center">
            <LiaWaterSolid className="text-3xl text-green-400" />
            <p className="font-poppinsRegular text-lg text-green-400">
              {weatherData.humidity} %
            </p>
            <p className="font-poppinsRegular text-green-400 text-center">
              Humidity
            </p>
          </div>

          <div className="place-items-center">
            <LuWind className="text-3xl text-green-400" />
            <p className="font-poppinsRegular text-lg text-green-400 text-center">
              {weatherData.windSpeed} km/h
            </p>
            <p className="font-poppinsRegular text-green-400 text-center">
              Wind Speed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
