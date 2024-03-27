/* eslint-disable react/prop-types */
export default function DailyWeather({weather}) {
  return (
    <div className="md:w-[80%] w-[95%] mx-auto">
                <div className=" flex items-center justify-center bg-[#16161F] rounded-md p-5">
                    {weather?.forecast?.forecastday?.map((daily, i) => (
                        <div key={i} className="flex items-center justify-center text-center ">
                            <div className="md:mx-8 gap-2">
                                <h6 className="md:text-xl text-xs font-semibold">
                                    {new Date(daily.date).toLocaleDateString("en-US", {
                                        weekday: "long",
                                    })}
                                </h6>
                                <div className="flex items-center justify-center ">
                                    <img src={daily.day.condition.icon} alt="weather icon" />
                                </div>
                                <p className="md:text-xl text-xs font-semibold">
                                    {Math.floor(daily.day.avgtemp_c)}°c
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
  )
}
