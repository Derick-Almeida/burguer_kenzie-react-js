import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

function Cart({
  cartProducts,
  cartTotal,
  setCartTotal,
  setCartProducts,
  ids,
  setIds,
}) {
  return (
    <aside>
      <h2>Carrinho de compras</h2>
      <CartProduct
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        ids={ids}
        setIds={setIds}
        setCartTotal={setCartTotal}
      />
      <CartTotal
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        setCartProducts={setCartProducts}
        setIds={setIds}
      />
    </aside>
  );
}

export default Cart;
