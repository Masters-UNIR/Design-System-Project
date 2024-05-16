//Componente botón standard. Prop onClick

import './Button.css';
import PropTypes from 'prop-types';


const Button = ({ onClick }) => {
  return (
    <div>
      <button className='custom-button' onClick={onClick}>Inicio</button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;