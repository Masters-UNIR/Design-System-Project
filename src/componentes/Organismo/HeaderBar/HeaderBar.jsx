import classnames from 'classnames'
import Icon from '/src/componentes/Atomos/Icon/Icon'
import SearchBar from '/src/componentes/Moleculas/SearchBar/SearchBar'
import PropTypes from 'prop-types';
import './HeaderBar.css'

const HeaderBar = ({ variant = 'light', search }) => {

  const headerClasses = classnames('headerBar', {
    dark: variant === 'dark',
    light: variant === 'light',
    search: search
  })

  return (
    <header className={headerClasses}>
      <Icon type="logo" />
      {search && <SearchBar />}
    </header>
  )
}

HeaderBar.propTypes = {
  variant: PropTypes.oneOf('light', 'dark').isRequired,
  search: PropTypes.string,
};
export default HeaderBar