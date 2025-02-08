import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const AllProduct = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { getAllProduct, loading } = context;

  return (
    <Layout>
      <div className="py-8">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold">
            All Products
          </h1>
        </div>

        {/* main  */}
        <section className="text-gray-600 body-font">
          <div className=" py-5 ">
            {loading && (
              <div className="h-[100px] flex items-center justify-center">
                <Loader />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   justify-items-center ">
              {getAllProduct.slice(0, 8).map((item, index) => {
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

                        <div className="flex justify-center ">
                          <button className=" bg-blue-950 hover:bg-blue-900 w-full text-white py-[4px] rounded-lg font-bold cursor-pointer">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AllProduct;
