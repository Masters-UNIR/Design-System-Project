

import "./Button.css";
import PropTypes from "prop-types";

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");

const Button = ({ children, type, onClick }) => {
  return (
    <button className={getStyles(type)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
  onClick: PropTypes.func,
};

export default Button;
