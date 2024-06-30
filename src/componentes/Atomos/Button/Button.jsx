

import "./Button.css";
import PropTypes from "prop-types";

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");

const Button = ({ children, type, onClick, htmlType }) => {
  return (
    <button className={getStyles(type)} onClick={onClick} type={htmlType}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
  onClick: PropTypes.func,
  htmlType: PropTypes.oneOf(["button", "sunmit", "reset"])
};

Button.defaultProps = {
  htmlType: "button",
};

export default Button;
