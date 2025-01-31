import { Menu } from "lucide-react";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listNavBar = [
    { name: "Home", path: "/" },
    { name: "All Products", path: "/allproducts" },
    { name: "SignUp", path: "/signup" },
    { name: "Omar", path: "/omar" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="sticky top-0 z-50 ">
      <div className="relative z-50 px-10 bg-[#160a36] text-white p-4 flex justify-between w-full items-center ">
        <div className="md:w-1/4 ">
          <Link to="/" className="cursor-pointer">
            <span className="text-[#FB64B6] text-[21px] font-bold">E-</span>
            <span className="text-[19px]">Commerce</span>
          </Link>
        </div>
        <div className="lg:w-2/4 md:w-3/4">
          <button
            className="md:hidden flex cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
          <ul className="navbar md:flex hidden justify-around">
            {listNavBar.map((item) => (
              <li
                className="duration-200 ease-in hover:bg-[#241154] w-fit py-1 px-3 rounded-[10px] cursor-pointer"
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

      {/* Mobile Menu with Drop Animation */}
      <div
        className={`md:hidden bg-[#160a36] text-white absolute w-full left-0 transition-all duration-300 ease-in-out z-10 ${
          isOpen
            ? "top-[60px] opacity-100 translate-y-0"
            : "top-[-100%] opacity-0 translate-y-[-20px]"
        }`}
      >
        <ul className="navbar py-3 flex flex-col">
          {listNavBar.map((item) => (
            <li
              className="duration-200 ease-in hover:bg-[#241154] hover:text-gray-400 w-[90%] p-3 rounded-[10px] cursor-pointer ml-2"
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
