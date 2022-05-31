import { Button } from "../../style/global";

function CartTotal({ cartTotal, setCartTotal, setCartProducts, setIds }) {
  function clearCart() {
    setCartProducts([]);
    setCartTotal(0);
    setIds([]);
  }
  return (
    <div>
      <p>
        Remover todos
        <span>R$ {cartTotal.toFixed(2)}</span>
      </p>
      <Button onClick={clearCart} buttonSize="medium">
        Remover todos{" "}
      </Button>
    </div>
  );
}

export default CartTotal;
