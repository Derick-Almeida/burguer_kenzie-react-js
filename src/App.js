import { useEffect, useState } from "react";
import { GlobalStyle } from "./style/global";

import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductsList";

import api from "./data/api";
import "./App.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [ids, setIds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get()
      .then((res) => setProductList(res.data))
      .catch((err) => console.error(err))
      .finally(setTimeout(() => setLoading(false), 500));
  }, []);

  return (
    <>
      <GlobalStyle />
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
          loading={loading}
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
    </>
  );
}

export default App;
