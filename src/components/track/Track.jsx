import { ShoppingBag } from "lucide-react";

const Track = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Our Best Products
        </h2>

        <div className="flex flex-wrap justify-center -m-4 text-center">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-1 border-gray-300 bg-white shadow-lg shadow-gray-50 hover:shadow-2xl hover:shadow-gray-300 transition-all duration-300 px-6 py-8 rounded-xl">
                <div className="flex justify-center items-center bg-gray-100 w-16 h-16 rounded-full mx-auto mb-4">
                  <ShoppingBag color="#1C398E" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Premium T-Shirts
                </h3>
                <p className="text-gray-600 mt-2">
                  Our T-Shirts are 100% made of high-quality cotton.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Track;
