import './Input.css'
import PropTypes from "prop-types";

const Input = ({ type, placeholder = "" }) => {
  return <input type={type} placeholder={placeholder} />
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
export default Input;