import Product from "../Product";
import Skeleton from "../Skeleton";
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
  loading,
}) {
  return (
    <section className="product__list">
      {loading && <Skeleton />}
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
