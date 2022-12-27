import Navbar from "../components/Navbar";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import MobileNav from "../components/MobileNav";

const PropertyCart = () => {
  const { propertyId, isLoggedIn, user, disabled } = useContext(AppContext);
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate();

  //fetch individual property
  useEffect(() => {
    const handleGetProperty = async () => {
      //   console.log(propertyId);
      let response = await fetch(
        `http://localhost:3000/properties/${propertyId}`
      );
      response = await response.json();
      //   await console.log(response);
      setCartItem(response);
    };
    handleGetProperty();
  }, []);

  //handlePurchase
  const handlePurchase = async () => {
    //   console.log("clicked");
    let addPurchase = {
      user_id: user.id,
      property_id: cartItem.id,
      name: cartItem.property_name,
    };
    // console.log(addPurchase);
    let response = await fetch("http://localhost:3000/purchases", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addPurchase),
    });
    navigate("/purchase");
    console.log("purchased");
  };

  const handleRouteLogin = () => {
    navigate("/login");
  }

  const handleRouteSignup = () => {
    navigate("/signup");
  }

  return (
    <div className="bg-indigo-50 flex flex-col items-center md:h-[800px]">
      <Navbar />
      <div className="mt-[30px] bg-white max-w-[1000px] w-[100%] md:h-[600px] h-[100%] rounded-lg mt-[80px]">
        <h1 className="font-work font-bold text-3xl p-5">Property Cart</h1>
        <div className="flex flex-col items-center md:flex-row md:justify-around md:h-[500px] ">
          <div className="max-w-[500px] w-[100%]">
            <div className="flex flex-col justify-around md:h-[500px]">
              <div className="border-2 flex justify-between max-w-[300px] w-[100%] rounded-xl py-3 px-5 m-3">
                <div>
                  <h2 className="font-work font-bold text-2xl text-gray-500">
                    Login
                  </h2>
                  <h3 className="font-open font-light text-xl">
                    Hello {user.first_name}
                  </h3>
                </div>
              </div>
              <div className="">
                <h2 className="font-work font-bold text-2xl m-5">
                  payment method
                </h2>
              </div>
              <div className="flex justify-between items-center p-2">
                <div>
                  <h2 className="font-work"> Debit/ Credit Card</h2>
                </div>
                <div className="flex justify-around items-center p-5 font-bold font-work text-2xl md:mt-[30px]">
                  <h2>Total</h2>
                  <h2>{cartItem.price}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[400px] w-[100%] border-2 flex-col justify-around p-5 rounded-lg ">
            <h2 className="font-work text-3xl font-bold">Your Order</h2>
            <div className="flex flex-col items-center p-3 justify-around font-open">
              <div>
                <img
                  src={process.env.PUBLIC_URL + cartItem.image}
                  alt=""
                  className="md:max-w-[300px] w-[100%] rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-around items-start md:max-w-[300px] w-[100%]">
                <h2 className="font-jost text-3xl">{cartItem.property_name}</h2>
                <h3 className="font-open">{cartItem.location}</h3>
              </div>
            </div>
              <h3 className="text-sm font-work p-2 text-red-500"
                style={isLoggedIn ? { display: "none" } : { display: "block" }}
              >
                please<span onClick={handleRouteLogin} className="hover:text-red-300 focus:text-red-300 focus:outline-none focus:underline underline text-sm font-medium leading-none text-red-500 cursor-pointer"> login </span> or <span onClick={handleRouteSignup} className="hover:text-red-300 focus:text-red-300 focus:outline-none focus:underline underline text-sm font-medium leading-none text-red-500 cursor-pointer"> signup </span> first before purchase
              </h3>
            <div className="flex flex-col items-center">
              <button
                onClick={handlePurchase}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-bold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-3 px-2 w-full font-work max-w-[150px] text-xl"
                disabled={disabled}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};
export default PropertyCart;
