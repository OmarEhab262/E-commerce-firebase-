import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="main-content min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
