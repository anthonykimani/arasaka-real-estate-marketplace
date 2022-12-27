import house from "../house.svg"
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import { useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Home = () => {

  const { user, setUser, isLoggedIn, setIsLoggedIn, changedState, setDisabled } = useContext(AppContext);

  useEffect(() => {
    // fetch("https://arasaka-api.herokuapp.com/me")
    // .then((response) => {
    //   if (response.ok) {
    //     response.json()
    //     .then((user) => {
    //       console.log(user)
    //       setUser(user)
    //       setIsLoggedIn(true)
    //     });
    //   }
    // });
    const userInfo = JSON.parse(localStorage.getItem('user'))
    // console.log(userInfo)
    if(userInfo){
      setUser(userInfo);
      setIsLoggedIn(true);
      setDisabled(false);
    }
  }, [changedState]);

  // console.log(user)

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="mt-[600px] flex flex-col items-center p-5">
        <h1 className="font-open text-2xl max-w-[900px] w-[100%]"><span className="font-work text-5xl text-blue-500">Arasaka </span>real estate is a Real Estate Web Application, where anyone can view, purchase their dream real estate or property.</h1>
      </div>
      <div className="flex flex-col items-center md:flex-row  md:justify-center md:items-center">
        <div className="max-w-[450px] w-[100%]">
          <img src={house} alt="" className="max-w-[900px] w-[100%]" />
        </div>
        <div>
          <h2 className="font-jost text-3xl md:text-5xl w-[100%] max-w-[500px]">Purchase a Property in 5 minutes </h2>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Home;
