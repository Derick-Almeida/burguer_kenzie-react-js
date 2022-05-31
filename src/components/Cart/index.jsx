import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import { RiShoppingCart2Fill } from "react-icons/ri";
import "./style.css";

function Cart({
  cartProducts,
  cartTotal,
  setCartTotal,
  setCartProducts,
  ids,
  setIds,
}) {
  return (
    <aside className="cart">
      <h2 className="cart__title">
        <RiShoppingCart2Fill /> Carrinho de compras
      </h2>
      <CartProduct
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        ids={ids}
        setIds={setIds}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
      {cartProducts.length !== 0 && (
        <CartTotal
          cartTotal={cartTotal}
          cartProducts={cartProducts}
          setCartTotal={setCartTotal}
          setCartProducts={setCartProducts}
          setIds={setIds}
        />
      )}
    </aside>
  );
}

export default Cart;
