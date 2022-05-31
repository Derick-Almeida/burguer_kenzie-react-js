import { Button } from "../../style/global";
import { Card } from "./style";

function Product({
  product,
  cartProducts,
  setCartProducts,
  setFilteredProducts,
  setCartTotal,
  productList,
  ids,
  setIds,
}) {
  const { id, name, category, price, img } = product;

  function handleClick(id) {
    const product = productList.find((product) => {
      return product.id === +id;
    });

    if (ids.indexOf(product.id) === -1) {
      setIds([...ids, product.id]);

      setCartProducts([...cartProducts, product]);

      const totalPrice = [...cartProducts, product].reduce((acc, { price }) => {
        return acc + price;
      }, 0);

      setCartTotal(totalPrice);
    } else {
      console.error("Protudo já existe no carrinho");
    }

    setFilteredProducts([]);
  }

  return (
    <Card>
      <div
        className="product__image"
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
      <div className="product__info">
        <h2>{name}</h2>
        <span>{category}</span>
        {price.toString().indexOf(".") === -1 ? (
          <p>R$ {price}.00</p>
        ) : (
          <p>R$ {price}</p>
        )}
        <Button id={id} onClick={(event) => handleClick(event.target.id)}>
          Adicionar
        </Button>
      </div>
    </Card>
  );
}

export default Product;
