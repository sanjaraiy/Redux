import "./App.css";


import products from "./products.json";
import Product from "./Components/Product";
import Cart from "./Components/Cart";



function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
