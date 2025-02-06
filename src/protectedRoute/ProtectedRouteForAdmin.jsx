/* eslint-disable react/prop-types */
import NoPage from "../pages/noPage/NoPage";

export const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));
  if (user?.role === "admin") {
    return children;
  } else {
    return <NoPage />;
  }
};
