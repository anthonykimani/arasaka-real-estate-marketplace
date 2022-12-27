import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="flex justify-around items-center bg-gray-50 shadow-lg font-open py-1 absolute top-0 z-10 w-[100%] max-w-screen">
            <div className="">
                <img src={process.env.PUBLIC_URL + "/arasaka_logo.png"} alt="" className="min-w-[150px] max-w-[150px] object-contain" />
            </div>
            <div className="">
                <ul className="hidden sm:flex justify-around items-center font-bold">
                    <li className="px-2 text-xl text-gray-800"><Link to={"/"}>Home</Link></li>
                    <li className="px-2 text-xl text-gray-800"><Link to={"/property"}>Properties</Link></li>
                    <li className="px-2 text-xl text-gray-800"><Link to={"/purchase"}>Purchases</Link></li>
                    <li className="px-2 text-xl text-gray-800"></li>
                </ul>
            </div>
            <div className="flex items-center justify-around">
            <h3 className="font-open text-gray-800 text-xl pr-5"><Link to={"/signup"}>Sign Up</Link></h3>
            <i className='bx bxs-user-circle bx-md text-gray-600'></i>
            </div>
        </div>
     );
}
 
export default Navbar;