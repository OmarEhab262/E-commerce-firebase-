import { Button } from "@material-tailwind/react";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen  text-gray-800">
      <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2 text-gray-400">Oops! Page not found.</p>
      <Button color="blue" ripple="light" className="mt-4 cursor-pointer">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default NoPage;
