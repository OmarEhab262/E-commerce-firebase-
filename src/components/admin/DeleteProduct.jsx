import { useContext } from "react";
import myContext from "../../context/myContext";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const DeleteProduct = ({ id, isOpen, setIsOpen }) => {
  const context = useContext(myContext);
  const { setLoading, getAllProductFunction } = context;
  // console.log(getAllProduct)
  // Delete product
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", id));
      toast.success("Product Deleted successfully");
      getAllProductFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      {/* المودال */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center  bg-opacity-50 z-50">
          <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-sm dark:bg-blue-950">
            {/* زر إغلاق المودال */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>

              {/* زر تأكيد الحذف */}
              <button
                onClick={() => {
                  // تنفيذ عملية الحذف هنا
                  deleteProduct(id);
                  setIsOpen(false);
                }}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 cursor-pointer focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I&apos;m sure
              </button>

              {/* زر إلغاء الحذف */}
              <button
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg cursor-pointer hover:bg-gray-300"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteProduct;
