import PropTypes from 'prop-types';
import '/src/componentes/Atomos/Button/Button.css';
import Icon from '/src/componentes/Atomos/Icon/Icon';

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");

const ButtonIcon = ({ icon, type, onClick, style }) => {
  return (
    <button className={getStyles(type)} onClick={onClick} style={style}>
      <Icon type={icon} />
    </button>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(['search', 'heart', 'info', 'flag', 'logo', 'arrowRight']).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default ButtonIcon;
