import Icon from '/src/components/Atoms/Icon/Icon';
import PropTypes from 'prop-types';
import './IconSpec.css';



const IconSpec = ({ children, icon, style }) => {
  return (
    <span className='specification'>
      <Icon type={icon} style={style} /> {children}
    </span >
  );
};

IconSpec.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  style: PropTypes.shape({
    iconClass: PropTypes.string, // Clase CSS para el ícono
  }),
};


export default IconSpec;