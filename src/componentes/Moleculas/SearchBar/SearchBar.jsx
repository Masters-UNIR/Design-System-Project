import Input from "/src/componentes/Atomos/Input/Input"
import Button from "/src/componentes/Atomos/Button/Button"
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="searchBar">
      <Input type='text' placeholder='Buscar producto...' />
      <Button variant="light" icon="search" text="Buscar" />
    </div>
  );
};


export default SearchBar;