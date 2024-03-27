/* eslint-disable react/prop-types */
import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResultsList({ results, setLoading, handleSubmit}) {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        setShow(false);
        setLoading(true);
        handleSubmit(results?.location?.region+"-"+results?.location?.country);
        setTimeout(() => {
            navigate(`/${results?.location?.region}`);
            setLoading(false);
        }, 2000);
    }; 
    return (
        <div className="text-center md:w-[350px] md:h-[60px] w-[350px] h-[70px] my-1">
            {results?.error?.code === 1006 ? (
                <div className="bg-[#3B3B54] p-3 my-0.5 text-start rounded-md ">City not found</div>
            ) : results?.error?.cod === 1003 ? (
                <div className="bg-[#3B3B54] p-3 my-0.5 text-start rounded-md ">Arama yapınız</div>
            ) : results?.location?.region ? (
                <div
                    onClick={handleClick}
                    className={classNames({
                        "bg-[#3B3B54] p-3 my-0.5 text-start rounded-md":true,
                        "hidden":!show,
                    })}
                >
                    {`${results?.location?.region} - ${results?.location?.country}`}
                </div>
            ) : null}
            {/* <div className='bg-[#3B3B54] p-3 my-0.5 text-start rounded-md '>d</div> */}
        </div>
    );
}
