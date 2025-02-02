import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />{" "}
          <Route path="/productinfo" element={<ProductInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
