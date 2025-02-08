import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import DeleteProduct from "./DeleteProduct";

const ProductDetail = () => {
  const context = useContext(myContext);
  const { loading, getAllProduct } = context;
  console.log(getAllProduct);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-xl text-blue-300 font-bold">All Product</h1>
        <Link to={"/addproduct"}>
          <button className="px-5 py-2 border border-blue-100 bg-blue-50 hover:bg-blue-100 rounded-lg cursor-pointer">
            Add Product
          </button>
        </Link>
      </div>

      <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
          <tbody>
            <tr>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                S.No.
              </th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                Image
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                Title
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                Price
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                Category
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                Date
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                Action
              </th>
              <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                Action
              </th>
            </tr>
            {getAllProduct.map((item, index) => {
              const { id, title, price, category, date, productImageUrl } =
                item;
              return (
                <tr key={id} className="text-pink-300">
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {index + 1}.
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    <div className="flex justify-center">
                      <img className="w-20" src={productImageUrl} alt="" />
                    </div>
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {title}
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    ${price}
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {category}
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {date}
                  </td>
                  <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-green-500 cursor-pointer">
                    <Link to={`/updateproduct/${id}`}>Edit</Link>
                  </td>
                  <td
                    onClick={() => {
                      setSelectedId(id); // تحديد المنتج للحذف
                      setIsOpen(true); // فتح المودال
                    }}
                    className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-red-500 cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
            {loading && (
              <tr className="h-32">
                <td colSpan="8" className="text-center py-4">
                  <div className="flex justify-center items-center h-full">
                    <Loader />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {isOpen && (
          <DeleteProduct
            id={selectedId}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
