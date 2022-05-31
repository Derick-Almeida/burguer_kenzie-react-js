import { Button } from "../../style/global";
import "./style.css";
import { CgSearch } from "react-icons/cg";

function InputSearch({ productList, setFilteredProducts }) {
  function showProducts(event) {
    const search = event.target.parentNode.children[0];

    const listFiltered = productList.filter(({ name, category }) => {
      return (
        name.toLowerCase().includes(search.value.toLowerCase()) ||
        category.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    setFilteredProducts(listFiltered);
    search.value = "";
  }

  return (
    <div className="container__input">
      <input type="text" placeholder="Digitar Pesquisa" />
      <Button onClick={(event) => showProducts(event)}>
        Pesquisar <CgSearch />
      </Button>
    </div>
  );
}

export default InputSearch;
