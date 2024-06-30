
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '/src/componentes/Atomos/Icon/Icon';
import SearchBar from '/src/componentes/Moleculas/SearchBar/SearchBar';
import NavBar from '/src/componentes/Organismo/NavBar/NavBar';
import './HeaderBar.css';

const HeaderBar = ({ variant = 'light', search }) => {

  const headerClasses = classnames('headerBar', {
    dark: variant === 'dark',
    light: variant === 'light',
    search: search
  });

  return (
    <header className={headerClasses}>
      <Icon type="logo" />
      <NavBar /> {/* Integra NavBar aquí */}
      {search && <SearchBar />}
    </header>
  );
};

HeaderBar.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']).isRequired, // Corrige el PropTypes.oneOf
  search: PropTypes.string,
};

export default HeaderBar;
