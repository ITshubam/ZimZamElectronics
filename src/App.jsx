import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Bundle JS
//import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewsLetter from "./components/Home/NewsLetter/NewsLetter";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import SingleProducts from "./components/SingleProducts/SingleProducts";

function App() {
return (
  <>
  <BrowserRouter>
  <Header />
  <SingleProducts />
  <Routes>
    <Route path="/"element={<Home />} />
    <Route path="/about"element={<About />} />
    <Route path="/products"element={<AllProducts />} />
    <Route path="/contact"element={<Contact />} />
    
    </Routes>
    <NewsLetter />
    <Footer />
    </BrowserRouter>
  </>
);
}
export default App;


