import { Search, X } from "lucide-react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context || { getAllProduct: [] }; // تجنب الأخطاء عند عدم توفر البيانات

  // Search State
  const [search, setSearch] = useState("");

  // Filter Search Data
  const filterSearchData = getAllProduct
    ?.filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8);

  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <input
        className={`p-2 rounded-md border border-gray-300 w-full ${
          search ? "pl-2" : "pl-8"
        }`}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <div
        className={`${
          search ? "hidden" : "absolute"
        } cursor-pointer left-0 top-1 p-1 text-gray-400`}
      >
        <Search />
      </div>
      <div
        onClick={() => setSearch("")}
        className={`${
          search ? "absolute" : "hidden"
        } absolute cursor-pointer right-0 top-1 p-1 text-gray-400`}
      >
        {" "}
        <X />
      </div>
      {search && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 text-black">
          {filterSearchData.length > 0 ? (
            <>
              {filterSearchData.map((item, index) => (
                <div
                  key={index}
                  className="py-2 px-2 cursor-pointer"
                  onClick={() => navigate(`/productinfo/${item.id}`)}
                >
                  <div className="flex items-center gap-2">
                    <img className="w-10" src={item.productImageUrl} alt="" />
                    {item.title}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="flex justify-center">
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                alt="img"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
