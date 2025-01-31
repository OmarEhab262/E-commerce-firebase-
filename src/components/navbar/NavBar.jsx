import { Menu } from "lucide-react";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listNavBar = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "All Products",
      path: "/allproducts",
    },
    {
      name: "SignUp",
      path: "/signup",
    },
    {
      name: "Omar",
      path: "/omar",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];
  return (
    <nav>
      <div className="bg-gray-800 text-white p-4 flex justify-between w-full  items-center">
        <div className="md:w-1/4">
          <Link to="/" className="cursor-pointer">
            <span className="text-red-500 text-[21px] font-bold">E-</span>
            <span className="text-[19px]">Commerce</span>
          </Link>
        </div>
        <div className="lg:w-2/4  md:w-3/4">
          <button
            className="md:hidden flex cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
          <ul className="navbar md:flex hidden justify-around ">
            {listNavBar.map((item) => (
              <li
                className="duration-200 ease-in hover:bg-gray-700 w-fit py-1 px-3 rounded-[10px] cursor-pointer"
                key={item.name}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/4 lg:flex hidden">
          <SearchBar />
        </div>
      </div>
      <div
        className={`md:hidden bg-gray-800 text-white ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul
          className={`navbar md:hidden py-3 ${
            isOpen ? "flex flex-col  " : "hidden"
          }`}
        >
          {listNavBar.map((item) => (
            <li
              className="duration-200 ease-in hover:bg-gray-700 w-fit p-3 rounded-[10px] cursor-pointer ml-2"
              key={item.name}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
