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

function Weather() {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

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
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || <MdSunny />;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.log("ERROR:", error);
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
    <div className="flex flex-col items-center justify-center bg-gradient-to-bl from-slate-700 to-slate-900 bg-slate-900 p-8 max-w-[93%] sm:max-w-md w-full rounded-lg space-y-8 mx-5">
      <h1 className="font-poppinsBold text-3xl text-green-400 text-center">
        Weather App
      </h1>
      <div className="flex flex-col items-center justify-center space-y-10 md:max-w-md w-full">
        <div className="flex items-center justify-center space-x-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Location"
            onKeyDown={handleKeyDown}
            className="font-poppinsRegular px-5 py-2 min-w-20 w-full max-w-fit border-none rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="p-2 rounded-full bg-white">
            <CiSearch className="text-2xl" />
          </div>
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
