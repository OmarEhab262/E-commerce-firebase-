/* eslint-disable react/prop-types */
import NoPage from "../pages/noPage/NoPage";

export const ProtectedRouteForUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));
  if (user?.role === "user") {
    return children;
  } else {
    return <NoPage />;
  }
};
