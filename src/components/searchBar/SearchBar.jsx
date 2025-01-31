import { Ban, Search } from "lucide-react";
import { useState } from "react";

const products = [
  {
    name: "Fashion",
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  },
  {
    name: "Shirt",
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  },
  {
    name: "Jacket",
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  },
  {
    name: "Mobile",
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  },
  {
    name: "Laptop",
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  },
  {
    name: "Home",
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  },
  {
    name: "book",
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  },
];

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const filteredProducts = searchText
    ? products.filter((product) =>
        product.name.toLowerCase().startsWith(searchText.toLowerCase())
      )
    : [];

  if (searchText && filteredProducts.length === 0) {
    filteredProducts.push({ name: "no product found" });
  }

  return (
    <div className="relative w-full">
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
