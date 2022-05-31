import Product from "../Product";
import "./style.css";

function ProductList({
  productList,
  filteredProducts,
  setFilteredProducts,
  cartProducts,
  setCartProducts,
  setCartTotal,
  ids,
  setIds,
}) {
  return (
    <section className="product__list">
      {filteredProducts.length !== 0
        ? filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              productList={productList}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              setFilteredProducts={setFilteredProducts}
              setCartTotal={setCartTotal}
              ids={ids}
              setIds={setIds}
            />
          ))
        : productList.map((product) => (
            <Product
              key={product.id}
              product={product}
              productList={productList}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              setFilteredProducts={setFilteredProducts}
              setCartTotal={setCartTotal}
              ids={ids}
              setIds={setIds}
            />
          ))}
    </section>
  );
}

export default ProductList;
