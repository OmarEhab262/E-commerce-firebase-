import { useNavigate, useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const CategoryPage = () => {
  const { categoryname } = useParams();

  const user = JSON.parse(localStorage.getItem("users"));

  const context = useContext(myContext);
  const { getAllProduct, loading } = context;

  const navigate = useNavigate();

  // filter product
  const filterProduct = getAllProduct.filter((obj) =>
    obj.category.includes(categoryname)
  );
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <div className="mt-10">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold first-letter:uppercase">
            {categoryname}
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <section className="text-gray-600 body-font">
            {/* main 2 */}
            <div className=" px-5 py-5 mx-auto">
              {/* main 3  */}
              <div
                className={`mt-12 ${
                  filterProduct.length > 0
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   justify-items-center"
                    : ""
                }`}
              >
                {filterProduct.length > 0 ? (
                  <>
                    {filterProduct.map((item, index) => {
                      const { id, title, price, productImageUrl } = item;
                      return (
                        <div key={index} className="">
                          <div className="h-full w-[300px] border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer ">
                            <img
                              onClick={() => navigate(`/productinfo/${id}`)}
                              className="lg:h-80  h-96 w-full p-5 rounded-[30px]"
                              src={productImageUrl}
                              alt="blog"
                              title="View more!"
                            />
                            <div className="p-6">
                              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                E-bharat
                              </h2>
                              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                {title.substring(0, 25)}
                              </h1>
                              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                ${price}
                              </h1>

                              <div className="flex justify-center  ">
                                {cartItems?.some((p) => p.id === item.id) ? (
                                  <button
                                    onClick={() => deleteCart(item)}
                                    className=" bg-red-700 hover:bg-red-600 w-full text-white py-[4px] rounded-lg font-bold cursor-pointer"
                                  >
                                    Delete from Cart
                                  </button>
                                ) : (
                                  <button
                                    onClick={
                                      user?.role === "user"
                                        ? () => addCart(item)
                                        : undefined
                                    }
                                    className={`bg-blue-950 hover:bg-blue-900 w-full text-white py-[4px] rounded-lg font-bold ${
                                      user?.role === "user"
                                        ? "cursor-pointer"
                                        : "cursor-not-allowed opacity-50"
                                    }`}
                                    disabled={user?.role !== "user"}
                                  >
                                    Add To Cart
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div>
                    <div className="flex justify-center items-center flex-col gap-10">
                      <img
                        className=" mb-2"
                        src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                        alt=""
                      />
                      <h1 className=" text-black text-xl">
                        No {categoryname} product found
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
