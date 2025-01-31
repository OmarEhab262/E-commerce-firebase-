import { Ban, Search } from "lucide-react";
import { useState } from "react";

const products = [
  { name: "Laptop", image: "/images/laptop.jpg" },
  { name: "Phone", image: "/images/phone.jpg" },
  { name: "Headphones", image: "/images/headphones.jpg" },
  { name: "Headphones", image: "/images/headphones.jpg" },
];

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const filteredProducts = searchText
    ? products.filter((product) =>
        product.name.toLowerCase().startsWith(searchText.toLowerCase())
      )
    : [
        {
          name: "no product found",
        },
      ];

  return (
    <div className="relative w-64">
      <input
        className={`p-2 rounded-md border border-gray-300 w-full ${
          searchText ? "pl-2" : "pl-8"
        } `}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
      />
      <div
        className={`${
          searchText ? "hidden" : "absolute"
        } cursor-pointer left-0 top-1 p-1  text-gray-400`}
      >
        <Search />
      </div>
      {filteredProducts.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
          {filteredProducts.map((product, index) => (
            <li
              key={index}
              className="flex items-center p-2 hover:bg-gray-100 text-black cursor-pointer"
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-8 h-8 mr-2"
                />
              ) : (
                <div className="mr-2">
                  <Ban color="red" />
                </div>
              )}
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
