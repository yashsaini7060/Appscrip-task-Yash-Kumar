import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import FilterBar from "./Components/FilterBar/FilterBar";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <FilterBar/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
