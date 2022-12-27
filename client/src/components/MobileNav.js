import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="fixed bottom-0  max-w-[640px] w-[100%] sm:hidden bg-white">
      <ul className="flex justify-around items-center font-bold shadow-lg py-1">
        <li className="px-2 text-xl text-gray-800">
          <Link to={"/"}><i class='bx bx-home'></i></Link>
        </li>
        <li className="px-2 text-xl text-gray-800">
          <Link to={"/property"}><i class='bx bx-search'></i></Link>
        </li>
        <li className="px-2 text-xl text-gray-800">
          <Link to={"/purchase"}><i class='bx bxs-cart'></i></Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
