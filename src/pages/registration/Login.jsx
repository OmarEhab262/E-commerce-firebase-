/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="login_Form bg-[#f5f3fa] px-1  py-6 border border-[#e2dff0] rounded-xl shadow-md lg:w-1/3 md:w-1/2 w-full p-5">
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-[#160a36] mb-9 mt-4">
            Login
          </h2>
        </div>

        <div className="flex flex-col gap-9  w-full px-4">
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#f5f3fa] border border-[#d3cce6] px-2 py-2 w-full rounded-md outline-none placeholder-[#1909428a] "
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              className="bg-[#f5f3fa] border border-[#d3cce6] px-2 py-2 w-full rounded-md outline-none placeholder-[#1909428a]"
            />
          </div>

          <div className="mb-5">
            <button
              type="button"
              className="bg-[#160a36] hover:bg-[#1f0d4b] w-full text-white text-center py-2 font-bold rounded-md"
            >
              Login
            </button>
          </div>
        </div>

        <div className="ml-4">
          <h2 className="text-[#160a36]">
            Don't Have an account{" "}
            <Link className="text-[#160a36] font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
