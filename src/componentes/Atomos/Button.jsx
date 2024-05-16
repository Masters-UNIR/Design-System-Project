/*Componente botón standard. He generado un css para darle estilos pero aunque le imorto el archivo no hace nada*/
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