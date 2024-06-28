import Input from "/src/componentes/Atomos/Input/Input";
import ButtonIcon from "/src/componentes/Atomos/ButtonIcon/ButtonIcon";
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <Input type='text' placeholder='Buscar workshop...' />
      <ButtonIcon type='primary' icon="search" style={{ width: '10%', height: '10%' }} />
    </div>
  );
};


export default SearchBar;