import PropTypes from "prop-types";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="main-content min-h-screen">{children}</div>
      <Footer />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
