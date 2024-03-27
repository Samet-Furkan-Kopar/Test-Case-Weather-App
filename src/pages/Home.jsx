import { TiWeatherWindyCloudy } from "react-icons/ti";
import SearchResultsList from "../components/SearchResultsList";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const Home = () => {
    const [results, setResults] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="text-white text-center">
            <div className="flex items-center justify-center md:pt-[60px] pt-[30px] gap-2 ">
                <TiWeatherWindyCloudy size={35} />
                <h6 className="md:text-3xl text-2xl font-semibold text-[#CCCCCD]">iWeather</h6>
            </div>
            <div className="md:mt-[150px] mt-[220px] ">
                <h6 className="md:text-3xl text-2xl font-semibold">
                    Welcome to <span className="text-[#8FB2F5]">TypeWeather</span>
                </h6>
                <p className="text-[#5B5B67]">Choose a location to see the weather forecast</p>
                <SearchBar setResults={setResults} loading={loading}/>
            </div>
            <div className="flex items-center justify-center flex-col">
                <SearchResultsList results={results} setLoading={setLoading}/>
            </div>
        </div>
    );
};

export default Home;
