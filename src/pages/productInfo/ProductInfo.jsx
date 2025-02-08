import Layout from "../../components/layout/Layout";
import { Star } from "lucide-react";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
const ProductInfo = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState("");

  const { id } = useParams();
  // getProductData
  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      setProduct(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <Layout>
      <section className="py-5 lg:py-16 font-poppins ">
        {loading && (
          <div className="h-[100px] flex items-center justify-center">
            <Loader />
          </div>
        )}
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="">
                <div className="">
                  <img
                    className=" w-full lg:h-[39em] rounded-lg"
                    src={product?.productImageUrl}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl">
                    {product?.title}
                  </h2>
                  <div className="flex flex-wrap items-center mb-6">
                    <ul className="flex mb-4 mr-2 lg:mb-0">
                      <li>
                        <Star color="black" strokeWidth={1} fill="yellow" />
                      </li>
                      <li>
                        <Star color="black" strokeWidth={1} fill="yellow" />
                      </li>
                      <li>
                        <Star color="black" strokeWidth={1} fill="yellow" />
                      </li>
                      <li>
                        <Star color="black" strokeWidth={1} fill="yellow" />
                      </li>
                      <li>
                        <Star color="black" strokeWidth={1} fill="yellow" />
                      </li>
                    </ul>
                  </div>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>${product?.price}</span>
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Description :
                  </h2>
                  <p className="text-justify">{product?.description}</p>
                </div>

                <div className="mb-6 " />
                <div className="flex flex-wrap items-center mb-6">
                  <button className="w-full px-4 py-3 text-center hover:opacity-80 border border-gray-600  bg-[#160a36]  transition duration-300 ease-in-out   cursor-pointer text-gray-100 rounded-xl">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductInfo;
