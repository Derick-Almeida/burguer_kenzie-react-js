import { CardCart } from "./style";

function CartProduct({
  cartProducts,
  setCartProducts,
  ids,
  setIds,
  setCartTotal,
}) {
  function removeProduct(id) {
    const products = cartProducts.filter((product) => {
      return product.id !== +id;
    });
    const productsIds = ids.filter((ProductId) => {
      return ProductId !== +id;
    });
    const newTotal = products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);

    setCartProducts(products);
    setIds(productsIds);
    setCartTotal(newTotal);
  }

  return (
    <ul>
      {cartProducts.map(({ id, name, img, category }) => (
        <CardCart key={id}>
          <div
            className="product__Cart--image"
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
          <div>
            <h3>{name}</h3>
            <span>{category}</span>
          </div>
          <button
            onClick={(event) => removeProduct(event.target.id)}
            className="product__Cart--button"
            id={id}
          >
            Remover
          </button>
        </CardCart>
      ))}
    </ul>
  );
}

export default CartProduct;
