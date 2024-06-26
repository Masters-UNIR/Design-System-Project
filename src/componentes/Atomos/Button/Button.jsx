

import "./Button.css";
import PropTypes from "prop-types";

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");

const Button = ({ children, type }) => {
  return (
    <button className={getStyles(type)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
};

export default Button;
