import { Button } from "../../style/global";
import "./style.css";

function CartTotal({
  cartTotal,
  cartProducts,
  setCartTotal,
  setCartProducts,
  setIds,
}) {
  function clearCart() {
    setCartProducts([]);
    setCartTotal(0);
    setIds([]);
  }
  return (
    <div
      className="box__total"
      style={{
        filter:
          cartProducts.length > 3 && "drop-shadow(0px -17px 11px #bababae8)",
      }}
    >
      <p>
        Total
        <span className="box__total--price">R$ {cartTotal.toFixed(2)}</span>
      </p>
      <Button onClick={clearCart} buttonSize="medium">
        Remover todos
      </Button>
    </div>
  );
}

export default CartTotal;
