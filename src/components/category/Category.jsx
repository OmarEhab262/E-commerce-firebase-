import { useNavigate } from "react-router";

// category
const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
    name: "fashion",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
    name: "shirt",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
    name: "jacket",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
    name: "mobile",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
    name: "laptop",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
    name: "shoes",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
    name: "home",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
    name: "books",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex flex-col mt-5 ">
        <div className="flex lg:justify-center  ">
          <div className="flex justify-between overflow-x-scroll md:overflow-x-hidden  w-full p-3">
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12">
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
