import Input from "/src/components/Atoms/Input/Input";
import ButtonIcon from "/src/components/Atoms/ButtonIcon/ButtonIcon";
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <label>
        <Input type='text' placeholder='Buscar workshop...' />
      </label>
      <ButtonIcon type='primary' icon="search" style={{ width: '10%', height: '10%' }} />
    </div>
  );
};


export default SearchBar;