import { ArrowLeft } from "lucide-react";
import Layout from "../../components/layout/Layout";
// import { useContext } from "react";
// import myContext from "../../context/myContext";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

const UpdateProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProductFunction } = context;

  // navigate
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  // Get Single Product Function
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      //   console.log(product.data())
      const product = productTemp.data();
      setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", id), product);
      toast.success("Product Updated successfully");
      getAllProductFunction();
      setLoading(false);
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProductFunction();
  }, []);
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center  h-[90%]">
        <div className="self-start m-5">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-3 px-5 py-2  border border-blue-00 bg-[#160A36] text-white hover:bg-[#160a36d6] rounded-lg cursor-pointer"
          >
            <ArrowLeft />
            Go Back
          </button>
        </div>
        {/* Login Form  */}
        <div className="login_Form bg-blue-50 px-8 py-6 border border-blue-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-blue-900 ">
              Update Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
              value={product.title}
              type="text"
              name="title"
              placeholder="Product Title"
              className="bg-blue-50 text-[#160A36] border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-800"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              value={product.price}
              type="number"
              placeholder="Product Price"
              className="bg-blue-50 text-[#160A36] border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-800"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              onChange={(e) =>
                setProduct({ ...product, productImageUrl: e.target.value })
              }
              value={product.productImageUrl}
              type="text"
              placeholder="Product Image Url"
              className="bg-blue-50 text-[#160A36] border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-800"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              defaultValue={""}
              className="w-full px-1 py-2 text-blue-800 bg-blue-50 border border-blue-200 rounded-md outline-none"
            >
              <option value="" disabled hidden>
                Select Product Category
              </option>
              {categoryList.map((value, index) => {
                return (
                  <option
                    className="first-letter:uppercase"
                    key={index}
                    value={value.name}
                  >
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              placeholder="Product Description"
              rows="5"
              className=" w-full px-2 py-1 text-[#160A36] bg-blue-50 border border-blue-200 rounded-md outline-none placeholder-blue-800 "
            ></textarea>
          </div>

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={updateProduct}
              type="button"
              className={`bg-[#160a36] hover:bg-[#1f0d4b] w-full h-[40px] flex items-center justify-center text-white text-center py-2 font-bold rounded-md ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              } `}
            >
              {loading ? <Loader /> : "Update Product"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProductPage;
