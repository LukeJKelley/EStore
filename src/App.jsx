import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import HomePage from "./containers/HomePage/HomePage";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { populateDatabase } from "./assets/data/populateDatabase";
import FilterProvider from "./Context/Context";

function App() {
  populateDatabase();
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <>
      <FilterProvider value={{ filteredProducts, setFilteredProducts }}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Products/:id" element={<ProductDetails />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
      <Footer />
    </>
  );
}

export default App;
