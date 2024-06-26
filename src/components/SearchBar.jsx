/* eslint-disable react/prop-types */
import classNames from "classnames";
// import { useEffect, useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
export default function SearchBar({ loading,handleSearch,search }) {
   

    return (
        <div className={classNames({
            "relative":loading
        })}> 
            <input
                className={classNames({
                    "md:w-[350px] md:h-[60px] w-[350px] h-[70px] p-3 mt-5 rounded-xl bg-[#1E1E29] z-10":true,
                    "opacity-50":loading
                })}
                value={search || ""}
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
