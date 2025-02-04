import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "../../components/admin/ProductDetail";
import OrderDetail from "../../components/admin/OrderDetail";
import UserDetail from "../../components/admin/UserDetail";
import { ListOrdered, ShoppingBasket, Users } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div>
      {/* Top */}
      <div className="top mb-5 px-5 mt-5">
        <div className=" bg-blue-50 py-5 border border-blue-100 rounded-lg">
          <h1 className=" text-center text-2xl font-bold text-[#160a36]">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="px-5">
        {/* Mid  */}
        <div className="mid mb-5">
          {/* main  */}
          <div className=" bg-blue-50 py-5 rounded-xl border border-blue-100">
            {/* image  */}
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt=""
              />
            </div>
            {/* text  */}
            <div className="">
              <h1 className=" text-center text-lg text-[#160a36]">
                <span className=" font-bold">Name :</span> Kamal Nayan Upadhyay
              </h1>
              <h1 className=" text-center text-lg text-[#160a36]">
                <span className=" font-bold">Email :</span> test@gmail.com
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="">
          <Tabs>
            <TabList className="flex flex-wrap -m-4 text-center justify-center">
              {/* Total Products */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-blue-50 hover:bg-blue-100 border-blue-100 px-4 py-3 rounded-xl">
                  <div className="text-[#160a36] w-12 h-12 mb-3 inline-block">
                    <ShoppingBasket size={50} />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-blue-400 fonts1 mb-4">
                    10
                  </h2>
                  <p className=" text-[#160a36]  font-bold">Total Products</p>
                </div>
              </Tab>

              {/* Total Order  */}
              <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-blue-50 hover:bg-blue-100 border-blue-100 px-4 py-3 rounded-xl">
                  <div className="text-[#160a36] w-12 h-12 mb-3 inline-block">
                    <ListOrdered size={50} />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-blue-400 fonts1 mb-4">
                    10
                  </h2>
                  <p className=" text-[#160a36]  font-bold">Total Order</p>
                </div>
              </Tab>

              {/* Total User  */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-blue-50 hover:bg-blue-100 border-blue-100 px-4 py-3 rounded-xl">
                  <div className="text-[#160a36] w-12 h-12 mb-3 inline-block">
                    <Users size={50} />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-blue-400 fonts1 mb-4">
                    10
                  </h2>
                  <p className=" text-[#160a36]  font-bold">Total Order</p>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <ProductDetail />
            </TabPanel>

            <TabPanel>
              <OrderDetail />
            </TabPanel>

            <TabPanel>
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
