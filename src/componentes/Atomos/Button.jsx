//Componente botón standard.


import './Button.css';
import Proptypes from "prop-types";

const getStyles = (...args) => ["button", ...args].filter(Boolean).join("");

const Button = ({ children, type }) => {
  return (
    <button className={getStyles(type)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: Proptypes.string.isRequired,
  type: Proptypes.oneOf(["primary", "secondary", "tertiary"]),
};

export default Button;