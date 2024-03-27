/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function SearchResultsList({ results, setLoading }) {
    const navigate = useNavigate();

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/${results?.location?.region}`);
            setLoading(false);
        }, 500);
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
                    className="bg-[#3B3B54] p-3 my-0.5 text-start rounded-md"
                >
                    {`${results?.location?.region} - ${results?.location?.country}`}
                </div>
            ) : null}
            {/* <div className='bg-[#3B3B54] p-3 my-0.5 text-start rounded-md '>d</div> */}
        </div>
    );
}
