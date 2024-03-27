/* eslint-disable react/prop-types */
import { CiLight } from "react-icons/ci";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { GiDrop } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";

export default function GeneralItems({ weather, backgroundImage}) {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center text-center md:gap-10 gap-5 p-5">
                <div
                    className=" md:h-[300px] h-[270px] p-5 object-cover md:w-[50%] w-[95%] rounded-md text-start"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div>
                        <h6 className="md:text-2xl text-xl font-semibold ">{`${weather?.location?.name}, ${weather?.location?.country}`}</h6>
                        <p className="text-sm">
                            {
                                new Date()
                                    .toLocaleDateString("en-US", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })
                                    .split(",")[0]
                            }
                        </p>
                    </div>
                    <div className="flex w-full pl-5 md:pt-[80px] pt-[50px]">
                        <div className="w-[50%] text-start">
                            <h6 className="text-[50px] font-semibold">
                                {weather?.current?.temp_c}°c
                            </h6>
                            <p className="text-xl">
                                {weather?.current?.temp_c - 1}°c / {weather?.current?.temp_c + 1}°c
                            </p>

                            <p className="text-md">{weather?.current?.condition?.text}</p>
                        </div>
                        <div className="w-[50%] text-start"></div>
                    </div>
                </div>
                <div className="md:w-[45%] w-[90%]">
                    <div className="bg-[#16161F] border-b border-[#545457]  rounded-md py-2 md:px-10 px-4 md:h-[50px] h-[40px] flex items-center justify-between">
                        <div className="flex gap-5">
                            <FaTemperatureHalf size={20} />
                            <h6 className="text-md text-[#BFBFD4]">Thermal sensation</h6>
                        </div>
                        <p className="text-[#FAFAFA]">{weather?.current?.temp_c}°c</p>
                    </div>
                    <div className="bg-[#16161F] rounded-md py-2 border-b border-[#545457] md:px-10 px-4  md:h-[50px] h-[40px] flex items-center justify-between">
                        <div className="flex gap-5">
                            <FaCloud size={23} />
                            <h6 className="text-md text-[#BFBFD4]">Cloud</h6>
                        </div>
                        <p className="text-[#FAFAFA]">{weather?.current?.cloud}%</p>
                    </div>
                    <div className="bg-[#16161F] border-b border-[#545457] rounded-md py-2   md:px-10 px-4  md:h-[50px] h-[40px] flex items-center justify-between">
                        <div className="flex gap-5">
                            <FaWind size={20} />
                            <h6 className="text-md text-[#BFBFD4]">Wind Speed</h6>
                        </div>
                        <p className="text-[#FAFAFA]">{weather?.current?.wind_kph}/km</p>
                    </div>
                    <div className="bg-[#16161F] border-b border-[#545457] rounded-md py-2   md:px-10 px-4  md:h-[50px] h-[40px] flex items-center justify-between">
                        <div className="flex gap-5">
                            <GiDrop size={22} />
                            <h6 className="text-md text-[#BFBFD4]">Air Humudity</h6>
                        </div>
                        <p className="text-[#FAFAFA]">{weather?.current?.humidity}%</p>
                    </div>
                    <div className="bg-[#16161F] border-b border-[#545457] rounded-md py-2 md:px-10 px-4  md:h-[50px] h-[40px] flex items-center justify-between">
                        <div className="flex gap-5">
                            <CiLight size={22} />
                            <h6 className="text-md text-[#BFBFD4]">UV Index</h6>
                        </div>
                        <p className="text-[#FAFAFA]">{weather?.current?.uv}</p>
                    </div>
                </div>
            </div>
  )
}
