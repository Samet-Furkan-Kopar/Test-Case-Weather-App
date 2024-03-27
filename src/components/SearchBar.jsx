/* eslint-disable react/prop-types */
import classNames from "classnames";
import { useEffect, useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
export default function SearchBar({ setResults, loading }) {
    const [search, setSearch] = useState("");
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${search}&days=5&aqi=yes&alerts=yes`;

    const handleSearch = (value) => {
        setSearch(value);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => setResults(data));
        }, 1000);
        return () => clearTimeout(timeout);
    }, [search]);

    return (
        <div className={classNames({
            "relative":loading
        })}> 
            <input
                className="md:w-[350px] md:h-[60px] w-[350px] h-[70px] p-2 mt-5 rounded-xl bg-[#1E1E29] z-10"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search Location"
                type="text"
            />
            <PiSpinnerBold className={classNames({
                "absolute xl:right-[41%] lg:right-[37%] md:right-[30%] xs:right-[26%] right-[15%] top-[50%]": loading,
                "hidden": !loading,
            })} color="white"/>
        </div>
    );
}
