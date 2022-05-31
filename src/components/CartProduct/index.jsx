import { CardCart } from "./style";
import { FiShoppingBag } from "react-icons/fi";
import "./style.css";

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
    <ul
      className="list__cart"
      style={{ padding: cartProducts.length !== 0 && "20px 10px" }}
    >
      {cartProducts.length !== 0 ? (
        cartProducts.map(({ id, name, img, category }) => (
          <CardCart key={id}>
            <div
              className="product__cart--image"
              style={{ backgroundImage: `url('${img}')` }}
            ></div>
            <div className="product__cart--info">
              <h3 className="product__cart--name">{name}</h3>
              <span className="product__cart--category">{category}</span>
            </div>
            <button
              onClick={(event) => removeProduct(event.target.id)}
              className="product__cart--button"
              id={id}
            >
              Remover
            </button>
          </CardCart>
        ))
      ) : (
        <>
          <FiShoppingBag className="list__cart--icon" />
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </>
      )}
    </ul>
  );
}

export default CartProduct;
