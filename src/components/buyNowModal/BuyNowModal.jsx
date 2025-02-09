import PropTypes from "prop-types";

const BuyNowModal = ({
  openModal,
  setOpenModal,
  addressInfo,
  setAddressInfo,
  buyNowFunction,
}) => {
  if (!openModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500/75 backdrop-blur-sm transition-all z-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 z-50">
        <h2 className="text-xl font-bold text-center mb-4 text-blue-900">
          Buy Now
        </h2>
        <div className="mb-3">
          <input
            value={addressInfo.name}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                name: e.target.value,
              });
            }}
            type="text"
            name="name"
            placeholder="Enter your name"
            className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-900 "
          />
        </div>
        <div className="mb-3">
          <input
            value={addressInfo.address}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                address: e.target.value,
              });
            }}
            type="text"
            name="address"
            placeholder="Enter your address"
            className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-900 "
          />
        </div>
        <div className="mb-3">
          <input
            value={addressInfo.pincode}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                pincode: e.target.value,
              });
            }}
            type="number"
            name="pincode"
            placeholder="Enter your pincode"
            className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-900 "
          />
        </div>
        <div className="mb-3">
          <input
            value={addressInfo.mobileNumber}
            onChange={(e) => {
              setAddressInfo({
                ...addressInfo,
                mobileNumber: e.target.value,
              });
            }}
            type="text"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-900 "
          />
        </div>
        <div className="flex justify-between mt-5">
          <button
            type="button"
            onClick={() => setOpenModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 cursor-pointer   "
          >
            Close
          </button>
          <button
            onClick={() => {
              buyNowFunction();
            }}
            type="button"
            className="px-4 py-2 bg-[#160a36] text-white rounded-lg hover:opacity-90 cursor-pointer"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

BuyNowModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  addressInfo: PropTypes.object,
  setAddressInfo: PropTypes.func,
  buyNowFunction: PropTypes.func,
};

export default BuyNowModal;
