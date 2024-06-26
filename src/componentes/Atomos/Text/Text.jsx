import './Text.css'
import PropTypes from "prop-types";

const Text = ({ text }) => <p>{text}</p>

Text.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Text;