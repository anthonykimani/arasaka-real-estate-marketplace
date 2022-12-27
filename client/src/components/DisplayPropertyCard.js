import { useState,useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";


const DisplayPropertyCard = ({
  id,
  img,
  property_name,
  price,
  location,
}) => {

  const { setPropertyId } = useContext(AppContext);
  const navigate = useNavigate();

  //selects individual property
  const handleSelect = () => {
    console.log(id);
    navigate(`/selected`);
    setPropertyId(id);
  }


  return (
    <div className="flex flex-col max-w-[400px] max-h-[600px] h-[100%] w-[100%] bg-white font-jost text-gray-900 rounded-lg shadow-lg m-2">
      <div className="max-w-[400px] w-[100%] max-h-[300px] h-[100%]">
        <img
          src={process.env.PUBLIC_URL + img}
          alt=""
          className="object-cover max-w-[400px] w-[100%] max-h-[300px] h-[100%] rounded-t-md "
        />
      </div>
      <div className="max-w-[400px] w-[100%] flex justify-around">
        <div className="max-w-[400px] w-[100%] flex flex-col justify-around py-3">
          <h1 className="font-open font-bold text-base text-gray-600 px-2">
            {property_name.toUpperCase()}
          </h1>
          <div className="flex flex-col justify-between">
            <div className="px-2">
              <h3 className="text-4xl my-2">${price}</h3>
              <h3 className="font-open text-base text-gray-800">{location}</h3>
            </div>
            <hr className="border border-gray-200 my-3" />
            <div className="px-2">
              <button onClick={handleSelect} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-bold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-3 px-5 w-full font-open ">View Property</button>
            </div>
          </div>
          <h4 className="px-2">*prices may vary</h4>
        </div>
      </div>
    </div>
  );
};

export default DisplayPropertyCard;
