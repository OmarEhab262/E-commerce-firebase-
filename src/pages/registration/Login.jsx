import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Eye, EyeClosed } from "lucide-react";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const [openPass, setOpenPass] = useState(false);
  const changepassword = () => {
    setOpenPass(!openPass);
  };

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const userLoginFunction = async () => {
    // validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      // console.log(users.user)

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            navigate("/user-dashboard");
          } else {
            navigate("/admin-dashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };
  useEffect(() => {
    localStorage.removeItem("users");
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="login_Form bg-[#f5f3fa] px-1  py-6 border border-[#e2dff0] rounded-xl shadow-md lg:w-1/3 md:w-1/2 w-full p-5 m-7">
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-[#160a36] mb-9 mt-4">
            Login
          </h2>
        </div>

        <div className="flex flex-col gap-9  w-full px-4">
          <div className="mb-3">
            <input
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
              value={userLogin.email}
              type="email"
              placeholder="Email Address"
              className="bg-[#f5f3fa] border border-[#d3cce6] px-2 py-2 w-full rounded-md outline-none placeholder-[#1909428a] "
            />
          </div>

          <div className="mb-5 relative">
            <input
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
              value={userLogin.password}
              type={openPass ? "text" : "password"} // تغيير نوع الحقل بناءً على الحالة
              placeholder="Password"
              className="bg-[#f5f3fa] border border-[#d3cce6] px-2 py-2 w-full rounded-md outline-none placeholder-[#1909428a]"
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
              onClick={userLoginFunction}
              type="button"
              className={`bg-[#160a36] hover:bg-[#1f0d4b] w-full h-[40px] flex items-center justify-center text-white text-center py-2 font-bold rounded-md ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              } `}
            >
              {loading ? <Loader /> : "Login"}
            </button>
          </div>
        </div>

        <div className="ml-4">
          <h2 className="text-[#160a36]">
            Don&apos;t Have an account{" "}
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
