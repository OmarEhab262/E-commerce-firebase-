import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../../components/loader/Loader";
import { Eye, EyeClosed } from "lucide-react";
const Signup = () => {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(myContext);
  const [openPass, setOpenPass] = useState(false);
  const changepassword = () => {
    setOpenPass(!openPass);
  };
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  //admin@gmail.com

  const userSignupFunction = async () => {
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
    }

    setLoading(true);

    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );
      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // create user Refrence
      const userRefrence = collection(fireDB, "user");

      // Add User Detail
      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully");

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="login_Form bg-[#f5f3fa] px-1  py-6 border border-[#e2dff0] rounded-xl shadow-md lg:w-1/3 md:w-1/2 w-full p-5 m-7">
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-[#160a36] mb-9 mt-4">
            Signup
          </h2>
        </div>

        <div className="flex flex-col gap-9  w-full px-4">
          <div className="mb-3">
            <input
              value={userSignup.name}
              onChange={(e) =>
                setUserSignup({ ...userSignup, name: e.target.value })
              }
              type="text"
              placeholder="Full Name"
              className="bg-[#f5f3fa] w-full border border-[#d3cce6] px-2 py-2 rounded-md outline-none placeholder-[#1909428a]"
            />
          </div>
          <div className="mb-3">
            <input
              value={userSignup.email}
              onChange={(e) =>
                setUserSignup({ ...userSignup, email: e.target.value })
              }
              type="email"
              placeholder="Email Address"
              className="bg-[#f5f3fa] w-full border border-[#d3cce6] px-2 py-2 rounded-md outline-none placeholder-[#1909428a]"
            />
          </div>
          <div className="mb-5 relative">
            <input
              value={userSignup.password}
              onChange={(e) =>
                setUserSignup({ ...userSignup, password: e.target.value })
              }
              type={openPass ? "text" : "password"}
              placeholder="Password"
              className="bg-[#f5f3fa] w-full border border-[#d3cce6] px-2 py-2 rounded-md outline-none placeholder-[#1909428a]"
            />
            <span
              onClick={changepassword}
              className="absolute right-3 top-3 cursor-pointer"
            >
              {openPass ? <EyeClosed size={20} /> : <Eye size={20} />}
              {/* استخدام EyeOff بدلاً من EyeClosed */}
            </span>
          </div>
          <div className="mb-5">
            <button
              onClick={userSignupFunction}
              type="button"
              className={`bg-[#160a36] hover:bg-[#1f0d4b] w-full h-[40px] flex items-center justify-center text-white text-center py-2 font-bold rounded-md ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              } `}
            >
              {loading ? <Loader /> : "Signup"}
            </button>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-[#160a36]">
            Have an account{" "}
            <Link
              className="text-[#160a36] font-bold cursor-pointer"
              to={"/login"}
            >
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
