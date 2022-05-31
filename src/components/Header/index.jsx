import InputSearch from "../InputSearch";
import "./style.css";

function Header({ productList, setFilteredProducts }) {
  return (
    <>
      <header className="header">
        <h1 className="title" onClick={() => setFilteredProducts([])}>
          Burger <span className="title--small">Kenzie</span>
        </h1>
        <InputSearch
          productList={productList}
          setFilteredProducts={setFilteredProducts}
        />
      </header>
    </>
  );
}

export default Header;
