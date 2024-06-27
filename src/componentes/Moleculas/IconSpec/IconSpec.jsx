import Icon from '/src/componentes/Atomos/Icon/Icon';
import PropTypes from 'prop-types';
import './IconSpec.css';



const IconSpec = ({ children, icon }) => {
  return (
    <span className='specification'>
      <Icon type={icon} /> {children}
    </span >
  );
};

IconSpec.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconSpec;