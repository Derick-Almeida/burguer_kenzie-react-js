import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductsList";
import { GlobalStyle } from "./style/global";

function App() {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProductList(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header
          productList={productList}
          setFilteredProducts={setFilteredProducts}
        />
        <main>
          <ProductList
            productList={productList}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            setCartTotal={setCartTotal}
            ids={ids}
            setIds={setIds}
          />
          <Cart
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            ids={ids}
            setIds={setIds}
          />
        </main>
      </div>
    </>
  );
}

export default App;
