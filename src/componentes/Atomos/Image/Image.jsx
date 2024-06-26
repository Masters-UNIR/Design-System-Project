
import PropTypes from "prop-types";

const Image = ({ source, altText }) => <img src={source} alt={altText} />


Image.propTypes = {
  altText: PropTypes.string.isRequired,
  source: PropTypes.string,
};
export default Image;