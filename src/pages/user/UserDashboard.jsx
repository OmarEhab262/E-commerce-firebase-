import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
  // user
  const user = JSON.parse(localStorage.getItem("users"));

  const context = useContext(myContext);
  const { loading, getAllOrder } = context;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8">
        {/* User Info */}
        <div className="top">
          <div className="bg-blue-50 py-5 rounded-xl border border-blue-100">
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt="User Avatar"
              />
            </div>
            <div className="text-center text-lg">
              <h1>
                <span className="font-bold">Name:</span> {user?.name}
              </h1>
              <h1>
                <span className="font-bold">Email:</span> {user?.email}
              </h1>
              <h1>
                <span className="font-bold">Date:</span> {user?.date}
              </h1>
              <h1>
                <span className="font-bold">Role:</span> {user?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bottom">
          <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>

          <div className="flex justify-center relative top-10">
            {loading && <Loader />}
          </div>

          {getAllOrder
            .filter((order) => order.userid === user?.uid)
            .map((order, index) => (
              <div
                key={index}
                className="mt-5 flex flex-col overflow-hidden rounded-xl border border-blue-100 md:flex-row"
              >
                {/* Order Info */}
                <div className="w-full border-r border-blue-100 bg-blue-50 md:max-w-xs p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Order Id</div>
                      <div className="text-sm font-medium">#{order.id}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Date</div>
                      <div className="text-sm font-medium">{order.date}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Total Amount</div>
                      <div className="text-sm font-medium">
                        ${" "}
                        {order.cartItems.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Order Status</div>
                      <div className="text-sm font-medium text-green-800 first-letter:uppercase">
                        {order.status}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product List */}
                <div className="flex-1 p-8">
                  <ul className="-my-7 divide-y divide-gray-200">
                    {order.cartItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                      >
                        <div className="flex flex-1 items-stretch">
                          <div className="flex-shrink-0">
                            <img
                              className="h-40 w-40 rounded-lg border border-gray-200 object-contain"
                              src={item.productImageUrl}
                              alt={item.title}
                            />
                          </div>
                          <div className="ml-5 flex flex-col justify-between">
                            <p className="text-sm font-bold">{item.title}</p>
                            <p className="mt-1.5 text-sm font-medium text-gray-500">
                              {item.category}
                            </p>
                            <p className="mt-4 text-sm font-medium">
                              x {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="ml-auto flex flex-col items-end justify-between">
                          <p className="text-sm font-bold">$ {item.price}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
