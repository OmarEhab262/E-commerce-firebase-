import { ArrowLeft } from "lucide-react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../loader/Loader";

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
const AddProductPage = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  // Add Product Function
  const addProductFunction = async () => {
    if (
      product.title == "" ||
      product.price == "" ||
      product.productImageUrl == "" ||
      product.category == "" ||
      product.description == ""
    ) {
      return toast.error("all fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Add product successfully");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed");
    }
  };
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
              Add Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              type="text"
              name="title"
              placeholder="Product Title"
              className="bg-blue-50 text-[#160A36] border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-800"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              type="number"
              placeholder="Product Price"
              className="bg-blue-50 text-[#160A36] border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-800"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
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
              onClick={addProductFunction}
              type="button"
              className={`bg-[#160a36] hover:bg-[#1f0d4b] w-full h-[40px] flex items-center justify-center text-white text-center py-2 font-bold rounded-md ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              } `}
            >
              {loading ? <Loader /> : "Add Product"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProductPage;
